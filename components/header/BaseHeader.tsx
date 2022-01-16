// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import styles from '../../styles/header/baseheader.module.css';
import {NavMenuDrawerButton} from "../button/NavMenuDrawerButton";
import {Icon} from "../icon/Icon";
import {IconFileNames} from "../../utils/iconUtils";

type Props = {
    title: ReactNode,
    options: ReactNode,
    isNavHeader?: boolean
};
export const BaseHeader = (props: Props) => {
    const noNavButton = (props.isNavHeader !== undefined && props.isNavHeader === false)

    const navButton = (noNavButton) ? <></> : (
        <NavMenuDrawerButton buttonIcon={
            <Icon
                className={styles.navMenuIcon}
                iconFileName={IconFileNames.MENU_OUTLINE_WHITE}
            />
        }/>
    )

    return (
        <div className={styles.baseHeaderOuterContainer}>
            <div className={styles.baseHeaderInnerContainer}>
                <div className={styles.baseHeaderSides}>
                    {navButton}
                    {props.title}
                </div>
                <div className={styles.baseHeaderSides}>{props.options}</div>
            </div>
        </div>
    );
};