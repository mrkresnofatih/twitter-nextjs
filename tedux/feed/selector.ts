import {AllState} from "../rootReducer";
import {SuperTweet, Tweet} from "../../models/Tweet";
import {Player} from "../../models/Player";

export const feedSelector = (state: AllState) => state.feed;

export const feedIdsSelector = (state: AllState) => Object.keys(state.feed.feedIds).map((id) => Number(id)).sort((a, b) => (b - a));

export const specificFeedTweetSelector = (id: number) => (state: AllState): Tweet => state.feed.tweets[id]

export const specificSuperTweetSelector = (id: number) => (state: AllState): SuperTweet => state.feed.superTweets[id]

export const specificFeedPlayerSelector = (id: number) => (state: AllState): Player => state.feed.players[id]

export const myReplyExistsSelector = (tweetId: number) => (state: AllState): boolean => (state.feed.myReplyIds[tweetId] !== undefined)

export const myRetweetExistsSelector = (tweetId: number) => (state: AllState): boolean => (state.feed.myRetweetIds[tweetId] !== undefined)

export const likeExistsSelector = (tweetId: number) => (state: AllState): boolean => (state.feed.likes[tweetId] !== undefined)

export const bookmarkExistsSelector = (tweetId: number) => (state: AllState): boolean => (state.feed.bookmarks[tweetId] !== undefined)

export const tweetPlayerUserNameSelector = (tweetId: number) => (state: AllState): string => {
    const targetTweet = state.feed.tweets[tweetId]
    return state.feed.players[targetTweet.playerId].userName
}

export const recommendedPlayersToFollowSelector = () => (state: AllState): Player[] => {
    const selfPlayerId = state.auth.playerId
    const allPlayers = state.feed.players
    const allFollows = state.feed.follows
    const recommendedFollowIds = Object.keys(allPlayers).filter((playerId) => (allFollows[playerId] === undefined && Number(playerId) !== selfPlayerId));
    return recommendedFollowIds.map((playerId) => allPlayers[playerId])
}

export const superTweetPageFeedIdsSelector = (state: AllState): number[] => {
    return Object.keys(state.feed.tweets).filter((tweetId) => {
        const tweet = specificFeedTweetSelector(Number(tweetId))(state)
        return (tweet.replyOf !== 0);
    }).map((tweetId) => Number(tweetId))
}
