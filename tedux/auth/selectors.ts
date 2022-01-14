import {AllState} from "../rootReducer";

export const authSelector = (state: AllState) => state.auth;

export const isAuthedSelector = (state: AllState):boolean => (state.auth.token !== "");