export enum AuthActionNames {
    SET_PLAYER_ID_ACTION = "AUTH/SET_PLAYER_ID",
    SET_TOKEN_ACTION = "AUTH/SET_TOKEN_ACTION"
}

interface SetPlayerIdActionType {
    type: AuthActionNames.SET_PLAYER_ID_ACTION,
    payload: number
}

export const SetPlayerId = (playerId: number): SetPlayerIdActionType => {
    return {
        type: AuthActionNames.SET_PLAYER_ID_ACTION,
        payload: playerId
    }
}

interface SetTokenActionType {
    type: AuthActionNames.SET_TOKEN_ACTION,
    payload: string
}

export const SetToken = (token: string): SetTokenActionType => {
    return {
        type: AuthActionNames.SET_TOKEN_ACTION,
        payload: token
    }
}

export type AuthActionTypes = SetPlayerIdActionType | SetTokenActionType;