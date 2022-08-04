import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [query, setQuery] = useState('')

    const baseRecipeURL= 'https://api.spoonacular.com/recipes/autocomplete?';
    const queriedRecipeURL = `number=10&query=${query}`;

    const [recipeQuery, setRecipeQuery] = useState([])

    const changeHandler = (event) => {
        setQuery(event.target.value)
    }

    const debouncedChangeHandler = useMemo(
        () => debounce(changeHandler, 300)
        , []);
    
    useEffect(() => {
        const fetchRecipeQuery = async () => {
            const response = await axios.get(`${baseRecipeURL}apiKey=${process.env.REACT_APP_API_SPOONACULAR}&${queriedRecipeURL}`)
            console.log(response.data);
            setRecipeQuery(response.data)
        };
        fetchRecipeQuery();
    }, [queriedRecipeURL]);

    const navigate = useNavigate('')

    const [selectedOption, setSelectedOption] = useState([])

    const handleSelection = (event, value) => {
        setSelectedOption(value.id);
        console.log(`${event}: ${selectedOption}`);
        navigate(`/recipes/${value.id}`)
    }

    return (
        <Stack 
            spacing={2} 
            sx={{ 
                width: 300,
                mr:'2em', }}>
        <Autocomplete
            id="combo-box-demo"
            disableClearable
            options={recipeQuery}
            getOptionLabel={option => option.title}
            // options={recipeQuery.map((option) => option.title)}
            onChange={handleSelection}
            renderInput={(params) => (
            <TextField
                className='TextField'
                {...params}
                label="Search recipes..."
                InputProps={{
                ...params.InputProps,
                type: 'search',
                }}
                onChange={debouncedChangeHandler}
                variant='filled'
                size='small'
            />
            )}
        />
        </Stack>
    );
}