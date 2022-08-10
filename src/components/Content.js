import React from 'react';
import { Box, CardMedia, Card, Typography, CardContent, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
// import useSound from 'use-sound';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


const Content = ({items})=> {

    let navigate = useNavigate();

    const viewGSM = (items) => {
        const idGSM = items.slug;
        navigate(`/detail/${idGSM}`);
    }

    return (
    <Card id={items.slug} sx={{ display: 'flex', width: 280, marginTop:3, marginLeft:1, marginRight:1, marginBottom:3}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            { items.phone_name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            PakPOS Digital Studio
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button variant="contained" endIcon={<VisibilityIcon />} onClick={() => viewGSM(items)} xs={{paddingButton: 5}}>
        VIEW
        </Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={ items.image }
        alt="Ponsel"
      />
    </Card>
        
                
    )
}

export default Content;