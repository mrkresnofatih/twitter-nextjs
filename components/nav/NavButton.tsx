// @flow
import * as React from 'react';
import {IconFileNames} from "../../utils/iconUtils";
import styles from '../../styles/nav/navbutton.module.css';
import {Icon} from "../icon/Icon";

type Props = {
    iconFileName: IconFileNames,
    text: string,
    active: boolean,
    responsive: boolean
};
export const NavButton = (props: Props) => {
    const responsiveStyle = props.responsive ? styles.navButtonTextHover : undefined;
    const activeStyle: string | undefined = (props.active) ? styles.navButtonIconSelected : undefined;
    return (
        <div className={`${styles.navButton} ${activeStyle}`}>
            <Icon
                iconFileName={props.iconFileName}
                className={styles.navButtonIcon}
            />
            <h2 className={`${styles.navButtonText} ${responsiveStyle}`}>{props.text}</h2>
        </div>
    );
};