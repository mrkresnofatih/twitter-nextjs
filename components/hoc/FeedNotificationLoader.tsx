// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {FeedUpdateNotification} from "../layout/FeedUpdateNotification";
import {usePusher} from "../../utils/pusherUtils";
import {useSelector} from "react-redux";
import {authSelector} from "../../tedux/auth/selectors";
import {PusherChannelPrefixes, PusherEventNames} from "../../constants/pusher";

type Props = {
    onClick?: () => void
};
export const FeedNotificationLoader = (props: Props) => {
    const [updateCounter, setUpdateCounter] = useState<number>(0)
    const incrementUpdateCounter = () => setUpdateCounter(i => i + 1)
    const {playerId} = useSelector(authSelector)
    const resetUpdateCounter = () => setUpdateCounter(0)
    const compoundOnClick = () => {
        const {onClick} = props
        if (onClick) {
            onClick()
        }
        resetUpdateCounter()
    }

    useEffect(() => {
        const pusherInstance = usePusher()
        const channel = pusherInstance.subscribe(`${PusherChannelPrefixes.HOME_FEED_NTF}@${playerId}`)
        channel.bind(PusherEventNames.INC_HOME_FEED_NTF, incrementUpdateCounter)
    }, [])

    return (
        <>
            {updateCounter >= 5 && <FeedUpdateNotification
                numOfUpdates={updateCounter}
                onClick={compoundOnClick}/>
            }
        </>
    )
};
