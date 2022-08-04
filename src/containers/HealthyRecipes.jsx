import React, { useEffect, useState } from 'react'
import HealthyCarouselList from './HealthyCarouselList'
import axios from 'axios';
import { Box } from '@mui/system';
import RecipeCard from '../components/RecipeCard';

function HealthyRecipes() {
  const [healthyRecipes, setHealthyRecipes] = useState([])
  
  const baseRecipeUrl = 'https://api.spoonacular.com/recipes/complexSearch';

  const healthyRecipesURL = 'sort=healthiness&addRecipeInformation=true&number=20'

  const fetchHealthyRecipes = async () => {
    const response = await axios.get(`${baseRecipeUrl}?${healthyRecipesURL}&apiKey=${process.env.REACT_APP_API_SPOONACULAR}`)
    const responseResult = response.data.results;
    console.log(responseResult);
    setHealthyRecipes(responseResult);
  }

  useEffect(() => {
    fetchHealthyRecipes();
  }, [])
    
  return (
    <Box>  
      <div>
        <HealthyCarouselList />
      </div>
      <Box 
      sx={
        {
            display: 'flex',
            flexDirection: 'flow',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
      }>
        {
          healthyRecipes.map(recipe => (
            <RecipeCard key = {recipe.id} recipe = {recipe}></RecipeCard>
          ))
        }
      </Box>
    </Box>
  );
}

export default HealthyRecipes;