import React from "react";
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Logout, SportsEsportsOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const Navbar = () => {
    const navigate = useNavigate();
    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Box sx={{ display: 'flex', }}>
            <AppBar component="nav">
                <Toolbar>
                    <SportsEsportsOutlined sx={{ display: 'flex', mr: 1 }} fontSize='large'></SportsEsportsOutlined>
                    <Typography variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: 'block',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem'
                        }}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/'>G A M E P E D I A</Link></Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ padding: 1 }}>
                            <Logout onClick={onLogout}></Logout>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;