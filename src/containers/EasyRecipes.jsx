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
    const response = await axios.get(`${baseURL}?apiKey=${process.env.REACT_APP_API_SPOONACULAR}&${easyRecipesURL}`)
    const responseResult = response.data.results;
    setEasyRecipes(responseResult)
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
            <RecipeCard 
              recipe = {recipe}
              key = {recipe.id}
            >
            </RecipeCard>
          ))
        }
      </Box>
    </Box>
  )
}

export default EasyRecipes