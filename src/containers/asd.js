import {ThemeProvider, Box, Input} from '@mui/material';
import theme from '../themes/theme';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import { gsmdb } from '../api/gsmarena';
import Buttons from "../components/Buttons";
import '../App.css';

const HomePage = () => {
    const [gsmlists, setGsmlist] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [gsmByList, setItem] = useState([]);
    useEffect(() => {
        const fetchGsm = async () => {
            try {
                const difetchGsm = await gsmdb.get();
                setGsmlist(difetchGsm.data.data.phones);
                console.log(difetchGsm.data.data.phones);
            } catch (error) {
                console.log(error);
            }
        }

        fetchGsm();
    }, [setItem]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = gsmlists.filter((item) => {
                return Object.values(item.phone_name).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(gsmlists)
        }
    }

    //const menuItems = [...new Set(gsmlists.map((Val) => Val.type))];
    //const menuItems = [...new Set(gsmlists.map((Val) => Val.type))];

    const filterItem = (curcat) => {
        const newItem = gsmlists.filter((newVal) => {
          return newVal.type === curcat;
        });
        setItem(newItem);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar></Navbar>
                <Box sx={{marginTop: 13}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom:6}}>
                        {
                            gsmlists.map(item => (
                                <Content key={item.slug} items={item} ></Content>
                            ))
                        }
                    </Box>
                    
                </Box>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    )
}

export default HomePage;