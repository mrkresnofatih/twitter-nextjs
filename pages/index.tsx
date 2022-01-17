import type {NextPage} from 'next'
import {BaseLayout} from "../components/layout/BaseLayout";
import {HomeHeader} from "../components/header/HomeHeader";
import {NavMenu} from "../components/nav/NavMenu";
import {TweetCard} from "../components/card/TweetCard";
import {FollowList} from "../components/list/FollowList";
import {FeedUpdateNotification} from "../components/layout/FeedUpdateNotification";
import {TweetHoverButton} from "../components/button/TweetHoverButton";
import {pageHeaders} from "../constants/pageHeaders";
import {StoreWrapper} from "../tedux/StoreWrapper";
import {useSelector} from "react-redux";
import {isAuthedSelector} from "../tedux/auth/selectors";
import * as React from "react";
import {useEffect} from "react";
import {DialogRenderer} from "../components/hoc/DialogRenderer";
import {isDialogModeSelector, loadingStateSelector} from "../tedux/sys/selectors";
import {requestGetHomeLatest} from "../apis/homeApi";
import {feedIdsSelector} from "../tedux/feed/selector";

const Home: NextPage = () => {
    return (
        <StoreWrapper>
            <HomeComp/>
        </StoreWrapper>
    )
}

export default Home

const HomeComp = () => {
    const isAuthed = useSelector(isAuthedSelector);
    const dialogState: boolean = useSelector(isDialogModeSelector);
    const loadingState: boolean = useSelector(loadingStateSelector);

    return (
        <BaseLayout
            header={<HomeHeader/>}
            left={<NavMenu activeHeader={pageHeaders.HOME} responsive={true}/>}
            middle={
                <HomeFeed/>
            }
            hoverBottomLeft={<TweetHoverButton/>}
            right={<FollowList/>}
            isLoading={loadingState}
            isAuthenticated={isAuthed}
            isDialogMode={dialogState}
            dialogComponent={<DialogRenderer/>}
        />
    )
}

const HomeFeed = () => {
    const feedIds = useSelector(feedIdsSelector);

    useEffect(() => {
        requestGetHomeLatest()
    }, [])

    return (
        <>
            <FeedUpdateNotification numOfUpdates={12}/>
            {feedIds.map((id) => (
                <TweetCard tweetId={id} key={id} />
            ))}
        </>
    )
}
