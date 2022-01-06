// @flow
import * as React from 'react';
import {styled, TextField} from "@mui/material";
import {ChangeEvent} from "react";

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== ""
})(() => ({
    // input label when focused
    "& label.Mui-focused": {
        color: "#AE00FB"
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
        borderBottomColor: "#AE00FB"
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
        borderBottomColor: "#AE00FB"
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "#AE00FB"
        }
    }
}));


type Props = {
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    type?: string
};
export const PurpleTextField = (props: Props) => {
    return (
        <CssTextField
            label={props.label}
            onChange={props.onChange}
            value={props.value}
            variant={'outlined'}
            type={props.type}
            focused={true}
        />
    )
};