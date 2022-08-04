import React, { useState, useEffect } from "react";
import {
    Box, Typography, CardMedia,
    CardContent, Card, ThemeProvider
} from '@mui/material';
import { useParams } from 'react-router-dom';
import rawg from "../apis/rawg";
import Navbar from "../components/Navbar";
import theme from "../themes/theme";
import Footer from "../components/Footer";
import Deskripsi from '../components/Deskripsi';

const GameDetail = () => {
    let params = useParams();
    const [gameDetil, setGameDetil] = useState([]);
    const [gamesReady, setGamesReady] = useState(false);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const readAPI = await rawg.get('/' + params?.id);
                setGameDetil(readAPI.data);
                setGamesReady(!gamesReady);
            } catch (error) {
                console.log(error);
            }
        }
        fetchGames();
    }, []);



    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar></Navbar>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 5 }}>
                    <Card className="" sx={{ display: 'flex', width: 'auto', margin: 5 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 150, height: 225 }}
                            image={gameDetil.background_image}
                            alt={gameDetil.name}
                        ></CardMedia>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent
                                sx={{}}>
                                <Typography component="div" variant="h6" textAlign='left'>{gameDetil.name}</Typography>
                                <Typography variant="subtitle1" color='text.secondary' component='div' textAlign='left'>
                                    Release Date: {gameDetil.released}
                                </Typography>
                                <Deskripsi description={gameDetil.description}></Deskripsi>
                            </CardContent>
                        </Box>
                    </Card>
                </Box>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    );
}

export default GameDetail;