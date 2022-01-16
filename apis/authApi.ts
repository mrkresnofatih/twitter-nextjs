import {SetPlayerId, SetToken} from "../tedux/auth/actions";
import {API_ROUTES} from "./routes";
import {postRequestIgniter} from "./requestIgniter";
import {batchDispatch} from "../tedux/batchDispatch";
import {DropLoading, QueueLoading} from "../tedux/sys/actions";
import {RecordLoginSignup} from "../tedux/req/action";

interface loginPayload {
    route: API_ROUTES.LOGIN,
    data: { userName: string, password: string }
}

interface signupPayload {
    route: API_ROUTES.SIGNUP,
    data: { userName: string, fullName: string, password: string, email: string }
}

type authAPIPayloadTypes = loginPayload | signupPayload

const authAPIHandler = (payload: authAPIPayloadTypes) => {
    batchDispatch([
        QueueLoading()
    ]);
    switch (payload.route) {
        case API_ROUTES.LOGIN: {
            postRequestIgniter(
                payload.route,
                payload.data,
                undefined,
                () => [
                    DropLoading()
                ],
                (result) => [
                    SetToken(result["token"]),
                    SetPlayerId(result["playerId"]),
                    DropLoading()
                ]
            )
            break;
        }
        case API_ROUTES.SIGNUP: {
            postRequestIgniter(
                payload.route,
                payload.data,
                undefined,
                () => [
                    DropLoading()
                ],
                () => [
                    RecordLoginSignup(),
                    DropLoading()
                ]
            )
            break;
        }
        default:
            break;
    }
}

export const requestLogin = (
    userName: string,
    password: string
) => {
    const payload: loginPayload = {
        route: API_ROUTES.LOGIN,
        data: {userName, password}
    }
    return authAPIHandler(payload);
}

export const requestSignup = (
    userName: string,
    password: string,
    fullName: string,
    email: string
) => {
    const payload: signupPayload = {
        route: API_ROUTES.SIGNUP,
        data: { userName, fullName, password, email }
    }
    return authAPIHandler(payload);
}