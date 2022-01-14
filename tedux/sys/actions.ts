import {DialogModes} from "../../constants/dialogModes";

export enum SysActionNames {
    QUEUE_LOADING = "SYS/QUEUE_LOADING",
    SET_DIALOG_MODE = "SYS/SET_DIALOG_MODE",
    DROP_LOADING = "SYS/DROP_LOADING"
}

interface QueueLoadingActionType {
    type: SysActionNames.QUEUE_LOADING
}

export const QueueLoading = (): QueueLoadingActionType => {
    return {
        type:   SysActionNames.QUEUE_LOADING,

    }
}

interface SetDialogModeActionType {
    type: SysActionNames.SET_DIALOG_MODE,
    payload: DialogModes
}

export const SetDialogMode = (dialogMode: DialogModes): SetDialogModeActionType => {
    return {
        type    :   SysActionNames.SET_DIALOG_MODE,
        payload :   dialogMode
    }
}

interface DropLoadingActionType {
    type: SysActionNames.DROP_LOADING
}

export const DropLoading = (): DropLoadingActionType => {
    return {
        type: SysActionNames.DROP_LOADING
    }
}

export type SysActionTypes =
    QueueLoadingActionType |
    SetDialogModeActionType |
    DropLoadingActionType;