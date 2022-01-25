import Pusher from "pusher-js";
import {appConfig} from "../constants/appConfig";

export const usePusher = () => {
    const { key, cluster } = appConfig.pusher
    return new Pusher(key, { cluster })
}
