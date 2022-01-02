// @flow 
import * as React from 'react';
import styles from '../../styles/list/followlist.module.css';
import {FollowCard} from "../card/FollowCard";

type Props = {
    
};
export const FollowList = (props: Props) => {
    return (
        <div className={styles.followListOuter}>
            <div className={styles.followListInner}>
                <div className={styles.followListHead}>Who To Follow</div>
                <FollowCard/>
                <FollowCard/>
                <FollowCard/>
                <FollowCard/>
                <div className={styles.followListTail}>Show more</div>
            </div>
        </div>
    );
};