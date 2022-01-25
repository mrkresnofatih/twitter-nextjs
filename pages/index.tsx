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
import {useEffect, useState} from "react";
import {DialogRenderer} from "../components/hoc/DialogRenderer";
import {isDialogModeSelector, loadingStateSelector} from "../tedux/sys/selectors";
import {requestGetHomeLatest, requestGetHomeOlder} from "../apis/homeApi";
import {feedIdsSelector} from "../tedux/feed/selector";
import {LoadOlderTweetsButton} from "../components/layout/LoadOlderTweetsButton";
import {FeedNotificationLoader} from "../components/hoc/FeedNotificationLoader";

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
    const [getHomeLatestMode, setGetHomeLatestMode] = useState<boolean>(true)
    const [getHomeRequestCounter, setGetHomeRequestCounter] = useState<number>(0)
    const feedIds = useSelector(feedIdsSelector);

    useEffect(() => {
        if (getHomeLatestMode) {
            console.log("latest")
            requestGetHomeLatest()
        } else {
            console.log("older")
            requestGetHomeOlder()
        }
    }, [getHomeRequestCounter])

    const triggerGetHomeAPI = () => setGetHomeRequestCounter(i => i + 1)

    const triggerGetHomeLatest = () => {
        if (!getHomeLatestMode) {
            setGetHomeLatestMode(true)
        }
        triggerGetHomeAPI()
    }

    const triggerGetHomeOlder = () => {
        if (getHomeLatestMode) {
            setGetHomeLatestMode(false)
        }
        triggerGetHomeAPI()
    }

    return (
        <>
            <FeedNotificationLoader onClick={triggerGetHomeLatest}/>
            {feedIds.map((id) => (
                <TweetCard tweetId={id} key={id}/>
            ))}
            <LoadOlderTweetsButton onClick={triggerGetHomeOlder}/>
        </>
    )
}
