import {AllState} from "../rootReducer";

export const reqSelector = (state: AllState) => state.req;

export const loginPageReqSelector = (state: AllState): number => (state.req.loginSignupLastReq);