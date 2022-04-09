import React, { useState } from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Card, CardContent, Typography, Box, FormHelperText, SxProps } from '@mui/material';
import FileUploadButton from './FileUploadButton';
import { ProjectState } from 'types/states/project/ProjectState';
import SaveCancelButtons from '../SaveCancelButtons';
import CloseIcon from '@mui/icons-material/Close';
import { getError, hasError } from 'utils/errorHandling';
import { createStructuredSelector } from 'reselect';
import { projectSelector } from 'redux/project/selectors';
import { connect } from 'react-redux';
import { CreateProjectPayload, UpdateProjectPayload, UploadFileSuccessResponse } from 'types/states/project';
import * as API from 'apis/project';

const imgStyle: React.CSSProperties = {
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    borderRadius: '0.5rem'
};

const closeIconSx: SxProps = { 
    position: 'absolute',
    right: 5,
    top: 15,
    '&:hover': {
        color: 'tomato',
        cursor: 'pointer'
    }
};


interface Prop<T> {
    projectState: ProjectState,
    actionText: string,
    project: T,
    setProject: React.Dispatch<React.SetStateAction<T>>,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    isLoading: boolean
}

const InputFieldsSection = <T extends CreateProjectPayload | UpdateProjectPayload> 
({ 
    projectState: { error }, 
    actionText, 
    project, 
    setProject, 
    onSubmit, 
    isLoading 
}: Prop<T>) => 
{
    const [ isMainImageUploading, setIsMainImageUploading ] = useState(false);
    const [ isSubImageUploading, setIsSubImageUploading ] = useState(false);

    const handleChangeFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setIsMainImageUploading(true);
        const { files } = e.target;

        if (files)
        {
            if (! files.length) return;
        
            try {
                const file = files[0];
                
                const fd = new FormData();
                fd.set('image', file);

                const result: UploadFileSuccessResponse = await API.upload(fd);

                if (result.status === 'success')
                {
                    setProject({
                        ...project,
                        image_url: result.data.url
                    });
                } 
            } catch (error) {
                console.log(error);
            }
        }

        setIsMainImageUploading(false);
    };

    const handleMultipleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => 
    {
        setIsSubImageUploading(true);
        const { files } = e.target;

        if (files)
        {
            if (! files.length) return;

            try {
                Object.keys(files).map(async (key) => 
                {
                    const file = files[parseInt(key)];
                    const fd = new FormData();
                    fd.set('image', file);
    
                    const result: UploadFileSuccessResponse = await API.upload(fd);
    
                    if (result.status === 'success')
                    {
                        setProject({
                            ...project,
                            sub_image_urls: [
                                ...project.sub_image_urls,
                                result.data.url
                            ]
                        });
                    } 
                });
            } catch (error) {
                console.log(error);
            }
        }

        setIsSubImageUploading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setProject({ ...project, [e.target.name]: e.target.value });

    const handleRemoveSubImage = (imageUrl: string) => 
    {
        setProject({
            ...project,
            sub_image_urls: project.sub_image_urls.filter(img => img !== imageUrl)
        });
    }

    return (
        <Container maxWidth="lg">
            <Typography variant="h5" px={ 2 } py={ 3 }>{ actionText } Project</Typography>
            <Box component='form' noValidate onSubmit={ onSubmit }>
                <Grid container spacing={ 3 }>
                    <Grid item xs={ 12 } sm={ 4 }>
                        <TextField
                            name='title'
                            placeholder='Your Title'
                            fullWidth
                            variant='filled'
                            onChange={ handleChange }
                            value={ project.title }
                            error={ hasError(error, 'title') }
                            helperText={ getError(error, 'title') }
                        />
                        <TextField
                            name='description'
                            placeholder='Project Description'
                            fullWidth
                            variant='filled'
                            sx={{ mt: 2.5 }}
                            multiline
                            rows={ 9 }
                            onChange={ handleChange }
                            value={ project.description }
                            error={ hasError(error, 'description') }
                            helperText={ getError(error, 'description') }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 8 }>
                        <Card sx={{ height: '40vh' }}>
                            <CardContent sx={{ height: '100%', position: 'relative' }}>
                                { 
                                    <FileUploadButton 
                                        inputElementID='main_image' 
                                        onChange={ handleChangeFileUpload } 
                                        iconButtonStyle={{ 
                                            position: 'absolute',
                                            top: 13
                                        }}
                                        loading={ isMainImageUploading }
                                    />
                                }
                                { 
                                    project.image_url && (
                                        <label htmlFor='main_image'>
                                            <img src={ project.image_url } style={ imgStyle } alt='Change Image' />
                                        </label>
                                    )
                                }
                                <FormHelperText 
                                    error={ hasError(error, 'image_url') }
                                    sx={{ textAlign: 'center' }}
                                >
                                    { getError(error, 'image_url') }
                                </FormHelperText>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 }>
                        <TextField
                            name='website_url'
                            placeholder='Website: e.g: https://project-1.com'
                            fullWidth
                            variant='filled'
                            onChange={ handleChange }
                            value={ project?.website_url || '' }
                            error={ hasError(error, 'website_url') }
                            helperText={ getError(error, 'website_url') }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 }>
                        <TextField
                            name='client_feedback'
                            placeholder='What does the client say?'
                            fullWidth
                            variant='filled'
                            multiline
                            rows={ 5 }
                            onChange={ handleChange }
                            value={ project.client_feedback }
                            error={ hasError(error, 'client_feedback') }
                            helperText={ getError(error, 'client_feedback') }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 }>
                        <Card>
                            <CardContent>
                                <FileUploadButton 
                                    inputElementID='sub_image'
                                    onChange={ handleMultipleFileUpload }
                                    iconButtonStyle={{ marginTop: 0 }}
                                    loading={ isSubImageUploading }
                                />
                            </CardContent>
                        </Card>
                        <Card sx={{ mt: 1 }}>
                            <CardContent>
                                <Grid container spacing={1} alignItems='center'>
                                {
                                    Boolean(project.sub_image_urls.length) 
                                    ? (
                                        project.sub_image_urls.map((img, index) => 
                                            <Grid xs={ 12 } sm={ 6 } md={ 3 } key={ index } item sx={{ position: 'relative' }}>
                                                <img 
                                                    key={ index } 
                                                    src={ img }
                                                    style={ imgStyle }
                                                />
                                                <CloseIcon onClick={ () => handleRemoveSubImage(img) } sx={ closeIconSx }/>
                                            </Grid>
                                        )
                                    )
                                    : (
                                        <Grid item xs={ 12 } sx={{ textAlign: 'center' }}>
                                            <Typography 
                                                variant='subtitle2' 
                                                color='GrayText'
                                            >
                                                Images displayed here
                                            </Typography>
                                        </Grid>
                                    )
                                }
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 }>
                        <SaveCancelButtons isLoading={ isLoading } />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};

const mapStateToProps = createStructuredSelector({
    projectState: projectSelector
});

export default connect(mapStateToProps)(InputFieldsSection);