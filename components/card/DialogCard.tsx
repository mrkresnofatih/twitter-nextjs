// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import styles from '../../styles/card/dialogcard.module.css';
import {Icon} from "../icon/Icon";
import {IconFileNames} from "../../utils/iconUtils";

type Props = {
    title: string | ReactNode,
    closable: boolean,
    onClose: () => void,
    children?: ReactNode,
    footerLeft?: ReactNode,
    footerRight?: ReactNode
};
export const DialogCard = (props: Props) => {
    const actualFooterLeft: ReactNode = props.footerLeft ? props.footerLeft : <EmptyFooterItem/>;
    const actualFooterRight: ReactNode = props.footerRight ? props.footerRight : <EmptyFooterItem/>;

    const titleComponent: ReactNode = (typeof props.title === "string") ? (
        <h4 className={styles.dialogHeaderTitle}>{props.title}</h4>
    ) : (
        <>{props.title}</>
    )
    const closeIcon: ReactNode = !props.closable ? <></>
        : <Icon onClick={props.onClose} className={styles.dialogCloseIcon}
                iconFileName={IconFileNames.CLOSE_OUTLINE_WHITE}/>

    return (
        <div className={styles.dialogCardContainer}>
            <div className={`${styles.dialogCardHeaderFooter} ${styles.dialogHeaderBorder}`}>
                {titleComponent}
                {closeIcon}
            </div>
            <div className={styles.dialogCardContent}>
                {props.children}
            </div>
            <div className={`${styles.dialogCardHeaderFooter} ${styles.dialogFooterBorder}`}>
                <div>
                    {actualFooterLeft}
                </div>
                <div>
                    {actualFooterRight}
                </div>
            </div>
        </div>
    );
};

const EmptyFooterItem = () => {
    return (
        <div style={{height: 24}}/>
    )
}