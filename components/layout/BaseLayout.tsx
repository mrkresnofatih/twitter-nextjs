// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import styles from '../../styles/layout/layout.module.css';
import {Icon} from "../icon/Icon";
import {IconFileNames} from "../../utils/iconUtils";
import {LoginSignupScreen} from "../screen/LoginSignupScreen";
import {Backdrop} from "@mui/material";

type Props = {
    left: ReactNode,
    middle: ReactNode,
    right: ReactNode,
    header: ReactNode,
    hoverBottomLeft?: ReactNode,
    hoverBottomRight?: ReactNode,
    isLoading: boolean,
    isAuthenticated: boolean,
    isDialogMode: boolean,
    dialogComponent: ReactNode
};
export const BaseLayout = (props: Props) => {
    const renderComponent: ReactNode = props.isAuthenticated ?
        <>
            <div className={styles.sideLayout}>{props.left}</div>
            <div className={styles.middleLayout}>
                {props.header}
                <div className={styles.middleLayoutContainer}>
                    {props.middle}
                </div>
                <div className={styles.hoverBottomRightComponent}>
                    {props.hoverBottomRight}
                </div>
                <div className={styles.hoverBottomLeftComponent}>
                    {props.hoverBottomLeft}
                </div>
            </div>
            <div className={styles.sideLayout}>{props.right}</div>
        </> : <LoginSignupScreen/>;

    return (
        <div className={styles.baseLayout}>
            <AppLoadingOverlay open={props.isLoading}/>
            <AppDialogOverlay open={props.isDialogMode}>
                {props.dialogComponent}
            </AppDialogOverlay>
            {renderComponent}
        </div>
    );
};

const AppDialogOverlay = (props: {
    open: boolean,
    children: ReactNode
}) => {
    return (
        <Backdrop sx={{zIndex: 130, backgroundColor: "rgba(28, 28, 28, 0.75)"}} open={props.open}>
            {props.children}
        </Backdrop>
    )
}

const AppLoadingOverlay = (props: {
    open: boolean
}) => {
    return (
        <Backdrop sx={{zIndex: 140, backgroundColor: "rgba(28, 28, 28, 0.75)"}} open={props.open}>
            <Icon iconFileName={IconFileNames.LOADING}/>
        </Backdrop>
    )
}