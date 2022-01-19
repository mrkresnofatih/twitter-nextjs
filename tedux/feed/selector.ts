import {AllState} from "../rootReducer";
import {Tweet} from "../../models/Tweet";
import {Player} from "../../models/Player";

export const feedSelector = (state: AllState) => state.feed;

export const feedIdsSelector = (state: AllState) => Object.keys(state.feed.feedIds).map((id) => Number(id)).sort((a, b) => (b - a));

export const specificFeedTweetSelector = (id: number) => (state: AllState): Tweet => state.feed.tweets[id]

export const specificFeedPlayerSelector = (id: number) => (state: AllState): Player => state.feed.players[id]

export const myReplyExistsSelector = (tweetId: number) => (state: AllState): boolean => (state.feed.myReplyIds[tweetId] !== undefined)

export const myRetweetExistsSelector = (tweetId: number) => (state: AllState): boolean => (state.feed.myRetweetIds[tweetId] !== undefined)

export const likeExistsSelector = (tweetId: number) => (state: AllState): boolean => (state.feed.likes[tweetId] !== undefined)

export const bookmarkExistsSelector = (tweetId: number) => (state: AllState): boolean => (state.feed.bookmarks[tweetId] !== undefined)

export const tweetPlayerUserNameSelector = (tweetId: number) => (state: AllState): string => {
    const targetTweet = state.feed.tweets[tweetId]
    return state.feed.players[targetTweet.playerId].userName
}