import {combineReducers} from "redux";
import authReducer from "./auth/reducer";
import sysReducer from "./sys/reducer";
import reqReducer from "./req/reducer";

const reducers = combineReducers({
    auth: authReducer,
    sys: sysReducer,
    req: reqReducer
});

export default reducers

export type AllState = ReturnType<typeof reducers>