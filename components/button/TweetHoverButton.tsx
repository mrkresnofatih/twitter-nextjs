// @flow
import * as React from 'react';
import styles from '../../styles/button/tweethoverbutton.module.css';
import {Icon} from "../icon/Icon";
import {IconFileNames} from "../../utils/iconUtils";

type Props = {

};
export const TweetHoverButton = (props: Props) => {
    return (
        <div className={styles.tweetHoverButton}>
            <Icon
                className={styles.tweetHoverIcon}
                iconFileName={IconFileNames.SEND_OUTLINE_WHITE}
            />
        </div>
    );
};