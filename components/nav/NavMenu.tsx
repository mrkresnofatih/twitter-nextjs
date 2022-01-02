// @flow
import * as React from 'react';
import styles from '../../styles/nav/navmenu.module.css';
import {NavButton} from "./NavButton";
import {IconFileNames} from "../../utils/iconUtils";
import {pageHeaders} from "../../constants/pageHeaders";
import {Link} from "@mui/material";

type Props = {
    responsive: boolean,
    activeHeader: pageHeaders
};
export const NavMenu = (props: Props) => {

    const navMenuButtons: navMenu[] = [
        {
            iconFileName: IconFileNames.TWITTER_FILLED_WHITE,
            text: "",
            pageUrl:    "/"
        },
        {
            iconFileName: IconFileNames.HOME_OUTLINE_WHITE,
            text: pageHeaders.HOME,
            pageUrl:    "/"
        },
        {
            iconFileName: IconFileNames.EXPLORE_OUTLINE_WHITE,
            text: pageHeaders.EXPLORE,
            pageUrl:    `/${pageHeaders.EXPLORE.toLowerCase()}`
        },
        {
            iconFileName: IconFileNames.BOOKMARK_OUTLINE_WHITE,
            text: pageHeaders.BOOKMARK,
            pageUrl:    `/${pageHeaders.BOOKMARK.toLowerCase()}`
        },
        {
            iconFileName: IconFileNames.PROFILE_OUTLINE_WHITE,
            text: pageHeaders.PROFILE,
            pageUrl:    `/${pageHeaders.PROFILE.toLowerCase()}`
        }
    ]

    return (
        <div className={styles.navMenuOuterContainer}>
            <div className={styles.navMenuInnerContainer}>
                {navMenuButtons.map((navMenuButton, index) => {
                    const isActive: boolean = navMenuButton.text === props.activeHeader;
                    return (
                        <Link
                            key={index}
                            style={{textDecoration: "none"}}
                            href={navMenuButton.pageUrl}
                        >
                            <NavButton
                                iconFileName={navMenuButton.iconFileName}
                                text={navMenuButton.text}
                                active={isActive}
                                responsive={props.responsive}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

interface navMenu {
    iconFileName: IconFileNames,
    text: string,
    pageUrl: string
}