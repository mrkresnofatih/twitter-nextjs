import {AllState} from "../rootReducer";
import {DialogModes} from "../../constants/dialogModes";

export const sysSelector = (state: AllState) => state.sys;

export const loadingStateSelector = (state: AllState): boolean => {
    return (state.sys.loadingQueue > 0)
}

export const isDialogModeSelector = (state: AllState): boolean => {
    return (state.sys.dialogMode !== DialogModes.NONE)
}