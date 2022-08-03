import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import Grid from "@mui/material/Grid";


const FoodCard = ({ food }) => {
    return (
        <Grid item xs={3}>
            <Card id={food.restaurant.res_id} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={food.restaurant.featured_image}
                    alt="food poster"
                />

                <CardContent >
                    <Typography gutterBottom component="div" variant="h6">
                        {food.restaurant.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {food.restaurant.cuisines}
                    </Typography>
                    <Typography variant="subtitle3" color="text.secondary" component="div">
                        {food.restaurant.location.address}
                    </Typography>

                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center', }}>
                        <Rating name="read-only" precision={0.1} value={food.restaurant.user_rating.aggregate_rating} max={5} readOnly />
                        <Box sx={{ ml: 2 }}>{food.restaurant.user_rating.aggregate_rating}</Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default FoodCard;