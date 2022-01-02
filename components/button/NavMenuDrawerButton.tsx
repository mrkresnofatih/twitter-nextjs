// @flow
import * as React from 'react';
import {ReactNode, useState} from 'react';
import {Drawer} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {NavMenu} from "../nav/NavMenu";

type Props = {
    buttonIcon: ReactNode
};
export const NavMenuDrawerButton = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const styles = useStyles();

    return (
        <>
            <label onClick={openDrawer}>
                {props.buttonIcon}
            </label>
            <Drawer
                anchor={"left"}
                open={open}
                onClose={closeDrawer}
                classes={{
                    paper   :   styles.paper
                }}
            >
                <NavMenu responsive={false}/>
            </Drawer>
        </>
    );
};

const useStyles = makeStyles({
    paper: {
        background: '#1c1c1c',
        color: 'white',
        width: 250,
        borderRight: '1px solid rgba(255, 255, 255, 0.1)'
    }
});