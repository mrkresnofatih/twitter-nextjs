// @flow
import * as React from 'react';
import styles from '../../styles/list/followlist.module.css';
import {FollowCard} from "../card/FollowCard";
import {useSelector} from "react-redux";
import {recommendedPlayersToFollowSelector} from "../../tedux/feed/selector";
import {requestStartFollow} from "../../apis/followApi";

type Props = {};
export const FollowList = (props: Props) => {
    const players = useSelector(recommendedPlayersToFollowSelector())
    const requestStartFollowing = (playerId: number) => () => requestStartFollow(playerId)
    return (
        <div className={styles.followListOuter}>
            <div className={styles.followListInner}>
                <div className={styles.followListHead}>Who To Follow</div>
                {players.map((player) => {
                    const {id, userName, fullName, imageUrl} = player;
                    return (
                        <FollowCard
                            key={id}
                            src={imageUrl}
                            userName={userName}
                            fullName={fullName}
                            onFollowClick={requestStartFollowing(id)}
                        />
                    )
                })}
                <div className={styles.followListTail}>Show more</div>
            </div>
        </div>
    );
};
