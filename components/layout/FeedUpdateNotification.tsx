// @flow
import * as React from 'react';
import styles from '../../styles/layout/feedupdatenotification.module.css';

type Props = {
    numOfUpdates: number,
    onClick?: () => void
};
export const FeedUpdateNotification = (props: Props) => {
    return (
        <div onClick={props.onClick} className={styles.feedUpdateNotifContainer}>{`+${props.numOfUpdates} New Updates!`}</div>
    );
};