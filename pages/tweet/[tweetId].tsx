// @flow
import * as React from 'react';
import {BaseLayout} from "../../components/layout/BaseLayout";
import {StoreWrapper} from "../../tedux/StoreWrapper";
import {pageHeaders} from "../../constants/pageHeaders";
import {NavMenu} from "../../components/nav/NavMenu";
import {RecommendedFollowsLoader} from "../../components/hoc/RecommendedFollowsLoader";
import {TweetHeader} from "../../components/header/TweetHeader";
import {useSelector} from "react-redux";
import {isDialogModeSelector, loadingStateSelector} from "../../tedux/sys/selectors";
import {isAuthedSelector} from "../../tedux/auth/selectors";
import {DialogRenderer} from "../../components/hoc/DialogRenderer";
import {SuperTweetCard} from "../../components/card/SuperTweetCard";
import {useEffect} from "react";
import {specificFeedTweetSelector, superTweetPageFeedIdsSelector} from "../../tedux/feed/selector";
import {TweetCard} from "../../components/card/TweetCard";
import {requestSuperTweet} from "../../apis/tweetApi";

export const getServerSideProps = (context: any) => {
    return {props: {tweetId: context.query.tweetId}}
}

type Props = {
    tweetId: number
};
const TweetPage = (props: Props) => {
    return (
        <StoreWrapper>
            <SuperTweetComp tweetId={props.tweetId}/>
        </StoreWrapper>
    );
};

export default TweetPage

const SuperTweetComp = (props: {
    tweetId: number
}) => {
    const loadingState: boolean = useSelector(loadingStateSelector);
    const dialogState: boolean = useSelector(isDialogModeSelector);
    const isAuthed: boolean = useSelector(isAuthedSelector);
    return (
        <BaseLayout
            left={<NavMenu activeHeader={pageHeaders.TWEET} responsive={true}/>}
            middle={<SuperTweetFeed tweetId={props.tweetId}/>}
            right={<RecommendedFollowsLoader/>}
            header={<TweetHeader/>}
            isLoading={loadingState}
            isAuthenticated={isAuthed}
            isDialogMode={dialogState}
            dialogComponent={<DialogRenderer/>}
        />
    )
}

const SuperTweetFeed = (props: {
    tweetId: number
}) => {
    const superTweetFeedIds = useSelector(superTweetPageFeedIdsSelector)
    const superTweetData = useSelector(specificFeedTweetSelector(props.tweetId))

    useEffect(() => {
        requestSuperTweet(props.tweetId)
    }, [])

    if (superTweetData) {
        return (
            <>
                <SuperTweetCard tweetId={props.tweetId}/>
                {superTweetFeedIds.map((id) => (
                    <TweetCard tweetId={id} key={id}/>
                ))}
            </>
        )
    }

    return <></>

}
