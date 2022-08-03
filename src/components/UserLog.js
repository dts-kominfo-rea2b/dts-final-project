import {AccountCircle } from '@mui/icons-material';
import {IconButton,Menu, MenuItem} from '@mui/material';
import { signOut } from 'firebase/auth';
import React, {useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import {auth} from '../config/firebase';

const UserLog = () => {
    const navigate = useNavigate();
    const[user] = useAuthState(auth);
    const[anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCLose = () => {
        setAnchorEl(null);
    };

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };
    return (user ? 
        <>
        <IconButton 
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl ={anchorEl}
            anchorOrigin={{
                vartical: 'top',
                horizontal: 'right',
            }}
            keepMonted
            transformOrigin={{
                vartical:'top',
                horizontal:'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleCLose}
        >
            <MenuItem>{user.email}</MenuItem>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
        </> : 
        <NavLink to={'/login'} key={'login'} className={({isActive}) => isActive ? 'nav-active' : 'nav-inactive'}>
            Login
        </NavLink>
        )
}

export default UserLog;