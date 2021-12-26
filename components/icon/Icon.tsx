// @flow
import * as React from 'react';
import {IconFileNames} from "../../utils/iconUtils";

type Props = {
    iconFileName: IconFileNames,
    className?: string,
    style?: React.CSSProperties
};

export const Icon = (props: Props) => {

    const actualSrc = `/icons/${props.iconFileName}`;
    return (
        <img
            className={props.className}
            style={props.style}
            src={actualSrc}
            alt={"Twitter-NextJs-Icon"}
        />
    );
};