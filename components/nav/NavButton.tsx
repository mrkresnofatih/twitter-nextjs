// @flow
import * as React from 'react';
import {IconFileNames} from "../../utils/iconUtils";
import styles from '../../styles/nav/navbutton.module.css';
import {Icon} from "../icon/Icon";

type Props = {
    iconFileName: IconFileNames,
    text: string
};
export const NavButton = (props: Props) => {
    return (
        <div className={styles.navButton}>
            <Icon
                iconFileName={props.iconFileName}
                className={styles.navButtonIcon}
            />
            <h2 className={styles.navButtonText}>{props.text}</h2>
        </div>
    );
};