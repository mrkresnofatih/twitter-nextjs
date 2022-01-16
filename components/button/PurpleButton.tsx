// @flow
import * as React from 'react';
import {ReactNode} from "react";
import {Button} from "@mui/material";

type Props = {
    onClick: ()=>void,
    label: string | ReactNode,
    style?: React.CSSProperties,
    className?: string
};
export const PurpleButton = (props: Props) => {
    return (
        <Button
            className={props.className}
            style={{backgroundColor: "#AE00FB", ...props.style}}
            variant="contained"
            onClick={props.onClick}
            disableElevation={true}
        >{props.label}</Button>
    );
};