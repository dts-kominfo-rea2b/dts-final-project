import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 10,
            alignItems: 'center'
        }}>
            <img src='https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png' alt="404"></img>
            <p>Have you been lost??</p>
            <Link to='/'>take me home</Link>
        </Box>
    );
}

export default Page404;