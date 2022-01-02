// @flow
import * as React from 'react';
import {NextPage} from "next";
import {BaseLayout} from "../components/layout/BaseLayout";
import {ExploreHeader} from "../components/header/ExploreHeader";
import {NavMenu} from "../components/nav/NavMenu";
import {pageHeaders} from "../constants/pageHeaders";
import {FeedUpdateNotification} from "../components/layout/FeedUpdateNotification";
import {TweetCard} from "../components/card/TweetCard";
import {FollowList} from "../components/list/FollowList";

const Explore: NextPage = () => {
    return (
        <BaseLayout
            left={
                <NavMenu
                    responsive={true}
                    activeHeader={pageHeaders.EXPLORE}/>
            }
            middle={
                <>
                    <FeedUpdateNotification numOfUpdates={21}/>
                    <TweetCard tweetId={32}/>
                    <TweetCard tweetId={12}/>
                    <TweetCard tweetId={29}/>
                    <TweetCard tweetId={9}/>
                </>
            }
            right={<FollowList/>}
            header={<ExploreHeader/>}
            isLoading={false}/>
    );
};

export default Explore