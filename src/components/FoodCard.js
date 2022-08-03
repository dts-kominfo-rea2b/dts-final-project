import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import Grid from "@mui/material/Grid";
import {createTheme,ThemeProvider} from '@mui/material/'
const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 9,
            },
          },
        ],
      },
    },
  });
const FoodCard = ({ food }) => {
    return (
        <Grid item xs={3} md={3}>
            <ThemeProvider theme={theme}>
            <Card id={food.restaurant.res_id} sx={{ maxWidth: 345, margin: 0.2 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={food.restaurant.featured_image}
                    alt="food poster"
                />

                <CardContent >
                    <Typography gutterBottom component="h4" variant="div">
                        {food.restaurant.name.substring(0, 30)}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        {food.restaurant.cuisines}
                    </Typography>
                    <Typography variant="body3" color="text.secondary" component="p">
                        {food.restaurant.location.locality_verbose}
                    </Typography>

                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                        <Rating name="read-only" precision={0.1} value={food.restaurant.user_rating.aggregate_rating} max={5} readOnly />
                        <Box sx={{ ml: 2 }}>{food.restaurant.user_rating.aggregate_rating}</Box>
                    </Box>
                </CardContent>
            </Card>
            </ThemeProvider>
        </Grid>
    );
}

export default FoodCard;