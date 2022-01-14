import {createStore, applyMiddleware, Store} from "redux";
import reducers from "./rootReducer";
import thunk from "redux-thunk";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {Persistor} from "redux-persist/es/types";
import {SysActionTypes} from "./sys/actions";
import {AuthActionTypes} from "./auth/actions";

const persistConfig = {
    key:"twitterclone",
    storage: storage,
    whitelist: ["auth"]
}

const rootPersisted = persistReducer(persistConfig, reducers);

export const store: Store = createStore(
    rootPersisted,
    {},
    applyMiddleware(thunk)
)

export const persistor: Persistor = persistStore(store);

export type reduxAction = SysActionTypes | AuthActionTypes;