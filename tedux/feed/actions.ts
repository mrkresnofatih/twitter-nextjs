import {ResponsePayload} from "../../types/responsePayload";
import {Tweet} from "../../models/Tweet";
import {Reaction} from "../../models/Reaction";
import {Dictionary} from "../../types/dictionary";
import {Player} from "../../models/Player";
import {Follow} from "../../models/Follow";

export enum FeedActionNames {
    ACCEPT_GET_HOME = "FEED/ACCEPT_GET_HOME",
    ACCEPT_POST_TWEET = "FEED/ACCEPT_POST_TWEET",
    ACCEPT_LIKE_TWEET = "FEED/ACCEPT_LIKE_TWEET",
    ACCEPT_BOOKMARK_TWEET = "FEED/ACCEPT_BOOKMARK_TWEET",
    ACCEPT_RETWEET_TWEET = "FEED/ACCEPT_RETWEET_TWEET",
    ACCEPT_REPLY_TWEET = "FEED/ACCEPT_REPLY_TWEET",
    ACCEPT_RECOMMENDED_FOLLOWS = "FEED/ACCEPT_RECOMMENDED_FOLLOWS",
    ACCEPT_START_FOLLOW = "FEED/ACCEPT_START_FOLLOW"
}

interface AcceptGetHomeResponseActionType {
    type: FeedActionNames.ACCEPT_GET_HOME,
    payload: ResponsePayload,
    playerId: number
}

interface AcceptPostTweetResponseActionType {
    type: FeedActionNames.ACCEPT_POST_TWEET,
    payload: Tweet
}

interface AcceptLikeTweetResponseActionType {
    type: FeedActionNames.ACCEPT_LIKE_TWEET,
    payload: Reaction
}

interface AcceptBookmarkTweetResponseActionType {
    type: FeedActionNames.ACCEPT_BOOKMARK_TWEET,
    payload: Reaction
}

interface AcceptRetweetTweetResponseActionType {
    type: FeedActionNames.ACCEPT_RETWEET_TWEET,
    payload: Dictionary<Tweet>
}

interface AcceptReplyTweetResponseActionType {
    type: FeedActionNames.ACCEPT_REPLY_TWEET,
    payload: Dictionary<Tweet>
}

interface AcceptGetRecommendedFollowsActionType {
    type: FeedActionNames.ACCEPT_RECOMMENDED_FOLLOWS,
    payload: Dictionary<Player>
}

interface AcceptStartFollowResponseActionType {
    type: FeedActionNames.ACCEPT_START_FOLLOW,
    payload: Follow
}

export const AcceptGetHomeResponse = (payload: ResponsePayload, playerId: number): AcceptGetHomeResponseActionType => {
    return {
        type: FeedActionNames.ACCEPT_GET_HOME,
        payload: payload,
        playerId
    }
}

export const AcceptPostTweetResponse = (payload: Tweet): AcceptPostTweetResponseActionType => {
    return {
        type: FeedActionNames.ACCEPT_POST_TWEET,
        payload
    }
}

export const AcceptLikeTweetResponse = (payload: Reaction): AcceptLikeTweetResponseActionType => {
    return {
        type: FeedActionNames.ACCEPT_LIKE_TWEET,
        payload
    }
}

export const AcceptBookmarkTweetResponse = (payload: Reaction): AcceptBookmarkTweetResponseActionType => {
    return {
        type: FeedActionNames.ACCEPT_BOOKMARK_TWEET,
        payload
    }
}

export const AcceptRetweetTweetResponse = (payload: Dictionary<Tweet>): AcceptRetweetTweetResponseActionType => {
    return {
        type: FeedActionNames.ACCEPT_RETWEET_TWEET,
        payload
    }
}

export const AcceptReplyTweetResponse = (payload: Dictionary<Tweet>): AcceptReplyTweetResponseActionType => {
    return {
        type: FeedActionNames.ACCEPT_REPLY_TWEET,
        payload
    }
}

export const AcceptRecommendedFollows = (payload: Dictionary<Player>): AcceptGetRecommendedFollowsActionType => {
    return {
        type: FeedActionNames.ACCEPT_RECOMMENDED_FOLLOWS,
        payload
    }
}

export const AcceptStartFollowResponse = (payload: Follow): AcceptStartFollowResponseActionType => {
    return {
        type: FeedActionNames.ACCEPT_START_FOLLOW,
        payload
    }
}

export type FeedActionTypes =
    AcceptGetHomeResponseActionType |
    AcceptPostTweetResponseActionType |
    AcceptLikeTweetResponseActionType |
    AcceptBookmarkTweetResponseActionType |
    AcceptRetweetTweetResponseActionType |
    AcceptReplyTweetResponseActionType |
    AcceptStartFollowResponseActionType |
    AcceptGetRecommendedFollowsActionType;
