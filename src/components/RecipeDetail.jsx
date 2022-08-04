import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardMedia, Typography } from '@mui/material';
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
            alert(error.message);
        }
    };
    fetchRecipeDetail()
  }, [URLDetail])

  
  return (
    <Card 
      className='RecipeDetail'
    >
      <CardMedia
          className='RecipeThumbnail'
          component="img"
          image={recipeDetail.image}
          alt={recipeDetail.title}
          sx={{
            maxWidth:500,
            maxHeight:350,
          }}
      />
      <Typography 
        className='Title'
        variant='h2'
        sx={{
          mb:'0.5em'
        }}
      >
        {recipeDetail.title}
      </Typography>
      <Typography 
        dangerouslySetInnerHTML ={{ __html: recipeDetail.summary }}
        sx={{
          mb:'2em'
        }}
      >
      </Typography>
      <Typography 
        className='HeaderText'
        variant='h3'
      >
        Ingredients
      </Typography>
      <Typography
        className='ListText'
      >
        <ul>
          {recipeIngredient.map(ingredient => (
            <li key={ingredient.id}>
              {ingredient.original}
            </li>
            ))}
        </ul>
      </Typography>
      <Typography 
        variant='h3'
        className='HeaderText'
      >
        Instructions
      </Typography>
      <Typography
        className='ListText'
        dangerouslySetInnerHTML ={{ __html: recipeDetail.instructions }}
      >
      </Typography>
    </Card>
  )
}

export default RecipeDetail;