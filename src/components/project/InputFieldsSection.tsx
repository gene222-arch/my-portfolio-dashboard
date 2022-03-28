import React from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Card, CardContent, Typography, Box, FormHelperText } from '@mui/material';
import { useState } from 'react';
import FileUploadButton from './FileUploadButton';
import { ProjectState } from 'types/states/project/ProjectState';
import SaveCancelButtons from '../SaveCancelButtons';
import { getError, hasError } from 'utils/errorHandling';
import { createStructuredSelector } from 'reselect';
import { projectSelector } from 'redux/project/selectors';
import { connect } from 'react-redux';
import { CreateProjectPayload, UploadFileSuccessResponse } from 'types/states/project';
import * as API from 'apis/project';

const imgStyle: React.CSSProperties = {
    height: '100%',
    width: '100%',
    cursor: 'pointer'
};

interface Prop {
    projectState: ProjectState,
    actionText: string,
    project: CreateProjectPayload,
    setProject: React.Dispatch<React.SetStateAction<CreateProjectPayload>>,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    isLoading: boolean
}

const InputFieldsSection = ({ projectState: { error }, actionText, project, setProject, onSubmit, isLoading }: Prop) => 
{
    const [ mainImage, setMainImage ] = useState<string | null>(null);
    const [ subImages, setSubImages ] = useState<string[]>([]);

    const handleChangeFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) =>
    {
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
                    const reader = new FileReader();
    
                    reader.onload = (e: ProgressEvent<FileReader>) => 
                    {
                        if (e?.target?.result) {
                            setMainImage(e.target.result as string);
                        }
                    };
        
                    reader.readAsDataURL(file);
                } 
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleMultipleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => 
    {
        const { files } = e.target;

        if (files)
        {
            if (! files.length) return;

            Object.keys(files).map(key => 
            {
                const file = files[parseInt(key)];
                const reader = new FileReader();

                reader.onload = (e: ProgressEvent<FileReader>) => 
                {
                    if (e?.target?.result) {
                        setSubImages([ ...subImages, e.target.result as string ]);
                    }
                };

                reader.readAsDataURL(file);
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setProject({ ...project, [e.target.name]: e.target.value });

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
                            <CardContent>
                                { 
                                    !mainImage && (
                                        <FileUploadButton 
                                            inputElementID='main_image' 
                                            onChange={ handleChangeFileUpload } 
                                        />
                                    )
                                }
                                { 
                                    mainImage && (
                                        <label htmlFor='main_image'>
                                            <img src={ mainImage } style={ imgStyle } alt='Change Image' />
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
                                />
                                {
                                    Boolean(subImages.length) && (
                                        subImages.map((img, index) => 
                                            <img 
                                                key={ index } 
                                                src={ img } 
                                                width={ 100 } 
                                                height={ 100 } 
                                            />
                                        )
                                    )
                                }
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