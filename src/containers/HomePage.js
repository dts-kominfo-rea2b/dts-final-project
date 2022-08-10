import {ThemeProvider, Box, Input} from '@mui/material';
import theme from '../themes/theme';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar></Navbar>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    )
}

export default HomePage;