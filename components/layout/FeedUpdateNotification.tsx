// @flow
import * as React from 'react';
import styles from '../../styles/layout/feedupdatenotification.module.css';

type Props = {
    numOfUpdates: number
};
export const FeedUpdateNotification = (props: Props) => {
    return (
        <div className={styles.feedUpdateNotifContainer}>{`+${props.numOfUpdates} New Updates!`}</div>
    );
};