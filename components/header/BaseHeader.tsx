// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import styles from '../../styles/header/baseheader.module.css';

type Props = {
    title: ReactNode,
    options: ReactNode
};
export const BaseHeader = (props: Props) => {
    return (
        <div className={styles.baseHeaderOuterContainer}>
            <div className={styles.baseHeaderInnerContainer}>
                <div>{props.title}</div>
                <div>{props.options}</div>
            </div>
        </div>
    );
};