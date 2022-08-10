import {Avatar, Box, Container, Grid, Typography} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import * as React from 'react';
import { Link } from 'react-router-dom';

const SuccessRegister = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOpenIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Anda berhasil Register</Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Grid container>
                        <Grid item>
                            <Link to="/">
                                {"Go select your Planet!"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default SuccessRegister;