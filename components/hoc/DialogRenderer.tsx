// @flow
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sysSelector} from "../../tedux/sys/selectors";
import {DialogModes} from "../../constants/dialogModes";
import {TweetDraftCard} from "../card/TweetDraftCard";
import {SetDialogMode} from "../../tedux/sys/actions";

type Props = {
    
};
export const DialogRenderer = (props: Props) => {
    const {dialogMode} = useSelector(sysSelector);
    const dispatch = useDispatch();
    const closeDialog = () => {
        dispatch(SetDialogMode(DialogModes.NONE))
    }

    switch (dialogMode) {
        case DialogModes.TWEET_DRAFT: {
            return <TweetDraftCard onClose={closeDialog}/>
        }
        case DialogModes.NONE:
        default:
            return <></>;
    }
};