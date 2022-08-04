import React, { useEffect, useState } from 'react'
import CarouselItem from '../components/CarouselItem';
import axios from 'axios';
import { Box } from '@mui/system'

function HealthyCarouselList() {
  const [recipeList, setRecipeList] = useState([])

  const baseRecipeUrl = 'https://api.spoonacular.com/recipes/random';

  const trendingRecipeURL ='number=5&sort=healthiness&sortDirection=asc'

  const fetchTrendingRecipes = async () => {
    const checkHealthyTrending = localStorage.getItem('healthyTrending')
    
    if (checkHealthyTrending) {
      setRecipeList(JSON.parse(checkHealthyTrending))
    } else {
      const response = await axios.get(`${baseRecipeUrl}?${trendingRecipeURL}&apiKey=${process.env.REACT_APP_API_SPOONACULAR}`)
      console.log(response);  
      setRecipeList(response.data.recipes)
      localStorage.setItem('healthyTrending', JSON.stringify(response.data.recipes))
    }
  }

  useEffect(() => {
    fetchTrendingRecipes();
  }, [])

  return (
    <Box sx ={{
      display:'flex',
      width:'100%'
    }}>
      <CarouselItem recipes={recipeList} />
    </Box>
  )
}

export default HealthyCarouselList;