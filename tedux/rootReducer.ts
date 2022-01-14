import {combineReducers} from "redux";
import authReducer from "./auth/reducer";
import sysReducer from "./sys/reducer";

const reducers = combineReducers({
    auth: authReducer,
    sys: sysReducer
});

export default reducers

export type AllState = ReturnType<typeof reducers>