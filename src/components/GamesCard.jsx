import React from "react";
import {
    Box,
    Card,
    Rating,
    Typography,
    CardMedia,
    CardContent, Button, CardActions
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GamesCard = (props) => {
    let navigate = useNavigate();
    const gameDetail = (gameid) => {
        navigate('/gamedetail/' + gameid);
    }
    return (
        <Card className="boxy" sx={{ display: 'flex', width: 400, margin: 5, mb: 8 }}>
            <CardMedia
                component="img"
                sx={{ width: 150, height: 225 }}
                image={props.game.background_image}
                alt={props.game.name}
            ></CardMedia>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent
                    sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6" textAlign='left'>{props.game.name}</Typography>
                    <Typography variant="subtitle1" color='text.secondary' component='div' textAlign='left'>
                        Release Date: {props.game.released}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box sx={{ width: 200, display: 'flex', alignItems: 'left' }}>
                            <Rating value={props.game.rating} precision={0.1} readOnly></Rating>
                            <Typography>{props.game.rating} / {props.game.rating_top}</Typography>
                        </Box>
                    </Box>
                </CardContent>
                <CardActions sx={{ ml: 4 }}>
                    <Button className="card_button" sx={{ mt: 5 }} variant="contained" onClick={() => gameDetail(props.game.id)}>click for detail</Button>
                </CardActions>
            </Box>
        </Card>
    );
}

export default GamesCard;