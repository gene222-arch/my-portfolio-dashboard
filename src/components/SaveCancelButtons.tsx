import React from 'react'
import { Button, CircularProgress, SxProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const buttonSx: SxProps = {
    width: '6rem',
    height: '2.5rem'
};

interface Prop {
    isLoading: boolean
}

const SaveCancelButtons = ({ isLoading }: Prop) => 
{
    const navigate = useNavigate();

    const handleClickCancel = () => navigate(-1);

    return (
        <div style={{ textAlign: 'right' }}>
            <Button 
                variant="outlined" 
                color='error' 
                sx={{ mr: 1, ...buttonSx }} 
                onClick={ handleClickCancel } 
                disabled={ isLoading }
            >
                Cancel
            </Button>
            <Button 
                type='submit' 
                variant="contained" 
                color='success' 
                disabled={ isLoading }
                sx={ buttonSx }
            >
                { isLoading ? <CircularProgress size={ 20 } /> : 'Submit' }
            </Button>
        </div>
    );
};

export default SaveCancelButtons;