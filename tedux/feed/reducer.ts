import {Dictionary} from "../../types/dictionary";
import {Tweet} from "../../models/Tweet";
import {Player} from "../../models/Player";
import {Follow} from "../../models/Follow";
import {Reaction} from "../../models/Reaction";
import {FeedActionNames, FeedActionTypes} from "./actions";
import {ReactionTypes} from "../../constants/reactionTypes";

interface feedStateType {
    feedIds: Dictionary<boolean>,

    oldestTweetDate: number,
    tweets: Dictionary<Tweet>,
    myRetweetIds: Dictionary<boolean>

    players: Dictionary<Player>,

    follows: Dictionary<Follow>,

    likes: Dictionary<Reaction>,
    bookmarks: Dictionary<Reaction>
}

const feedInitialState: feedStateType = {
    feedIds: { },
    oldestTweetDate: 0,
    tweets: { },
    myRetweetIds: { },
    follows: { },
    players: { },
    likes: { },
    bookmarks: { }
}

const feedReducer = (state = feedInitialState, action: FeedActionTypes ) => {
    switch (action.type) {
        case FeedActionNames.ACCEPT_GET_HOME: {
            const newData = action.payload;
            const myPlayerId = action.playerId
            let newOldestTweetDate = 0;
            Object.keys(newData.feedIds).forEach((feedId, index) => {
                const feedTweetCreatedAt = newData.tweets[Number(feedId)].createdAt
                if (index === 0) {
                    newOldestTweetDate = feedTweetCreatedAt
                } else {
                    if (feedTweetCreatedAt < newOldestTweetDate) {
                        newOldestTweetDate = feedTweetCreatedAt
                    }
                }
            })
            const newState: feedStateType = {
                ...state,
                feedIds: { ...state.feedIds, ...newData.feedIds },
                tweets: { ...state.tweets, ...newData.tweets },
                myRetweetIds: Object.values(newData.tweets)
                    .filter((tweet) => (tweet.playerId === myPlayerId && tweet.retweetOf !== 0))
                    .reduce((a, b) => ({ ...a, [b.retweetOf]: true }), {}),
                follows: { ...state.follows, ...newData.follows },
                players: { ...state.players, ...newData.players },
                likes: Object.values(newData.reactions)
                    .filter((reaction) => (reaction.reactionType === ReactionTypes.LIKE))
                    .reduce((a, b) => ({ ...a, [b.tweetId]: b }), {}),
                bookmarks: Object.values(newData.reactions)
                    .filter((reaction) => (reaction.reactionType === ReactionTypes.BOOKMARK))
                    .reduce((a, b) => ({ ...a, [b.tweetId]: b }), {}),
                oldestTweetDate: newOldestTweetDate
            }
            console.log(action.type, newState);
            return newState;
        }
        case FeedActionNames.ACCEPT_POST_TWEET: {
            const newTweet = action.payload;
            const newState: feedStateType = {
                ...state,
                tweets: { ...state.tweets, [newTweet.id]: newTweet },
                feedIds: { ...state.feedIds, [newTweet.id]: true }
            }
            console.log(action.type, newState);
            return newState;
        }
        case FeedActionNames.ACCEPT_LIKE_TWEET: {
            const newReaction = action.payload;
            const newState: feedStateType = {
                ...state,
                likes: { ...state.likes, [newReaction.tweetId]: newReaction }
            }
            console.log(action.type, newState)
            return newState;
        }
        case FeedActionNames.ACCEPT_BOOKMARK_TWEET: {
            const newReaction = action.payload;
            const newState: feedStateType = {
                ...state,
                bookmarks: { ...state.bookmarks, [newReaction.tweetId]: newReaction }
            }
            console.log(action.type, newState)
            return newState;
        }
        case FeedActionNames.ACCEPT_RETWEET_TWEET: {
            const tweets = action.payload
            const retweet = Object.values(tweets).filter((tweet) => (tweet.retweetOf !== 0))[0]
            const newState: feedStateType = {
                ...state,
                feedIds: { ...state.feedIds, [retweet.id]: true },
                tweets: { ...state.tweets, ...tweets },
                myRetweetIds: { ...state.myRetweetIds, [retweet.retweetOf]: true }
            }
            console.log(action.type, newState)
            return newState;
        }
        default:
            return state;
    }
}

export default feedReducer;