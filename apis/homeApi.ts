import {API_ROUTES} from "./routes";
import {batchDispatch} from "../tedux/batchDispatch";
import {DropLoading, QueueLoading} from "../tedux/sys/actions";
import {getRequestIgniter} from "./requestIgniter";
import {store} from "../tedux/store";
import {AcceptGetHomeResponse} from "../tedux/feed/actions";

interface getHomePayload {
    route: API_ROUTES.GET_HOME,
    endPoint: string,
    config: { headers: { TK: string } }
}

type homeAPIPayloadTypes = getHomePayload

const homeAPIHandler = (payload: homeAPIPayloadTypes) => {
    batchDispatch([
        QueueLoading()
    ]);
    switch (payload.route) {
        case API_ROUTES.GET_HOME: {
            getRequestIgniter(
                payload.endPoint,
                payload.config,
                () => [DropLoading()],
                (result) => [
                    AcceptGetHomeResponse(result),
                    DropLoading()
                ]
            )
            break;
        }
        default:
            break;
    }
}

export const requestGetHomeLatest = () => {
    const payload: getHomePayload = {
        route: API_ROUTES.GET_HOME,
        endPoint: `${API_ROUTES.GET_HOME}/${Date.now()}`,
        config: { headers: { TK: store.getState().auth.token } }
    }
    return homeAPIHandler(payload);
}

export const requestGetHomeOlder = () => {
    const payload: getHomePayload = {
        route: API_ROUTES.GET_HOME,
        endPoint: `${API_ROUTES.GET_HOME}/${store.getState().feed.oldestTweetDate}`,
        config: { headers: { TK: store.getState().auth.token } }
    }
    return homeAPIHandler(payload);
}