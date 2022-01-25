// @flow
import * as React from 'react';
import styles from '../../styles/layout/loadoldertweetsbutton.module.css'

type Props = {
    onClick?: () => void
};
export const LoadOlderTweetsButton = (props: Props) => {
    return (
        <div onClick={props.onClick} className={styles.olderTweetsContainer}>
            Older Tweets 🔽
        </div>
    );
};