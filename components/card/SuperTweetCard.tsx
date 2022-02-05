// @flow
import * as React from 'react';
import styles from '../../styles/card/supertweetcard.module.css'
import {TagCollection, TweetReactionDrawer} from "./TweetCard";
import {
    specificFeedPlayerSelector,
    specificFeedTweetSelector,
    specificSuperTweetSelector
} from "../../tedux/feed/selector";
import {useSelector} from "react-redux";
import {handleNumberAbbreviation} from "../../utils/textUtils";

type Props = {
    tweetId: number
};
export const SuperTweetCard = (props: Props) => {
    const tweetData = useSelector(specificSuperTweetSelector(props.tweetId))
    const playerData = useSelector(specificFeedPlayerSelector(tweetData.playerId))

    return (
        <div className={styles.superTweetCardContainer}>
            <div className={styles.superTweetHeader}>
                <SuperTweetAvatar avatarUrl={playerData.imageUrl}/>
                <div className={styles.superTweetPlayerInfo}>
                    <h5 className={styles.playerUsername}>{playerData.userName}</h5>
                    <h6 className={styles.playerFullName}>{playerData.fullName}</h6>
                </div>
            </div>
            <p className={styles.superTweetContent}>{tweetData.message}</p>
            <img
                src={tweetData.imageUrl}
                className={styles.superTweetImage}
                alt={"test"}
            />
            <TagCollection tagNames={tweetData.tags}/>
            <SuperTweetStats
                numOfLikes={tweetData.numOfReplies}
                numOfReplies={tweetData.numOfRetweets}
                numOfRetweets={tweetData.numOfRetweets}
            />
            <SuperTweetReactionDrawer tweetId={props.tweetId}/>
        </div>
    );
};

const SuperTweetAvatar = (props: {
    avatarUrl: string
}) => {
    return (
        <img
            className={styles.superTweetAvatar}
            src={props.avatarUrl}
            alt={"avatar"}
        />
    )
}

const SuperTweetStats = (props: {
    numOfReplies: number,
    numOfRetweets: number,
    numOfLikes: number
}) => {
    const displayStats = {
        numOfReplies: handleNumberAbbreviation(props.numOfReplies),
        numOfRetweets: handleNumberAbbreviation(props.numOfRetweets),
        numOfLikes: handleNumberAbbreviation(props.numOfLikes),
    }

    return <div className={styles.superTweetStatsContainer}>
        <div className={styles.superTweetStatHolder}>
            <p>{displayStats.numOfReplies}</p>
            <p className={styles.superTweetStatText}>REPLIES</p>
        </div>
        <div className={styles.superTweetStatHolder}>
            <p>{displayStats.numOfRetweets}</p>
            <p className={styles.superTweetStatText}>RETWEETS</p>
        </div>
        <div className={styles.superTweetStatHolder}>
            <p>{displayStats.numOfLikes}</p>
            <p className={styles.superTweetStatText}>LIKES</p>
        </div>
    </div>
}

const SuperTweetReactionDrawer = (props: {
    tweetId: number
}) => {
    return (
        <div className={styles.superTweetReactionDrawer}>
            <TweetReactionDrawer tweetId={props.tweetId}/>
        </div>
    )
}
