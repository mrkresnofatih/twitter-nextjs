import {Dictionary} from "./dictionary";
import {SuperTweet, Tweet} from "../models/Tweet";
import {Player} from "../models/Player";
import {Follow} from "../models/Follow";
import {Reaction} from "../models/Reaction";

export interface ResponsePayload {
    feedIds: Dictionary<any>,
    tweets: Dictionary<Tweet>,
    players: Dictionary<Player>,
    follows: Dictionary<Follow>,
    reactions: Dictionary<Reaction>,
    superTweets: Dictionary<SuperTweet>
}
