import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SaveCancelButtons = () => 
{
    const navigate = useNavigate();

    const handleClickCancel = () => navigate(-1);

    return (
        <div style={{ textAlign: 'right' }}>
            <Button variant="outlined" color='error' sx={{ mr: 1 }} onClick={ handleClickCancel }>
                Cancel
            </Button>
            <Button type='submit' variant="contained" color='success'>
                Submit
            </Button>
        </div>
    );
};

export default SaveCancelButtons;