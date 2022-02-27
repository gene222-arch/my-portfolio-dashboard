import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, TextField, Button } from '@mui/material';
import { createStructuredSelector } from 'reselect';
import { userSelector } from './../../redux/auth/selectors';
import { connect } from 'react-redux';
import { User } from '../../types/states/auth/User';

interface Prop {
    userState: User
}

const TextFields = ({ userState }: Prop) => 
{
    const [ user, setUser ] = useState<User>(userState);

    const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value    
        });
    };

    const handleChangeDetails = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    {
        const { name, value } = e.target;

        setUser({
            ...user,
            details: {
                phone_number: value
            }
        });
    };

    const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    {
        const { name, value } = e.target;

        setUser({
            ...user,
            address: {
                ...user.address,
                [name]: value
            }
        });
    };

    return (
        <Grid container spacing={5} flexDirection='column'>
            <Grid item mb={ 3 } alignSelf='center'>
                <Avatar 
                    src='https://lh3.googleusercontent.com/a-/AOh14GjadbdV2JKNdcezBImnnb-M-JdSEcrY5dZsN42Z=s360-p-rw-no'
                    sx={{ width: '10rem', height: '10rem' }} 
                />
            </Grid>
            <Grid item>
                <TextField
                    name='name'
                    label='Your Name'
                    variant='filled'
                    fullWidth
                    value={ user.name }
                    onChange={ handleChangeUser }
                />  
            </Grid>
            <Grid item>
                <TextField
                    name='email'
                    label='Your Email'
                    value={ user.email }
                    variant='filled'
                    fullWidth
                    onChange={ handleChangeUser }
                />
            </Grid>
            <Grid item>
                <TextField
                    name='phone_number'
                    label='Contact Number'
                    value={ user.details?.phone_number }
                    variant='filled'    
                    fullWidth
                    onChange={ handleChangeDetails }
                />
            </Grid>
            <Grid item>
                <TextField
                    name='address'
                    label='Address'
                    value={ user.address?.address }
                    variant='filled'
                    fullWidth
                    onChange={ handleChangeUser }
                />
            </Grid>
            <Grid item>
                <Grid container spacing={1} justifyContent='space-between'>
                    <Grid item>
                        <TextField
                            name='city'
                            label='City'
                            value={ user.address?.city }
                            variant='filled'
                            fullWidth
                            onChange={ handleChangeAddress }
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name='state'
                            label='State'
                            value={ user.address?.state }
                            variant='filled'
                            fullWidth
                            onChange={ handleChangeAddress }
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container spacing={1} justifyContent='space-between'>
                    <Grid item>
                        <TextField
                            name='zip_code'
                            label='Zip Code'
                            value={ user.address?.zip_code }
                            variant='filled'
                            fullWidth
                            onChange={ handleChangeAddress }
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name='country'
                            label='Country'
                            value={ user.address?.country }
                            variant='filled'
                            fullWidth
                            onChange={ handleChangeAddress }
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <TextField
                    label='Password'
                    type='password'
                    value='GeneArtista09264774547'
                    variant='filled'
                    fullWidth
                />
            </Grid>
            <Grid item>
                <Button variant="contained">
                    Save
                </Button>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    userState: userSelector
});

export default connect(mapStateToProps)(TextFields);