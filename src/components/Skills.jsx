import { Box, Typography, LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { customTheme } from '../theme.jsx';
import image from '../assets/img1.jpg'

const Skills = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box sx={{ display: 'flex', background: '#f7fdfd', flexWrap: 'nowrap' }} flexDirection={{
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'row',
            xs: 'column'
        }}>
            {matches ? "" : <img src={image} style={{ width: '100%' }} />}
            <Box
                margin={{
                    xl: 'auto 8%',
                    lg: 'auto 8%',
                    md: 'auto 8%',
                    sm: '30px 8%',
                    xs: '100px auto'
                }} width={{
                    xl: '50%',
                    lg: '50%',
                    md: '50%',
                    sm: '50%',
                    xs: '80%'
                }}>
                <Typography variant='h5' sx={{ margin: '30px auto' }}>
                    Professional Skills
                </Typography>
                <Typography variant='p'>
                    UI/UX DESIGN 75%
                </Typography>
                <ThemeProvider theme={customTheme}>
                    <LinearProgress variant='determinate' value={75} color='secondary' sx={{ background: 'rgba(0,0,0,0.1)', borderRadius: '10px', margin: '20px auto 30px' }} />
                </ThemeProvider>
                <Typography variant='p'>
                    WEB DEVELOPMENT 90%
                </Typography>
                <ThemeProvider theme={customTheme}>
                    <LinearProgress variant='determinate' value={90} color='secondary' sx={{ background: 'rgba(0,0,0,0.1)', borderRadius: '10px', margin: '20px auto 30px' }} />
                </ThemeProvider>
                <Typography variant='p'>
                    MARKETING 65%
                </Typography>
                <ThemeProvider theme={customTheme}>
                    <LinearProgress variant='determinate' value={65} color='secondary' sx={{ background: 'rgba(0,0,0,0.1)', borderRadius: '10px', margin: '20px auto 30px' }} />
                </ThemeProvider>
            </Box>
            {!matches ? "" : <img src={image} style={{ width: '50%' }} />}
        </Box>
    );
}

export default Skills;