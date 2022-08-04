import React from "react";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import MUI components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation, Zoom, Keyboard } from "swiper";

function CarouselItem( {recipes} ) {
  let navigate = useNavigate();
  
  const detailRecipe = (recipeId) => {
    console.log(recipeId);
    navigate(`/recipes/${recipeId}`)
  }

  return (
    <Swiper
      modules={[EffectFade, Autoplay, Pagination, Navigation, Zoom, Keyboard]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      loop={true}
      zoom={true}
      autoplay={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        recipes.map((recipeItem) => (
          <SwiperSlide 
            key = {recipeItem.id}
            onClick = {() => detailRecipe(recipeItem.id)}
          >
            <Card sx={{ 
              margin: '1em',
              mb: '2em',
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  width='100'
                  image={recipeItem.image}
                  alt={recipeItem.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="body2" component="div">
                    <b>{recipeItem.title}</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        ))
      }
    </Swiper>
    
  )
}

export default CarouselItem;

// <img src={recipeItem.image} alt={recipeItem.title}></img>