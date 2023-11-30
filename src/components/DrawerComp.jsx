import { Drawer, List, ListItem, ListItemButton, ListItemText, Divider, IconButton } from '@mui/material';
import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComp = ({ names }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Drawer PaperProps={{
                sx: { backgroundColor: 'rgba(90,154,144, 0.9)', width: 'fit-content' }
            }} open={isOpen} onClose={() => setIsOpen(false)}>
                <List>
                    {names.map((tabName, index) => (
                        <React.Fragment key={index}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => setIsOpen(false)}>
                                    <ListItemText sx={{ margin: '0', color: 'aliceblue', fontSize: 'xx-large' }} primary={tabName} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
            <IconButton sx={{ ml: 'auto' }} onClick={() => setIsOpen(true)}>
                <MenuRoundedIcon fontSize='large' sx={{ color: 'black' }} />
            </IconButton>
        </>
    );
}

export default DrawerComp;