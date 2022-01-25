import {API_ROUTES} from "./routes";
import {batchDispatch} from "../tedux/batchDispatch";
import {DropLoading, QueueLoading, SetDialogMode} from "../tedux/sys/actions";
import {getRequestIgniter, postRequestIgniter} from "./requestIgniter";
import {store} from "../tedux/store";
import {
    AcceptBookmarkTweetResponse,
    AcceptLikeTweetResponse,
    AcceptPostTweetResponse,
    AcceptReplyTweetResponse,
    AcceptRetweetTweetResponse
} from "../tedux/feed/actions";
import {DialogModes} from "../constants/dialogModes";

interface postTweetPayload {
    route: API_ROUTES.POST_TWEET,
    data: { message: string, imageUrl: string, tags: string[] },
    config: { headers: { TK: string } }
}

interface likeTweetPayload {
    route: API_ROUTES.LIKE_TWEET,
    endPoint: string,
    config: { headers: { TK: string } }
}

interface bookmarkTweetPayload {
    route: API_ROUTES.BOOKMARK_TWEET,
    endPoint: string,
    config: { headers: { TK: string } }
}

interface retweetTweetPayload {
    route: API_ROUTES.RETWEET_TWEET,
    endPoint: string,
    config: { headers: { TK: string } }
}

interface replyTweetPayload {
    route: API_ROUTES.REPLY_TWEET,
    endPoint: string,
    data: { message: string, imageUrl: string, tags: string[] },
    config: { headers: { TK: string } }
}

type tweetAPIPayloadTypes =
    postTweetPayload |
    likeTweetPayload |
    bookmarkTweetPayload |
    retweetTweetPayload |
    replyTweetPayload;

const tweetAPIHandler = (payload: tweetAPIPayloadTypes) => {
    batchDispatch([
        QueueLoading()
    ]);
    switch (payload.route) {
        case API_ROUTES.POST_TWEET: {
            postRequestIgniter(
                payload.route,
                payload.data,
                payload.config,
                () => [DropLoading()],
                (result) => [
                    AcceptPostTweetResponse(result),
                    SetDialogMode(DialogModes.NONE),
                    DropLoading()
                ]
            )
            break;
        }
        case API_ROUTES.LIKE_TWEET: {
            getRequestIgniter(
                payload.endPoint,
                payload.config,
                () => [DropLoading()],
                (result) => [
                    AcceptLikeTweetResponse(result),
                    DropLoading()
                ]
            )
            break;
        }
        case API_ROUTES.BOOKMARK_TWEET: {
            getRequestIgniter(
                payload.endPoint,
                payload.config,
                () => [DropLoading()],
                (result) => [
                    AcceptBookmarkTweetResponse(result),
                    DropLoading()
                ]
            )
            break;
        }
        case API_ROUTES.RETWEET_TWEET: {
            getRequestIgniter(
                payload.endPoint,
                payload.config,
                () => [DropLoading()],
                (result) => [
                    AcceptRetweetTweetResponse(result),
                    DropLoading()
                ]
            )
            break;
        }
        case API_ROUTES.REPLY_TWEET: {
            postRequestIgniter(
                payload.endPoint,
                payload.data,
                payload.config,
                () => [DropLoading()],
                (result) => [
                    AcceptReplyTweetResponse(result),
                    SetDialogMode(DialogModes.NONE),
                    DropLoading()
                ]
            )
            break;
        }
        default:
            break;
    }
}

export const requestPostTweet = (
    message: string,
    imageUrl: string,
    tags: string[]
) => {
    const payload: postTweetPayload = {
        route: API_ROUTES.POST_TWEET,
        config: { headers: { TK: store.getState().auth.token } },
        data: { message, imageUrl, tags }
    }
    return tweetAPIHandler(payload);
}

export const requestReplyTweet = (
    message: string,
    imageUrl: string,
    tags: string[],
    targetTweetId: number
) => {
    const payload: replyTweetPayload = {
        route: API_ROUTES.REPLY_TWEET,
        endPoint: `${API_ROUTES.REPLY_TWEET}/${targetTweetId}`,
        config: { headers: { TK: store.getState().auth.token } },
        data: { message, imageUrl, tags }
    }
    return tweetAPIHandler(payload)
}

export const requestLikeTweet = (
    tweetId: number
) => {
    const payload: likeTweetPayload = {
        route: API_ROUTES.LIKE_TWEET,
        config: { headers: { TK: store.getState().auth.token } },
        endPoint: `${API_ROUTES.LIKE_TWEET}/${tweetId}`
    }
    return tweetAPIHandler(payload);
}

export const requestBookmarkTweet = (
    tweetId: number
) => {
    const payload: bookmarkTweetPayload = {
        route: API_ROUTES.BOOKMARK_TWEET,
        config: { headers: { TK: store.getState().auth.token } },
        endPoint: `${API_ROUTES.BOOKMARK_TWEET}/${tweetId}`
    }
    return tweetAPIHandler(payload)
}

export const requestRetweetTweet = (
    tweetId: number
) => {
    const payload: retweetTweetPayload = {
        route: API_ROUTES.RETWEET_TWEET,
        config: { headers: { TK: store.getState().auth.token } },
        endPoint: `${API_ROUTES.RETWEET_TWEET}/${tweetId}`
    }
    return tweetAPIHandler(payload)
}