// @flow
import * as React from 'react';
import {useEffect} from "react";
import {requestGetRecommendedFollows} from "../../apis/homeApi";
import {FollowList} from "../list/FollowList";

type Props = {};
export const RecommendedFollowsLoader = (props: Props) => {
    useEffect(() => {
        requestGetRecommendedFollows()
    }, [])

    return (
        <FollowList/>
    );
};
