import {AllState} from "../rootReducer";
import {Tweet} from "../../models/Tweet";
import {Player} from "../../models/Player";

export const feedSelector = (state: AllState) => state.feed;

export const feedIdsSelector = (state: AllState) => Object.keys(state.feed.feedIds).map((id) => Number(id)).sort((a, b) => (b-a));

export const specificFeedTweetSelector = (id: number) => (state: AllState): Tweet => state.feed.tweets[id]

export const specificFeedPlayerSelector = (id: number) => (state: AllState): Player => state.feed.players[id]