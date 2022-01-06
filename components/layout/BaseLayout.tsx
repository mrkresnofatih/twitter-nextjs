// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import styles from '../../styles/layout/layout.module.css';
import {Icon} from "../icon/Icon";
import {IconFileNames} from "../../utils/iconUtils";
import {LoginSignupScreen} from "../screen/LoginSignupScreen";

type Props = {
    left: ReactNode,
    middle: ReactNode,
    right: ReactNode,
    header: ReactNode,
    hoverBottomLeft?: ReactNode,
    hoverBottomRight?: ReactNode,
    isLoading: boolean,
    isAuthenticated: boolean
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

    const loadingScreen: ReactNode = props.isLoading ?
        <div className={styles.appLoadingOverlay}>
            <Icon iconFileName={IconFileNames.LOADING}/>
        </div> : <></>;

    return (
        <div className={styles.baseLayout}>
            {loadingScreen}
            {renderComponent}
        </div>
    );
};