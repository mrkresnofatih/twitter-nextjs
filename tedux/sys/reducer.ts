import {DialogModes} from "../../constants/dialogModes";
import {SysActionNames, SysActionTypes} from "./actions";

interface sysStateType {
    dialogMode: DialogModes,
    loadingQueue: number,
    replyDialogId: number
}

const sysInitialState: sysStateType = {
    dialogMode: DialogModes.NONE,
    loadingQueue: 0,
    replyDialogId: 0
}

const sysReducer = (state = sysInitialState, action: SysActionTypes) => {
    switch (action.type) {
        case SysActionNames.SET_DIALOG_MODE: {
            const newState: sysStateType = {
                ...state,
                dialogMode: action.payload
            }
            console.log(action.type, newState);
            return newState;
        }
        case SysActionNames.QUEUE_LOADING: {
            const newState: sysStateType = {
                ...state,
                loadingQueue: state.loadingQueue + 1
            }
            console.log(action.type, newState);
            return newState;
        }
        case SysActionNames.DROP_LOADING: {
            const newState: sysStateType = {
                ...state,
                loadingQueue: state.loadingQueue - 1
            }
            console.log(action.type, newState);
            return newState;
        }
        case SysActionNames.SET_REPLY_DIALOG_ID: {
            const newState: sysStateType = {
                ...state,
                replyDialogId: action.payload,
                dialogMode: DialogModes.TWEET_REPLY
            }
            console.log(action.type, newState);
            return newState;
        }
        default:
            return state;
    }
}

export default sysReducer;