// @flow
import * as React from 'react';
import {useState} from 'react';

type Props = {
    src: string,
    style?: React.CSSProperties,
    className?: string
};
export const Image = (props: Props) => {
    const [error, setError] = useState<boolean>(false)

    if (error) {
        return (
            <></>
        );
    }

    return (
        <img
            src={props.src}
            className={props.className}
            style={props.style}
            onError={() => setError(true)}
        />
    )
};