import { Box } from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';

const IconsList = () => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', margin: '80px auto' }}>
            <AutoFixHighOutlinedIcon sx={{ fontSize: 'xxx-large', margin: '10px' }} />
            <AutoGraphOutlinedIcon sx={{ fontSize: 'xxx-large', margin: '10px' }} />
            <AutoFixHighOutlinedIcon sx={{ fontSize: 'xxx-large', margin: '10px' }} />
            <AutoGraphOutlinedIcon sx={{ fontSize: 'xxx-large', margin: '10px' }} />
            <AutoFixHighOutlinedIcon sx={{ fontSize: 'xxx-large', margin: '10px' }} />
        </Box>
    );
}

export default IconsList;