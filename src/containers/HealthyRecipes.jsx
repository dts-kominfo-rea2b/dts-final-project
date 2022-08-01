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
    // Check if localStorage has healthy recipes object
    const checkHealthyRecipes = localStorage.getItem('healthyRecipes');

    if (checkHealthyRecipes) { // If yes, set healthy recipes from localStorage
      setHealthyRecipes(JSON.parse(checkHealthyRecipes))

    } else { // if not, fetch using api 
      const response = await axios.get(`${baseRecipeUrl}?${healthyRecipesURL}&apiKey=${process.env.REACT_APP_API_SPOONACULAR}`)
      setHealthyRecipes(response.data.recipe);
      localStorage.setItem('healthyRecipes', JSON.stringify(response.data.recipe))
    }
  }

  useEffect(() => {
    fetchHealthyRecipes();
  }, [])
    
  return (
    <Box>  
      <div>
        <HealthyCarouselList />
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
          healthyRecipes.map(recipe => (
            <RecipeCard recipe = {recipe}></RecipeCard>
          ))
        }
      </Box>
    </Box>
  );
}

export default HealthyRecipes;