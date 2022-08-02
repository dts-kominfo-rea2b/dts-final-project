import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';

const About = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 20,
            backgroundColor: '#e2e2e2',
        }}>
            <Typography component="div" variant="h4" align="center" sx={{ margin: 5 }}>
             <h3><b>ABOUT US</b><br/></h3>  
                
            </Typography>
            <h4><center> Nurul Ayu Annisyah <br/>
                152235865100171</center> </h4>   

            <Outlet/>
        </Box>

    )
}

export default About;