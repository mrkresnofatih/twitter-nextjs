// @flow
import * as React from 'react';
import styles from '../../styles/card/tweetcard.module.css';
import {Icon} from "../icon/Icon";
import {IconFileNames} from "../../utils/iconUtils";
import {Tweet} from "../../models/Tweet";
import {getTimestamp} from "../../utils/timeUtils";
import {Player} from "../../models/Player";
import {useSelector} from "react-redux";
import {
    bookmarkExistsSelector,
    likeExistsSelector,
    myRetweetExistsSelector,
    specificFeedPlayerSelector,
    specificFeedTweetSelector
} from "../../tedux/feed/selector";
import {Image} from "../image/Image";
import {requestBookmarkTweet, requestLikeTweet, requestRetweetTweet} from "../../apis/tweetApi";

type Props = {
    tweetId: number
};
export const TweetCard = (props: Props) => {
    const tweetData: Tweet = useSelector(specificFeedTweetSelector(props.tweetId));
    const playerData: Player = useSelector(specificFeedPlayerSelector(tweetData.playerId));

    const isReply: boolean = (tweetData.replyOf !== 0);
    const isRetweet: boolean = (tweetData.retweetOf !== 0);
    const actualTweetId = isRetweet ? tweetData.retweetOf : props.tweetId;

    return (
        <div className={styles.tweetCardContainer}>
            {isReply && <PreTweet replyOf={tweetData.replyOf}/>}
            <div className={styles.tweetCard}>
                <TweetCardMain tweetId={actualTweetId}/>
                {isReply && <div className={styles.tweetHistoryLineDown}/>}
                {isRetweet && <RetweetHighlight userName={playerData.userName}/>}
            </div>

        </div>
    );
};

const TweetCardMain = (props: { tweetId: number }) => {
    const tweetData: Tweet = useSelector(specificFeedTweetSelector(props.tweetId));
    const playerData: Player = useSelector(specificFeedPlayerSelector(tweetData.playerId));
    const timeStamp: string = getTimestamp(tweetData.createdAt);

    return (
        <>
            <TweetAvatar avatarUrl={playerData.imageUrl}/>
            <div className={styles.tweetCardContent}>
                <TweetContentHeader
                    timestamp={timeStamp}
                    userName={playerData.userName}
                />
                <TweetContentBody
                    imageUrl={tweetData.imageUrl}
                    message={tweetData.message}
                    replyUserName={playerData.userName}
                />
                <TagCollection tagNames={tweetData.tags}/>
                <TweetReactionDrawer tweetId={tweetData.id}/>
            </div>
        </>
    )
}

const RetweetHighlight = (props: {
    userName: string
}) => {
    return (
        <div className={styles.tweetHighlight}>
            <Icon
                iconFileName={IconFileNames.RETWEET_OUTLINE_WHITE}
                className={styles.retweetedByIcon}
            />{`by ${props.userName}`}</div>
    )
}

const TweetAvatar = (props: {
    avatarUrl: string
}) => {
    return (
        <img
            className={styles.tweetCardAvatar}
            src={props.avatarUrl}
            alt={"avatar"}
        />
    )
}

interface tweetContentBodyProp {
    message: string,
    imageUrl: string,
    replyUserName?: string
}

const TweetContentBody = (props: tweetContentBodyProp) => {
    return (
        <>
            <p className={styles.tweetCardMessage}>{props.message}</p>
            <Image
                className={styles.tweetImage}
                src={props.imageUrl}
            />
        </>
    )
}

interface tweetContentHeaderProp {
    userName: string,
    timestamp: string
}

const TweetContentHeader = (props: tweetContentHeaderProp) => {
    return (
        <div className={styles.tweetCardContentHeader}>
            <h3 className={styles.tweetUsername}>{props.userName}</h3>
            <h4 className={styles.tweetCardTimestamp}>{props.timestamp}</h4>
        </div>
    )
}

