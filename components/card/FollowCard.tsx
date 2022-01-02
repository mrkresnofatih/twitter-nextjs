// @flow
import * as React from 'react';
import styles from '../../styles/card/followcard.module.css';

type Props = {

};
export const FollowCard = (props: Props) => {
    return (
        <div className={styles.followCardOuter}>
            <div className={styles.followCardInner}>
                <img
                    className={styles.followCardAvatar}
                    src={"https://i.pinimg.com/236x/25/15/5d/25155d81c8fe86c204b0243e2407e3a3.jpg"}
                    alt={"followCardAvatar"}
                />
                <div className={styles.followCardContent}>
                    <h5 className={styles.followCardUserName}>dragonSlayer</h5>
                    <h6 className={styles.followCardFullName}>kresno fatih imani</h6>
                </div>
                <div className={`${styles.followButton} ${styles.followButtonHoverHide}`}>+</div>
                <div className={`${styles.followButton} ${styles.followButtonHoverShow}`}>Follow</div>
            </div>
        </div>
    );
};