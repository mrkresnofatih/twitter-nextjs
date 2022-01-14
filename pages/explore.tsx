// @flow
import * as React from 'react';
import {NextPage} from "next";
import {BaseLayout} from "../components/layout/BaseLayout";
import {ExploreHeader} from "../components/header/ExploreHeader";
import {NavMenu} from "../components/nav/NavMenu";
import {pageHeaders} from "../constants/pageHeaders";
import {TweetCard} from "../components/card/TweetCard";
import {FollowList} from "../components/list/FollowList";
import {StoreWrapper} from "../tedux/StoreWrapper";
import {useSelector} from "react-redux";
import {isAuthedSelector} from "../tedux/auth/selectors";
import {DialogRenderer} from "../components/hoc/DialogRenderer";
import {sysSelector} from "../tedux/sys/selectors";
import {DialogModes} from "../constants/dialogModes";
import {TrendCard} from "../components/card/TrendCard";
import {BaseHeader} from "../components/header/BaseHeader";

const Explore: NextPage = () => {
    return (
        <StoreWrapper>
            <ExploreComp/>
        </StoreWrapper>
    );
};

export default Explore

const ExploreComp = () => {
    const isAuthed: boolean = useSelector(isAuthedSelector);
    const {dialogMode} = useSelector(sysSelector);

    return (
        <BaseLayout
            left={
                <NavMenu
                    responsive={true}
                    activeHeader={pageHeaders.EXPLORE}/>
            }
            middle={
                <>
                    <TrendsHeader/>
                    <TrendCard trendId={23}/>
                    <TrendCard trendId={23}/>
                    <TrendCard trendId={23}/>
                    <TrendCard trendId={23}/>
                    <LatestHeader/>
                    <TweetCard tweetId={32}/>
                    <TweetCard tweetId={12}/>
                    <TweetCard tweetId={29}/>
                    <TweetCard tweetId={9}/>
                </>
            }
            right={<FollowList/>}
            header={<ExploreHeader/>}
            isLoading={false}
            isAuthenticated={isAuthed}
            dialogComponent={<DialogRenderer/>}
            isDialogMode={dialogMode !== DialogModes.NONE}
        />
    )
}

const TrendsHeader = () => {
    return (
        <BaseHeader title={<h3>Trending</h3>} options={<div/>} isNavHeader={false}/>
    )
}

const LatestHeader = () => {
    return (
        <BaseHeader title={<h3>Latest</h3>} options={<div/>} isNavHeader={false}/>
    )
}