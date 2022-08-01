import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Box } from '@mui/system';
import RecipeCard from '../components/RecipeCard';
import EasyCarouselList from './EasyCarouselList';

function EasyRecipes() {
  const [easyRecipes, setEasyRecipes] = useState([])

  const baseURL = 'https://api.spoonacular.com/recipes/complexSearch';

  const easyRecipesURL = 'maxReadyTime=20&number=20&addRecipeInformation=true';

  const fetchEasyRecipes = async () => {
    const checkEasyRecipes = localStorage.getItem('easyRecipes')

    if (checkEasyRecipes) {
      setEasyRecipes(JSON.parse.checkEasyRecipes);
    } else {
      const response = await axios.get(`${baseURL}?apiKey=${process.env.REACT_APP_API_SPOONACULAR}&${easyRecipesURL}`)
      setEasyRecipes(response.data.results)
      localStorage.setItem('easyRecipes', JSON.stringify(response.data.results));
    }
  }

  useEffect(() => {
    fetchEasyRecipes()
  }, [])

  return (
    <Box>  
      <div>
        <EasyCarouselList />
      </div>
      <Box sx={
        {
            display: 'flex',
            flexDirection: 'flow',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
      }>
        {
          easyRecipes.map(recipe => (
            <RecipeCard recipe = {recipe}></RecipeCard>
          ))
        }
      </Box>
    </Box>
  )
}

export default EasyRecipes