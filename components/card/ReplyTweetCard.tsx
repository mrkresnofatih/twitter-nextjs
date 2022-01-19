// @flow
import * as React from 'react';
import {requestReplyTweet} from "../../apis/tweetApi";
import {TweetDraftCard} from "./TweetDraftCard";
import {useSelector} from "react-redux";
import {tweetPlayerUserNameSelector} from "../../tedux/feed/selector";

type Props = {
    onClose: () => void,
    replyDialogId: number
};
export const ReplyTweetCard = (props: Props) => {
    const postReply = (message: string, imageUrl: string, tags: string[]) => {
        requestReplyTweet(message, imageUrl, tags, props.replyDialogId)
    }

    const replyToUserName = useSelector(tweetPlayerUserNameSelector(props.replyDialogId))

    return (
        <TweetDraftCard
            onClose={props.onClose}
            title={`Reply to @${replyToUserName}`}
            onPost={postReply}
            postButtonText={"REPLY"}
        />
    );
};