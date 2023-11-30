import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ background: 'rgb(18, 18, 18)', color: 'aliceblue', padding: '60px 0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }} flexDirection={{
                xl: 'row',
                lg: 'row',
                md: 'row',
                sm: 'row',
                xs: 'column'
            }}>
                <Box sx={{ margin: '30px auto' }}>
                    <Typography variant='h5'>
                        Piroll Design, Inc.
                    </Typography>
                    <Typography>
                        © 2017 Piroll. All rights reserved.
                    </Typography>
                    <Typography>
                        Designed by robirurk
                    </Typography>
                </Box>
                <Box sx={{ margin: '30px auto' }}>
                    <Typography>hello@pirolltheme.com</Typography>
                    <Typography> +44 987 065 908</Typography>
                </Box>
                <Box sx={{ margin: '30px auto', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', minWidth: '15%' }}>
                    <List sx={{ margin: 'auto 5px' }}>
                        <ListItem disablePadding>
                            <ListItemText sx={{ margin: '0' }} primary="Projects" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ margin: '0' }} primary="About" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ margin: '0' }} primary="Services" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ margin: '0' }} primary="Career" />
                        </ListItem>
                    </List>
                    <List sx={{ margin: 'auto 5px' }}>
                        <ListItem disablePadding>
                            <ListItemText sx={{ margin: '0' }} primary="News" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ margin: '0' }} primary="Events" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ margin: '0' }} primary="Contact" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ margin: '0' }} primary="Legals" />
                        </ListItem>
                    </List>
                </Box>
                <List sx={{ margin: '30px auto' }}>
                    <ListItem disablePadding>
                        <ListItemText sx={{ margin: '0' }} primary="Facebook" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText sx={{ margin: '0' }} primary="Twitter" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText sx={{ margin: '0' }} primary="Instagram" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText sx={{ margin: '0' }} primary="Dribble" />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Footer;