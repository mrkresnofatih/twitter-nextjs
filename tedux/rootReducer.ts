import {combineReducers} from "redux";
import authReducer from "./auth/reducer";
import sysReducer from "./sys/reducer";
import reqReducer from "./req/reducer";
import feedReducer from "./feed/reducer";

const reducers = combineReducers({
    auth: authReducer,
    sys: sysReducer,
    req: reqReducer,
    feed: feedReducer
});

export default reducers

export type AllState = ReturnType<typeof reducers>