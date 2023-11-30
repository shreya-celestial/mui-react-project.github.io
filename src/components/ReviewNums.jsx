import { Box, Typography } from '@mui/material';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';

const ReviewNums = () => {
    return (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', padding: '80px 0', background: 'rgb(89 200 197)', color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DrawOutlinedIcon sx={{ margin: 'auto 10px auto auto', fontSize: 'xx-large' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='p'>548</Typography>
                    <Typography variant='p'>PROJECTS COMPLETED</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DrawOutlinedIcon sx={{ margin: 'auto 10px auto auto', fontSize: 'xx-large' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='p'>1465</Typography>
                    <Typography variant='p'>WORKING HOURS</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DrawOutlinedIcon sx={{ margin: 'auto 10px auto auto', fontSize: 'xx-large' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='p'>612</Typography>
                    <Typography variant='p'>POSITIVE FEEDBACKS</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DrawOutlinedIcon sx={{ margin: 'auto 10px auto auto', fontSize: 'xx-large' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='p'>735</Typography>
                    <Typography variant='p'>HAPPY CLIENTS</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ReviewNums;