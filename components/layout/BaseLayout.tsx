// @flow
import * as React from 'react';
import styles from '../../styles/layout/layout.module.css';
import {ReactNode} from "react";

type Props = {
    left: ReactNode,
    middle: ReactNode,
    right: ReactNode
};
export const BaseLayout = (props: Props) => {
    return (
        <div className={styles.baseLayout}>
            <div className={styles.sideLayout}>{props.left}</div>
            <div className={styles.middleLayout}>{props.middle}</div>
            <div className={styles.sideLayout}>{props.right}</div>
        </div>
    );
};