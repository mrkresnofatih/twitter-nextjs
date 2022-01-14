// @flow
import * as React from 'react';
import styles from '../../styles/button/tweethoverbutton.module.css';
import {Icon} from "../icon/Icon";
import {IconFileNames} from "../../utils/iconUtils";
import {useDispatch} from "react-redux";
import {SetDialogMode} from "../../tedux/sys/actions";
import {DialogModes} from "../../constants/dialogModes";

type Props = {

};
export const TweetHoverButton = (props: Props) => {
    const dispatch = useDispatch();
    const openTweetDraftDialog = () => {
        dispatch(SetDialogMode(DialogModes.TWEET_DRAFT))
    }
    return (
        <div className={styles.tweetHoverButton} onClick={openTweetDraftDialog}>
            <Icon
                className={styles.tweetHoverIcon}
                iconFileName={IconFileNames.SEND_OUTLINE_WHITE}
            />
        </div>
    );
};