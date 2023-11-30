import { Box, Typography, TextField, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '../theme.jsx';

const FormSection = () => {
    return (
        <Box sx={{ background: 'rgb(241, 238, 238)', padding: '100px 0' }}>
            <Box sx={{ margin: 'auto', textAlign: 'center' }} width={{
                xl: '60%',
                lg: '60%',
                md: '60%',
                sm: '70%',
                xs: '80%'
            }}>
                <Typography variant='h5' sx={{ fontSize: 'x-large', margin: '0 auto 30px' }}>
                    Need a Project?
                </Typography>
                <Typography variant='h6' sx={{ margin: '20px auto 20px' }}>Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField label="Your Name" variant="outlined" sx={{ width: '49.5%', background: 'white' }} />
                    <TextField label="Your Email" variant="outlined" sx={{ width: '49.5%', background: 'white' }} />
                </Box>
                <TextField label="Your Title" variant="outlined" sx={{ width: '100%', background: 'white', margin: '15px auto' }}></TextField>
                <TextField label="Your Title" variant="outlined" sx={{ width: '100%', background: 'white' }}></TextField>
                <ThemeProvider theme={customTheme}>
                    <Button variant='contained' color='secondary' sx={{ color: 'white', margin: '15px auto' }}>SEND MESSAGE</Button>
                </ThemeProvider>
            </Box>
        </Box>
    );
}

export default FormSection;