export enum ReqActionNames {
    RECORD_LOGIN_SIGNUP = "REQ/RECORD_LOGIN_SIGNUP"
}

interface RecordLoginSignupActionType {
    type: ReqActionNames.RECORD_LOGIN_SIGNUP
}

export const RecordLoginSignup = (): RecordLoginSignupActionType => {
    return {
        type:   ReqActionNames.RECORD_LOGIN_SIGNUP
    }
}

export type ReqActionTypes = RecordLoginSignupActionType;