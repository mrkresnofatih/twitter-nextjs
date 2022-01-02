// @flow
import * as React from 'react';
import {BaseHeader} from "./BaseHeader";
import {Icon} from "../icon/Icon";
import {IconFileNames} from "../../utils/iconUtils";

type Props = {};
export const ExploreHeader = (props: Props) => {
    return (
        <BaseHeader
            title={<h2>Explore</h2>}
            options={
                <Icon
                    style={{height: 25, width: 25}}
                    iconFileName={IconFileNames.HELP_OUTLINE_WHITE}
                />
            }
        />
    );
};