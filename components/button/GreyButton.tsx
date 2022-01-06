// @flow 
import * as React from 'react';
import {Button} from "@mui/material";
import {ReactNode} from "react";

type Props = {
    onClick: ()=>void,
    label: string | ReactNode,
    style?: React.CSSProperties,
    className?: string
};
export const GreyButton = (props: Props) => {
    return (
        <Button
            className={props.className}
            style={{backgroundColor: "rgb(28, 28, 28)", ...props.style}}
            variant="contained"
            onClick={props.onClick}
            disableElevation={true}
        >{props.label}</Button>
    );
};