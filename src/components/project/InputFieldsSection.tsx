import React from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useState } from 'react';
import FileUploadButton from './FileUploadButton';
import { ProjectItemType } from '../../types/states/project/ProjectState';
import { useNavigate } from 'react-router-dom';
import SaveCancelButtons from '../SaveCancelButtons';

const imgStyle: React.CSSProperties = {
    height: '100%',
    width: '100%',
    cursor: 'pointer'
};

interface Prop {
    actionText: string,
    project: ProjectItemType,
    setProject: React.Dispatch<React.SetStateAction<ProjectItemType>>,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const InputFieldsSection = ({ actionText, project, setProject, onSubmit }: Prop) => 
{
    const navigate = useNavigate();

    const [ mainImage, setMainImage ] = useState<string | null>(null);
    const [ subImages, setSubImages ] = useState<string[]>([]);

    const handleClickCancel = () => navigate(-1);

    const handleChangeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const { files } = e.target;

        if (files)
        {
            if (! files.length) return;
        
            const file = files[0];
            const reader = new FileReader();

            reader.onload = (e: ProgressEvent<FileReader>) => 
            {
                if (e?.target?.result) {
                    setMainImage(e.target.result as string);
                }
            };

            reader.readAsDataURL(file);
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
                        <SaveCancelButtons />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};

export default InputFieldsSection;