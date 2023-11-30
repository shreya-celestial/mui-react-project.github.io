import React from 'react';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import ReviewNums from './components/ReviewNums';
import ImgLists from './components/ImgLists';
import Process from './components/Process';
import WorkFields from './components/WorkFields';
import Quote from './components/Quote';
import IconsList from './components/IconsList';
import FormSection from './components/FormSection';
import Footer from './components/Footer';

const App = () => {
    return (
        <Box>
            <NavBar />
            <AboutUs />
            <Skills />
            <ReviewNums />
            <ImgLists />
            <Process />
            <WorkFields />
            <Quote />
            <IconsList />
            <FormSection />
            <Footer />
        </Box>
    );
}

export default App;