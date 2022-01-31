// @flow
import * as React from 'react';
import styles from '../../styles/list/followlist.module.css';
import {FollowCard} from "../card/FollowCard";
import {useSelector} from "react-redux";
import {recommendedPlayersToFollowSelector} from "../../tedux/feed/selector";

type Props = {};
export const FollowList = (props: Props) => {
    const players = useSelector(recommendedPlayersToFollowSelector())
    console.log(players)
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
                        />
                    )
                })}
                <div className={styles.followListTail}>Show more</div>
            </div>
        </div>
    );
};
