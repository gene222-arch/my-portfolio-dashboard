import React from 'react';
import { Box, IconButton, Tooltip, SxProps, CircularProgress } from '@mui/material';
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
    iconButtonStyle?: SxProps,
    loading: boolean
}

const FileUploadButton = ({ inputElementID, onChange, iconButtonStyle, loading }: Prop) => 
{
    return (
        <Box sx={ boxSx }>
            <Tooltip title='Upload Image'>
                <IconButton sx={{ 
                    ...iconButtonSx,
                    ...iconButtonStyle
                }}>
                    <label htmlFor={ inputElementID }>
                        { 
                            loading 
                                ? <CircularProgress sx={ photoIconSx } />
                                : <AddPhotoAlternateIcon sx={ photoIconSx } />
                        }
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
                disabled={ loading }
            />
        </Box>
    )
}

export default FileUploadButton;