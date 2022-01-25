// @flow
import * as React from 'react';
import {TweetDraftCard} from "./TweetDraftCard";
import {requestPostTweet} from "../../apis/tweetApi";

type Props = {
    onClose: () => void
};
export const PostTweetCard = (props: Props) => {
    const postTweet = (message: string, imageUrl: string, tags: string[]) => {
        requestPostTweet(message, imageUrl, tags)
    }
    return (
        <TweetDraftCard
            onClose={props.onClose}
            title={"Draft"}
            onPost={postTweet}
            postButtonText={"POST"}
        />
    );
};