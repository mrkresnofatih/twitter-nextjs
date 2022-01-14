import {AllState} from "../rootReducer";

export const sysSelector = (state: AllState) => state.sys;

export const loadingStateSelector = (state: AllState): boolean => {
    return (state.sys.loadingQueue > 0)
}