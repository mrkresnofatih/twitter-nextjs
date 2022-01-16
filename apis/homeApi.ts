import {API_ROUTES} from "./routes";
import {batchDispatch} from "../tedux/batchDispatch";
import {DropLoading, QueueLoading} from "../tedux/sys/actions";
import {getRequestIgniter} from "./requestIgniter";
import {store} from "../tedux/store";

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
                () => [DropLoading()]
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

export const requestGetHome = (time: number) => {
    const payload: getHomePayload = {
        route: API_ROUTES.GET_HOME,
        endPoint: `${API_ROUTES.GET_HOME}/${time}`,
        config: { headers: { TK: store.getState().auth.token } }
    }
    return homeAPIHandler(payload);
}