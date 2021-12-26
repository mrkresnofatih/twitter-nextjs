// @flow
import * as React from 'react';
import {BaseHeader} from "./BaseHeader";

type Props = {

};
export const HomeHeader = (props: Props) => {
    return (
        <BaseHeader
            title={
                <h2>Home</h2>
            }
            options={
                <p>{"🟨"}</p>
            }
        />
    );
};