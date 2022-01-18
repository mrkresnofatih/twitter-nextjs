import {ResponsePayload} from "../../types/responsePayload";
import {Tweet} from "../../models/Tweet";
import {Reaction} from "../../models/Reaction";

export enum FeedActionNames {
    ACCEPT_GET_HOME = "FEED/ACCEPT_GET_HOME",
    ACCEPT_POST_TWEET = "FEED/ACCEPT_POST_TWEET",
    ACCEPT_LIKE_TWEET = "FEED/ACCEPT_LIKE_TWEET",
    ACCEPT_BOOKMARK_TWEET = "FEED/ACCEPT_BOOKMARK_TWEET",
}

interface AcceptGetHomeResponseActionType {
    type: FeedActionNames.ACCEPT_GET_HOME,
    payload: ResponsePayload
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

export const AcceptGetHomeResponse = (payload: ResponsePayload): AcceptGetHomeResponseActionType => {
    return {
        type: FeedActionNames.ACCEPT_GET_HOME,
        payload
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

export type FeedActionTypes =
    AcceptGetHomeResponseActionType |
    AcceptPostTweetResponseActionType |
    AcceptLikeTweetResponseActionType |
    AcceptBookmarkTweetResponseActionType;