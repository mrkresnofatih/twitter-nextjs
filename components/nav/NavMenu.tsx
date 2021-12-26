// @flow
import * as React from 'react';
import styles from '../../styles/nav/navmenu.module.css';
import {NavButton} from "./NavButton";
import {IconFileNames} from "../../utils/iconUtils";

type Props = {};
export const NavMenu = (props: Props) => {

    const navMenuButtons: navMenu[] = [
        {
            iconFileName: IconFileNames.TWITTER_FILLED_WHITE,
            text: ""
        },
        {
            iconFileName: IconFileNames.HOME_OUTLINE_WHITE,
            text: "Home"
        },
        {
            iconFileName: IconFileNames.EXPLORE_OUTLINE_WHITE,
            text: "Explore"
        },
        {
            iconFileName: IconFileNames.BOOKMARK_OUTLINE_WHITE,
            text: "Bookmark",
        },
        {
            iconFileName: IconFileNames.PROFILE_OUTLINE_WHITE,
            text: "Profile"
        }
    ]

    return (
        <div className={styles.navMenuOuterContainer}>
            <div className={styles.navMenuInnerContainer}>
                {navMenuButtons.map((navMenuButton) => (
                    <NavButton
                        iconFileName={navMenuButton.iconFileName}
                        text={navMenuButton.text}
                    />
                ))}
            </div>
        </div>
    );
};

interface navMenu {
    iconFileName: IconFileNames,
    text: string
}