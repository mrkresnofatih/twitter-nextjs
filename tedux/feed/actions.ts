import {ResponsePayload} from "../../types/responsePayload";
import {Tweet} from "../../models/Tweet";

export enum FeedActionNames {
    ACCEPT_GET_HOME = "FEED/ACCEPT_GET_HOME",
    ACCEPT_POST_TWEET = "FEED/ACCEPT_POST_TWEET"
}

interface AcceptGetHomeResponseActionType {
    type: FeedActionNames.ACCEPT_GET_HOME,
    payload: ResponsePayload
}

interface AcceptPostTweetResponseActionType {
    type: FeedActionNames.ACCEPT_POST_TWEET,
    payload: Tweet
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

export type FeedActionTypes = AcceptGetHomeResponseActionType | AcceptPostTweetResponseActionType;