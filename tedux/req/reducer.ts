import {ReqActionNames, ReqActionTypes} from "./action";

interface reqStateType {
    loginSignupLastReq: number
}

const reqInitialState: reqStateType = {
    loginSignupLastReq: 0
}

const reqReducer = (state = reqInitialState, action: ReqActionTypes) => {
    switch (action.type) {
        case ReqActionNames.RECORD_LOGIN_SIGNUP: {
            const newState: reqStateType = {
                ...state,
                loginSignupLastReq: Date.now()
            }
            console.log(action.type, newState);
            return newState;
        }
        default:
            return state;
    }
}

export default reqReducer;