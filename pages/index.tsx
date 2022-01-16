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
import {DialogRenderer} from "../components/hoc/DialogRenderer";
import {isDialogModeSelector, loadingStateSelector} from "../tedux/sys/selectors";

const Home: NextPage = () => {
    return (
        <StoreWrapper>
            <HomeComp/>
        </StoreWrapper>
    )
}

export default Home

const HomeComp = () => {
    const isAuthed: boolean = useSelector(isAuthedSelector);
    const dialogState: boolean = useSelector(isDialogModeSelector);
    const loadingState: boolean = useSelector(loadingStateSelector);

    return (
        <BaseLayout
            header={<HomeHeader/>}
            left={<NavMenu activeHeader={pageHeaders.HOME} responsive={true}/>}
            middle={
                <>
                    <FeedUpdateNotification numOfUpdates={12}/>
                    <TweetCard tweetId={6}/>
                    <TweetCard tweetId={9}/>
                    <TweetCard tweetId={11}/>
                </>
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
