import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createStructuredSelector } from 'reselect';
import { authSelector, errorSelector } from './../../redux/auth/selectors';
import { connect, useDispatch } from 'react-redux';
import { AuthState } from '../../types/states/auth/AuthState';
import { loginStart } from './../../redux/auth/action.creators';
import { getError, hasError } from '../../utils/errorHandling';
import { LoginFailedResponse } from '../../types/states/auth/LoginFailedResponse';
import Copyright from './../../components/auth/Copyright';
import { Alert } from '@mui/material';

interface Prop {
    authState: AuthState,
    authStateError: Pick<LoginFailedResponse, "message">
}

const LoginPage = ({ authState, authStateError }: Prop) => 
{
    const dispatch = useDispatch();

    const [ rememberMe, setRememberMe ] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        dispatch(loginStart({
            email: data.get('email') as string,
            password: data.get('password') as string,
            remember_me: rememberMe
        }));
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {
                        hasError(authStateError) && (
                            <Alert severity="error" sx={{ my: 1, width: '100%' }}>
                                { getError(authStateError) }
                            </Alert>
                        )
                    }
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={ hasError(authStateError, 'email') }
                        helperText={ getError(authStateError, 'email') }
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={ hasError(authStateError, 'password') }
                        helperText={ getError(authStateError, 'password') }
                    />
                    <FormControlLabel
                        control={<Checkbox 
                            name='remember_me' 
                            value={ false } 
                            color="primary" 
                            onChange={ () => setRememberMe(! rememberMe) }
                        />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ 
                            mt: 3, 
                            mb: 2 
                        }}
                    >
                        {
                            !authState.isLoading
                                ? 'Sign In'
                                : 'Signing in...'
                        }
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    authState: authSelector,
    authStateError: errorSelector
});

export default connect(mapStateToProps)(LoginPage);