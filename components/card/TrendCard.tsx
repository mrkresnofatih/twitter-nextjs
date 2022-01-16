// @flow
import * as React from 'react';
import {getSampleTrend, Trend} from "../../models/Trend";
import styles from '../../styles/card/trendcard.module.css';
import {handleNumberAbbreviation} from "../../utils/textUtils";


type Props = {
    trendId: number
};
export const TrendCard = (props: Props) => {
    const trendData: Trend = getSampleTrend(props.trendId);
    const handledTweetCount: string = handleNumberAbbreviation(trendData.tweetCount);
    return (
        <div className={styles.trendCardContainer}>
            <h4 className={styles.trendCardRank}>{trendData.id}</h4>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h5 className={styles.trendName}>{`#${trendData.tagName}`}</h5>
                <p className={styles.trendCount}>{`${handledTweetCount} Tweets`}</p>
            </div>
        </div>
    );
};