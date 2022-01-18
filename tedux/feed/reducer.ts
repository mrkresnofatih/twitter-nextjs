import {Dictionary} from "../../types/dictionary";
import {Tweet} from "../../models/Tweet";
import {Player} from "../../models/Player";
import {Follow} from "../../models/Follow";
import {Reaction} from "../../models/Reaction";
import {FeedActionNames, FeedActionTypes} from "./actions";

interface feedStateType {
    feedIds: Dictionary<boolean>,
    oldestTweetDate: number,
    tweets: Dictionary<Tweet>,
    players: Dictionary<Player>,
    follows: Dictionary<Follow>,
    reactions: Dictionary<Reaction>
}

const feedInitialState: feedStateType = {
    feedIds: { },
    oldestTweetDate: 0,
    tweets: { },
    follows: { },
    players: { },
    reactions: { }
}

const feedReducer = (state = feedInitialState, action: FeedActionTypes ) => {
    switch (action.type) {
        case FeedActionNames.ACCEPT_GET_HOME: {
            const newData = action.payload;
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
                follows: { ...state.follows, ...newData.follows },
                players: { ...state.players, ...newData.players },
                reactions: { ...state.reactions, ...newData.reactions },
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
        default:
            return state;
    }
}

export default feedReducer;