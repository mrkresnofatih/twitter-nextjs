// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";

type Props = {
    children: ReactNode
};
export const StoreWrapper = (props: Props) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {props.children}
            </PersistGate>
        </Provider>
    );
};