import {ResponsePayload} from "../../types/responsePayload";

export enum FeedActionNames {
    ACCEPT_GET_HOME = "FEED/ACCEPT_GET_HOME"
}

interface AcceptGetHomeResponseActionType {
    type: FeedActionNames.ACCEPT_GET_HOME,
    payload: ResponsePayload
}

export const AcceptGetHomeResponse = (payload: ResponsePayload): AcceptGetHomeResponseActionType => {
    return {
        type: FeedActionNames.ACCEPT_GET_HOME,
        payload
    }
}

export type FeedActionTypes = AcceptGetHomeResponseActionType;