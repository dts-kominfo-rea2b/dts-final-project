import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function RecipeCard({recipe}) {
  let navigate = useNavigate();
  
  const detailRecipe = (recipeId) => {
    console.log(recipeId);
    navigate(`/recipes/${recipeId}`)
  }

  const summary = `${recipe.summary.split('.', 1)[0]}.`;
  
  return (
    <Card 
    onClick={() => detailRecipe(recipe.id)}
    sx={{
      width:312,
      margin:'1em'
    }}>
      <CardActionArea>
        <CardMedia 
          component='img'
          height='231'
          image={recipe.image}
          alt={recipe.title}
          sx={{
            width:312,
            height:231,
          }}
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div"
            sx={{
              wordWrap:'break-word',
              textAlign:'left'
            }}
          >
            {recipe.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign:'left',
            }}
          >
            {<p dangerouslySetInnerHTML={{ __html: summary }}></p>}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RecipeCard;