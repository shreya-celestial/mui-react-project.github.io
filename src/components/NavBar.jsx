import { AppBar, Toolbar, IconButton, Tabs, Tab, Box, Typography, Button } from '@mui/material';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import { useState } from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { customTheme } from '../theme.jsx';
import bgImg from '../assets/back.png'
import DrawerComp from './DrawerComp.jsx';

const tabNames = ['Home', 'About', 'Work', 'Process', 'Services', 'Testimonials', 'Contact'];

const NavBar = () => {
    const [curTab, setCurTab] = useState(tabNames[0]);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{ background: `url(${bgImg}) center no-repeat`, backgroundSize: 'cover', height: '80vh' }}>
            <AppBar sx={{ background: 'transparent', boxShadow: 'none', position: 'relative' }}>
                <Toolbar sx={{ color: 'black' }}>
                    <IconButton>
                        <DrawOutlinedIcon fontSize='large' sx={{ color: 'black', fontSize: 'xxx-large' }} />
                    </IconButton>
                    {!matches ? '' : <ThemeProvider theme={customTheme}>
                        <Tabs value={curTab} onChange={(e, val) => setCurTab(val)} sx={{ ml: 'auto' }}>
                            {tabNames.map((name, index) => (
                                <Tab value={name} label={name} key={index} sx={{
                                    color: 'black', fontWeight: 'bold', '&:hover': {
                                        color: 'rgb(90 154 144)'
                                    }
                                }} />
                            ))}
                        </Tabs>
                    </ThemeProvider>}
                    {matches ? '' : <DrawerComp names={tabNames} />}
                </Toolbar>
            </AppBar>
            <Box sx={{ ml: '50%', mt: '20vh', mr: '10%' }}>
                <Typography variant='h3' fontSize={{
                    xl: '32px',
                    lg: '32px',
                    md: '32px',
                    sm: '32px',
                    xs: '25px'
                }} mb="20px">
                    We Design and Develop
                </Typography>
                <Typography variant='h6' fontSize={{
                    xl: '16px',
                    lg: '15px',
                    md: '14px',
                    sm: '13px',
                    xs: '12px'
                }}>
                    We are a new design studio in USA. We have over 20 years if combined experience, and know a thing or two about designing websites and mobile apps.
                </Typography>
                <Button variant='contained' sx={{
                    marginTop: '20px',
                    background: 'rgb(82, 217, 197)', '&:hover': {
                        background: 'rgb(90 154 144)'
                    }
                }}>Contact Us</Button>
            </Box>
        </Box >
    );
}

export default NavBar;