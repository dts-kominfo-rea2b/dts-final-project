import React, { useEffect, useState } from 'react'
import CarouselItem from '../components/CarouselItem';
import axios from 'axios';
import { Box } from '@mui/system'

function CarouselList() {
  const [recipeList, setRecipeList] = useState([])

  const baseRecipeUrl = 'https://api.spoonacular.com/recipes/random';

  const trendingRecipeURL ='number=5'

  const fetchTrendingRecipes = async () => {
    const response = await axios.get(`${baseRecipeUrl}?${trendingRecipeURL}&apiKey=${process.env.REACT_APP_API_SPOONACULAR}`)
    console.log(response);  
    setRecipeList(response.data.recipes)
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

export default CarouselList;