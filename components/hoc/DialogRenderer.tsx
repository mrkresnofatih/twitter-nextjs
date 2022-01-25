// @flow
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sysSelector} from "../../tedux/sys/selectors";
import {DialogModes} from "../../constants/dialogModes";
import {SetDialogMode} from "../../tedux/sys/actions";
import {PostTweetCard} from "../card/PostTweetCard";
import {ReplyTweetCard} from "../card/ReplyTweetCard";

type Props = {};
export const DialogRenderer = (props: Props) => {
    const {dialogMode, replyDialogId} = useSelector(sysSelector);
    const dispatch = useDispatch();
    const closeDialog = () => {
        dispatch(SetDialogMode(DialogModes.NONE))
    }

    switch (dialogMode) {
        case DialogModes.TWEET_POST: {
            return <PostTweetCard onClose={closeDialog}/>
        }
        case DialogModes.TWEET_REPLY: {
            return <ReplyTweetCard onClose={closeDialog} replyDialogId={replyDialogId}/>
        }
        case DialogModes.NONE:
        default:
            return <></>;
    }
};