import {Dictionary} from "../../types/dictionary";
import {Tweet} from "../../models/Tweet";
import {Player} from "../../models/Player";
import {Follow} from "../../models/Follow";
import {Reaction} from "../../models/Reaction";
import {FeedActionNames, FeedActionTypes} from "./actions";

interface feedStateType {
    feedIds: Dictionary<boolean>,
    tweets: Dictionary<Tweet>,
    players: Dictionary<Player>,
    follows: Dictionary<Follow>,
    reactions: Dictionary<Reaction>
}

const feedInitialState: feedStateType = {
    feedIds: { },
    tweets: { },
    follows: { },
    players: { },
    reactions: { }
}

const feedReducer = (state = feedInitialState, action: FeedActionTypes ) => {
    switch (action.type) {
        case FeedActionNames.ACCEPT_GET_HOME: {
            const newData = action.payload;
            const newState: feedStateType = {
                ...state,
                feedIds: { ...state.feedIds, ...newData.feedIds },
                tweets: { ...state.tweets, ...newData.tweets },
                follows: { ...state.follows, ...newData.follows },
                players: { ...state.players, ...newData.players },
                reactions: { ...state.reactions, ...newData.reactions }
            }
            console.log(action.type, newState);
            return newState;
        }
        default:
            return state;
    }
}

export default feedReducer;