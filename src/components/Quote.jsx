import { Box, Typography } from '@mui/material';

const Quote = () => {
    return (
        <Box sx={{ background: 'rgb(89 200 197)', padding: '100px 0' }}>
            <Box sx={{ color: 'white', margin: 'auto', textAlign: 'center' }} width={{
                xl: '60%',
                lg: '60%',
                md: '60%',
                sm: '70%',
                xs: '80%'
            }}>
                <Typography variant='h5'>"Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap"</Typography>
                <Typography variant='h6'>MICHAEL HOPKINS</Typography>
            </Box>
        </Box>
    );
}

export default Quote;