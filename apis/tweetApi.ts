import {API_ROUTES} from "./routes";
import {batchDispatch} from "../tedux/batchDispatch";
import {DropLoading, QueueLoading, SetDialogMode} from "../tedux/sys/actions";
import {postRequestIgniter} from "./requestIgniter";
import {store} from "../tedux/store";
import {AcceptPostTweetResponse} from "../tedux/feed/actions";
import {DialogModes} from "../constants/dialogModes";

interface postTweetPayload {
    route: API_ROUTES.POST_TWEET,
    data: { message: string, imageUrl: string, tags: string[] },
    config: { headers: { TK: string } }
}

type tweetAPIPayloadTypes = postTweetPayload

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