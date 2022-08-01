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
  const [recipeIngredient, setRecipeIngredient] = useState([])

  useEffect(() => {
    const fetchRecipeDetail = async () => {
        try {
            const query = await axios.get(`${baseRecipeURL}${URLDetail}/information?apiKey=${process.env.REACT_APP_API_SPOONACULAR}`)
            console.log(query.data);
            setRecipeDetail(query.data)
            setRecipeIngredient(query.data.extendedIngredients);
        } catch (error) {
            console.log(error);
        }
    };
    fetchRecipeDetail()
  }, [URLDetail])

  
  return (
    <Card>
      <Typography>
        {recipeDetail.title}
      </Typography>
      <Typography>
        {recipeDetail.summary}
      </Typography>
      <CardMedia>
        {recipeDetail.image}
      </CardMedia>
      <Typography>
        <ul>
          {recipeIngredient.map(ingredient => (
            <li>{ingredient.original}</li>
            ))}
        </ul>
      </Typography>
      <Typography>
        {/* Instructions */}
      </Typography>
      {/* Nutrition Facts */}
    </Card>
  )
}

export default RecipeDetail;