const TweetReactionDrawer = (props: { tweetId: number }) => {
    const isLiked = useSelector(likeExistsSelector(props.tweetId))
    const isBookmarked = useSelector(bookmarkExistsSelector(props.tweetId))
    const isRetweeted = useSelector(myRetweetExistsSelector(props.tweetId))
    const reactionButtonDataList: ReactionButtonData[] = [
        {
            iconFileName: IconFileNames.REPLY_OUTLINE_WHITE,
            hoverIconFileName: IconFileNames.REPLY_OUTLINE_PURPLE,
            isActive: false,
            onClick: () => console.log("reply"),
        },
        {
            iconFileName: IconFileNames.RETWEET_OUTLINE_WHITE,
            hoverIconFileName: IconFileNames.RETWEET_OUTLINE_PURPLE,
            isActive: isRetweeted,
            onClick: () => requestRetweetTweet(props.tweetId)
        },
        {
            iconFileName: IconFileNames.LOVE_OUTLINE_WHITE,
            hoverIconFileName: IconFileNames.LOVE_OUTLINE_PURPLE,
            isActive: isLiked,
            onClick: () => requestLikeTweet(props.tweetId)
        },
        {
            iconFileName: IconFileNames.BOOKMARK_OUTLINE_WHITE,
            hoverIconFileName: IconFileNames.BOOKMARK_OUTLINE_PURPLE,
            isActive: isBookmarked,
            onClick: () => requestBookmarkTweet(props.tweetId)
        }
    ]

    return (
        <div className={styles.tweetReactionContainer}>
            {reactionButtonDataList.map((reactionButtonData, index) => (
                <ReactionButton
                    key={index}
                    iconFileName={reactionButtonData.iconFileName}
                    hoverIconFileName={reactionButtonData.hoverIconFileName}
                    isActive={reactionButtonData.isActive}
                    onClick={reactionButtonData.onClick}
                />
            ))}
        </div>
    )
}

interface ReactionButtonData {
    iconFileName: IconFileNames,
    hoverIconFileName: IconFileNames,
    isActive: boolean,
    onClick: () => void
}

const ReactionButton = (props: ReactionButtonData) => {
    const isActiveStyle = props.isActive ? styles.tweetReactionButtonActive : undefined;
    return (
        <div className={`${styles.tweetReactionButton} ${isActiveStyle}`} onClick={props.onClick}>
            <Icon
                iconFileName={props.iconFileName}
                className={styles.tweetReactionIcon}
            />
            <Icon
                iconFileName={props.hoverIconFileName}
                className={styles.tweetReactionHover}
            />
        </div>
    )
}

const PreTweet = (props: {
    replyOf: number
}) => {
    const replyTweetData: Tweet = useSelector(specificFeedTweetSelector(props.replyOf));
    const playerData = useSelector(specificFeedPlayerSelector(replyTweetData.playerId));
    const timeStamp: string = getTimestamp(replyTweetData.createdAt);

    if (props.replyOf === 0) {
        return <></>;
    }

    return (
        <div className={styles.tweetCard}>
            <TweetAvatar avatarUrl={playerData.imageUrl}/>
            <div className={styles.tweetCardContent}>
                <TweetContentHeader
                    timestamp={timeStamp}
                    userName={playerData.userName}
                />
                <TweetContentBody
                    message={replyTweetData.message}
                    imageUrl={replyTweetData.imageUrl}
                />
                <TagCollection tagNames={replyTweetData.tags}/>
                <TweetReactionDrawer tweetId={props.replyOf}/>
            </div>
            <div className={styles.tweetHistoryLineUp}/>
            <div className={`${styles.tweetHighlight} ${styles.replyHighlight}`}>
                <Icon iconFileName={IconFileNames.REPLY_OUTLINE_WHITE} className={styles.retweetedByIcon}/>
                {`to @${playerData.userName}`}
            </div>
        </div>
    )
}

const TagCard = (props: {
    tagName: string
}) => {
    return (
        <span className={styles.tagCard}>{`#${props.tagName}`}</span>
    )
}

const TagCollection = (props: {
    tagNames: string[]
}) => {
    return (
        <div className={styles.tagCollection}>
            {props.tagNames.map((tagName, index) => (
                <TagCard tagName={tagName} key={index}/>
            ))}
        </div>
    )
}