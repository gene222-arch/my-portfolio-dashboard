import React from 'react';
import { Box, IconButton, Tooltip, SxProps } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const boxSx: SxProps = { 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
};

const iconButtonSx: SxProps = { 
    marginTop: '14vh' 
};

const inputFileStyle: React.CSSProperties = {
    display: 'none'
};

const photoIconSx: SxProps = { 
    fontSize: '3rem', 
    '&:hover': {
        cursor: 'pointer'
    } 
};

interface Prop {
    inputElementID: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    iconButtonStyle?: SxProps
}

const FileUploadButton = ({ inputElementID, onChange, iconButtonStyle }: Prop) => 
{
    return (
        <Box sx={ boxSx }>
            <Tooltip title='Upload Image'>
                <IconButton sx={{ 
                    ...iconButtonSx,
                    ...iconButtonStyle
                }}>
                    <label htmlFor={ inputElementID }>
                        <AddPhotoAlternateIcon sx={ photoIconSx } />
                    </label>
                </IconButton>
            </Tooltip>
            <input
                id={ inputElementID }
                accept='image/*'
                type='file'
                multiple
                style={ inputFileStyle }
                onChange={ onChange }
            />
        </Box>
    )
}

export default FileUploadButton;