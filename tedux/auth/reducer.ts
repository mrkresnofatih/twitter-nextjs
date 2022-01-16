import {AuthActionNames, AuthActionTypes} from "./actions";

interface authStateType {
    playerId: number,
    token: string
}

const authInitialState: authStateType = {
    playerId: 0,
    token: ""
}

const authReducer = (state = authInitialState, action: AuthActionTypes) => {
    switch (action.type) {
        case AuthActionNames.SET_PLAYER_ID_ACTION: {
            const newState: authStateType = {
                ...state,
                playerId: action.payload
            }
            console.log(action.type, newState);
            return newState;
        }
        case AuthActionNames.SET_TOKEN_ACTION: {
            const newState: authStateType = {
                ...state,
                token: action.payload
            }
            console.log(action.type, newState);
            return newState;
        }
        default:
            return state;
    }
}

export default authReducer;