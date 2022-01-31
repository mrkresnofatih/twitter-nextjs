import {API_ROUTES} from "./routes";
import {batchDispatch} from "../tedux/batchDispatch";
import {DropLoading, QueueLoading} from "../tedux/sys/actions";
import {getRequestIgniter} from "./requestIgniter";
import {store} from "../tedux/store";
import {AcceptStartFollowResponse} from "../tedux/feed/actions";

interface startFollowingPayload {
    route: API_ROUTES.START_FOLLOW,
    endPoint: string,
    config: { headers: {  TK: string } }
}

type followAPIPayloadTypes = startFollowingPayload;

const followAPIHandler = (payload: followAPIPayloadTypes) => {
    batchDispatch([
        QueueLoading()
    ]);
    switch (payload.route) {
        case API_ROUTES.START_FOLLOW: {
            getRequestIgniter(
                payload.endPoint,
                payload.config,
                () => [DropLoading()],
                (result) => [
                    AcceptStartFollowResponse(result),
                    DropLoading()
                ]
            )
            break;
        }
        default:
            break;
    }
}

export const requestStartFollow = (playerId: number) => {
    const payload: startFollowingPayload = {
        route: API_ROUTES.START_FOLLOW,
        endPoint: `${API_ROUTES.START_FOLLOW}/${playerId}`,
        config: { headers: { TK: store.getState().auth.token }}
    }
    return followAPIHandler(payload)
}
