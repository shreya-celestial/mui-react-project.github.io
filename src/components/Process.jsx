import { Box, Typography } from '@mui/material';
import image from '../assets/imgVid.jpg';

const Process = () => {
    return (
        <Box sx={{ width: '100%', margin: '80px auto', textAlign: 'center' }}>
            <Box sx={{ margin: 'auto auto 30px', textAlign: 'center' }} width={{
                xl: '40%',
                lg: '40%',
                md: '40%',
                sm: '60%',
                xs: '80%'
            }}>
                <Typography variant='h6'>Our Work Process</Typography>
                <Typography>Was years it seasons was there form he in in them together over that, third sixth gathered female creeping bearing behold years</Typography>
            </Box>
            <img src={image} style={{ width: '80%' }} />
        </Box>
    );
}

export default Process;