import { Box, Typography, Button } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';
import img1 from '../assets/showcase.jpg';
import img2 from '../assets/showcaseimg.jpg';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '../theme.jsx';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ImgLists = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box>
            <ImageList sx={{ width: '100%', height: '100%', margin: '0' }} cols={matches ? 4 : 2} gap={0}>
                <ImageListItem sx={{
                    '&:hover': {
                        opacity: '0.5'
                    }
                }}>
                    <img
                        src={img1}
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem sx={{
                    '&:hover': {
                        opacity: '0.6'
                    }
                }}>
                    <img
                        src={img2}
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem sx={{
                    '&:hover': {
                        opacity: '0.5'
                    }
                }}>
                    <img
                        src={img1}
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem sx={{
                    '&:hover': {
                        opacity: '0.6'
                    }
                }}>
                    <img
                        src={img2}
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem sx={{
                    '&:hover': {
                        opacity: '0.5'
                    }
                }}>
                    <img
                        src={img2}
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem sx={{
                    '&:hover': {
                        opacity: '0.6'
                    }
                }}>
                    <img
                        src={img1}
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem sx={{
                    '&:hover': {
                        opacity: '0.5'
                    }
                }}>
                    <img
                        src={img2}
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem sx={{
                    '&:hover': {
                        opacity: '0.6'
                    }
                }}>
                    <img
                        src={img1}
                        loading="lazy"
                    />
                </ImageListItem>
            </ImageList>
            <ThemeProvider theme={customTheme}>
                <Button variant='contained' color='info' sx={{ width: '100%', padding: '30px 0', borderRadius: '0' }}><Typography variant='h6'>Load More Work</Typography></Button>
            </ThemeProvider>
        </Box>
    );
}

export default ImgLists;