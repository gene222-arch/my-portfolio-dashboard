import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, TextField, Button } from '@mui/material';

const TextFields = () => 
{
    const [ isFocusedOnName, setIsFocusedOnName ] = useState(false);
    const [ isFocusedOnEmail, setIsFocusedOnEmail ] = useState(false);
    const [ isFocusedOnContact, setIsFocusedOnContact ] = useState(false);
    const [ isFocusedOnAddress, setIsFocusedOnAddress ] = useState(false);
    const [ isFocusedOnCity, setIsFocusedOnCity ] = useState(false);
    const [ isFocusedOnState, setIsFocusedOnState ] = useState(false);
    const [ isFocusedOnZipCode, setIsFocusedOnZipCode ] = useState(false);
    const [ isFocusedOnCountry, setIsFocusedOnCountry ] = useState(false);
    const [ isFocusedOnPassword, setIsFocusedOnPassword ] = useState(false);

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
                    label='Your Name'
                    value='Gene Phillip D. Artista'
                    variant={ isFocusedOnName ? 'standard' : 'filled' }
                    fullWidth
                    onFocus={ () => setIsFocusedOnName(! isFocusedOnName) }
                    onMouseLeave={ () => setIsFocusedOnName(false) }
                />
            </Grid>
            <Grid item>
                <TextField
                    label='Your Email'
                    value='genephillip222@gmail.com'
                    variant={ isFocusedOnEmail ? 'standard' : 'filled' }
                    fullWidth
                    onFocus={ () => setIsFocusedOnEmail(! isFocusedOnEmail) }
                    onMouseLeave={ () => setIsFocusedOnEmail(false) }
                />
            </Grid>
            <Grid item>
                <TextField
                    label='Contact Number'
                    value='09154082715'
                    variant={ isFocusedOnContact ? 'standard' : 'filled' }
                    fullWidth
                    onFocus={ () => setIsFocusedOnContact(! isFocusedOnContact) }
                    onMouseLeave={ () => setIsFocusedOnContact(false) }
                />
            </Grid>
            <Grid item>
                <TextField
                    label='Address'
                    value='134 Daisy Street, Barangay Lingga'
                    variant={ isFocusedOnAddress ? 'standard' : 'filled' }
                    fullWidth
                    onFocus={ () => setIsFocusedOnAddress(! isFocusedOnAddress) }
                    onMouseLeave={ () => setIsFocusedOnAddress(false) }
                />
            </Grid>
            <Grid item>
                <Grid container spacing={1} justifyContent='space-between'>
                    <Grid item>
                        <TextField
                            label='City'
                            value='Calamba'
                            variant={ isFocusedOnCity ? 'standard' : 'filled' }
                            fullWidth
                            onFocus={ () => setIsFocusedOnCity(! isFocusedOnCity) }
                            onMouseLeave={ () => setIsFocusedOnCity(false) }
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='State'
                            value='Laguna'
                            variant={ isFocusedOnState ? 'standard' : 'filled' }
                            fullWidth
                            onFocus={ () => setIsFocusedOnState(! isFocusedOnState) }
                            onMouseLeave={ () => setIsFocusedOnState(false) }
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container spacing={1} justifyContent='space-between'>
                    <Grid item>
                        <TextField
                            label='Zip Code'
                            value='4027'
                            variant={ isFocusedOnZipCode ? 'standard' : 'filled' }
                            fullWidth
                            onFocus={ () => setIsFocusedOnZipCode(! isFocusedOnZipCode) }
                            onMouseLeave={ () => setIsFocusedOnZipCode(false) }
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Country'
                            value='Philippines'
                            variant={ isFocusedOnCountry ? 'standard' : 'filled' }
                            fullWidth
                            onFocus={ () => setIsFocusedOnCountry(! isFocusedOnCountry) }
                            onMouseLeave={ () => setIsFocusedOnCountry(false) }
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <TextField
                    label='Password'
                    type='password'
                    value='GeneArtista09264774547'
                    variant={ isFocusedOnPassword ? 'standard' : 'filled' }
                    fullWidth
                    onFocus={ () => setIsFocusedOnPassword(! isFocusedOnPassword) }
                    onMouseLeave={ () => setIsFocusedOnPassword(false) }
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

export default TextFields;