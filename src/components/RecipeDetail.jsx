import React from 'react';
import axios from 'axios';
import { Card, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const baseRecipeURL= 'https://api.spoonacular.com/'
  
  let params = useParams();
  let URLDetail = `recipes/${params?.recipeId}`

  const [recipeDetail, setRecipeDetail] = useState(URLDetail)

  useEffect(() => {
    const fetchRecipeDetail = async () => {
        try {
            const query = await axios.get(`${baseRecipeURL}${URLDetail}/information?apiKey=${process.env.REACT_APP_API_SPOONACULAR}`)
            setRecipeDetail(query.data.results)
        } catch (error) {
            console.log(error);
        }
    };
    fetchRecipeDetail()
  }, [URLDetail])

  
  return (
    <Card>
      <Typography>
        {/* Judul */}
      </Typography>
      <Typography>
        {/* Summary */}
      </Typography>
      <CardMedia>
        {/* Gambar */}
      </CardMedia>
      <Typography>
        {/* Ingredients */}
      </Typography>
      <Typography>
        {/* Instructions */}
      </Typography>
      {/* Nutrition Facts */}
    </Card>
  )
}

export default RecipeDetail