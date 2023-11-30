import { Box, Typography } from '@mui/material';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';

const WorkFields = () => {
    return (
        <Box sx={{ padding: '40px 0', background: 'rgb(234, 234, 234)', }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '20px auto' }} flexDirection={{
                xl: 'row',
                lg: 'row',
                md: 'row',
                sm: 'row',
                xs: 'column'
            }}>
                <Box sx={{ textAlign: 'center' }} width={{
                    xl: '20%',
                    lg: '20%',
                    md: '20%',
                    sm: '40%',
                    xs: '80%'
                }}>
                    <BrushOutlinedIcon />
                    <Typography variant='h6'>
                        UI / UX DESIGN
                    </Typography>
                    <Typography>
                        Be set fourth land god darkness make it wherein own
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }} width={{
                    xl: '20%',
                    lg: '20%',
                    md: '20%',
                    sm: '40%',
                    xs: '80%'
                }}>
                    <BrushOutlinedIcon />
                    <Typography variant='h6'>
                        WEB DEVELOPMENT
                    </Typography>
                    <Typography>
                        A she'd them bring void moving third she'd kind fill
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }} width={{
                    xl: '20%',
                    lg: '20%',
                    md: '20%',
                    sm: '40%',
                    xs: '80%'
                }}>
                    <BrushOutlinedIcon />
                    <Typography variant='h6'>
                        APP / MOBILE
                    </Typography>
                    <Typography>
                        Dominion man second spirit he, earth they're creeping
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }} width={{
                    xl: '20%',
                    lg: '20%',
                    md: '20%',
                    sm: '40%',
                    xs: '80%'
                }}>
                    <BrushOutlinedIcon />
                    <Typography variant='h6'>
                        GAME DESIGN
                    </Typography>
                    <Typography>
                        Morning his saying moveth it multiply appear life be
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '20px auto' }} flexDirection={{
                xl: 'row',
                lg: 'row',
                md: 'row',
                sm: 'row',
                xs: 'column'
            }}>
                <Box sx={{ textAlign: 'center' }} width={{
                    xl: '20%',
                    lg: '20%',
                    md: '20%',
                    sm: '40%',
                    xs: '80%'
                }}>
                    <BrushOutlinedIcon />
                    <Typography variant='h6'>
                        SEO / MARKETING
                    </Typography>
                    <Typography>
                        Give won't after land fill creeping meat you, may
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }} width={{
                    xl: '20%',
                    lg: '20%',
                    md: '20%',
                    sm: '40%',
                    xs: '80%'
                }}>
                    <BrushOutlinedIcon />
                    <Typography variant='h6'>
                        PHOTOGRAPHY
                    </Typography>
                    <Typography>
                        Creepeth one seas cattle grass give moving saw give
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }} width={{
                    xl: '20%',
                    lg: '20%',
                    md: '20%',
                    sm: '40%',
                    xs: '80%'
                }}>
                    <BrushOutlinedIcon />
                    <Typography variant='h6'>
                        GRAPHIC DESIGN
                    </Typography>
                    <Typography>
                        Open, greate whales air rule for, fourth life whales
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }} width={{
                    xl: '20%',
                    lg: '20%',
                    md: '20%',
                    sm: '40%',
                    xs: '80%'
                }}>
                    <BrushOutlinedIcon />
                    <Typography variant='h6'>
                        ILLUSTRATIONS
                    </Typography>
                    <Typography>
                        Whales likeness hath, man kind for them air two won't
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default WorkFields;