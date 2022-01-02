import type {NextPage} from 'next'
import {BaseLayout} from "../components/layout/BaseLayout";
import {HomeHeader} from "../components/header/HomeHeader";
import {NavMenu} from "../components/nav/NavMenu";
import {TweetCard} from "../components/card/TweetCard";
import {FollowList} from "../components/list/FollowList";
import {FeedUpdateNotification} from "../components/layout/FeedUpdateNotification";
import {TweetHoverButton} from "../components/button/TweetHoverButton";
import {pageHeaders} from "../constants/pageHeaders";

const Home: NextPage = () => {
    return (
        <BaseLayout
            header={
                <HomeHeader/>
            }
            left={
                <NavMenu
                    activeHeader={pageHeaders.HOME}
                    responsive={true}
                />
            }
            middle={
                <>
                    <FeedUpdateNotification numOfUpdates={12}/>
                    <TweetCard tweetId={6}/>
                    <TweetCard tweetId={9}/>
                    <TweetCard tweetId={11}/>
                </>
            }
            hoverBottomLeft={
                <TweetHoverButton/>
            }
            right={
                <FollowList/>
            }
            isLoading={false}
        />
    )
}

export default Home
