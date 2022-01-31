// @flow
import * as React from 'react';
import styles from '../../styles/card/followcard.module.css';

type Props = {
    src: string,
    userName: string,
    fullName: string,
    onFollowClick: () => void
};
export const FollowCard = (props: Props) => {
    return (
        <div className={styles.followCardOuter}>
            <div className={styles.followCardInner}>
                <img
                    className={styles.followCardAvatar}
                    src={props.src}
                    alt={"followCardAvatar"}
                />
                <div className={styles.followCardContent}>
                    <h5 className={styles.followCardUserName}>{props.userName}</h5>
                    <h6 className={styles.followCardFullName}>{props.fullName}</h6>
                </div>
                <div className={`${styles.followButton} ${styles.followButtonHoverHide}`}>+</div>
                <div
                    className={`${styles.followButton} ${styles.followButtonHoverShow}`}
                    onClick={props.onFollowClick}
                >Follow</div>
            </div>
        </div>
    );
};
