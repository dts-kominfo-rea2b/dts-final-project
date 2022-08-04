import React, { useState, useEffect } from "react";
import { Box, Paper, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import rawg from "../apis/rawg";
import GamesCard from "../components/GamesCard";

const GameLists = () => {
    const [games, setGames] = useState([]);
    const [gamesFiltered, setGamesFiltered] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const readAPI = await rawg.get();
                setGames(readAPI.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchGames();
    }, []);

    const searchItems = (inputValue) => {
        setSearchInput(inputValue);
        if (searchInput !== '') {
            const filteredData = games.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            });
            setGamesFiltered(filteredData);
        } else {
            setGamesFiltered(games);
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 5 }}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', justifyContent: 'center', width: 400, mt: 5, ml: 75 }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    name='gamename'
                    placeholder="search game ..."
                    inputProps={{ 'aria-label': 'search game name' }}
                    onChange={(e) => searchItems(e.target.value)}
                />
                <SearchIcon />
            </Paper>
            <Box className="" sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', mt: 1 }}>
                {searchInput.length > 1 ? (
                    gamesFiltered.map((game, key) => {
                        return <GamesCard game={game}></GamesCard>
                    })
                ) : (games.map((game, key) => {
                    return <GamesCard key={key} game={game}></GamesCard>
                }))}
            </Box>
        </Box>
    );

}

export default GameLists;

