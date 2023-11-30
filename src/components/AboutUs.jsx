import { Box, Typography } from '@mui/material';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';

const AboutUs = () => {
    return (
        <Box sx={{ m: '100px auto', textAlign: 'center' }} width={{
            xl: '40%',
            lg: '40%',
            md: '40%',
            sm: '40%',
            xs: '80%'
        }}>
            <Typography variant='h4' sx={{ margin: '0 auto 20px' }}>
                About Us
            </Typography>
            <Typography variant='p' sx={{ fontSize: "medium" }}>
                Divide have don't man wherein air fourth. Own itself make have night won't make. A you under Seed appear which good give. Own give air without fowl moveth dry first heaven fruit, dominion she'd won't very all.
            </Typography>
            <br />
            <DrawOutlinedIcon sx={{ margin: '20px auto 0', fontSize: 'xxx-large' }} />
        </Box>
    );
}

export default AboutUs;