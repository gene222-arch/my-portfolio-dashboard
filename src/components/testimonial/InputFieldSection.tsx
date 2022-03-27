import React, { useState } from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { TestimonialItemType, TestimonialState } from 'types/states/testimonial/TestimonialState';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import { FormControl, InputLabel, MenuItem, Select, Rating, FormHelperText, CircularProgress } from '@mui/material';
import SaveCancelButtons from 'components/SaveCancelButtons';
import { createStructuredSelector } from 'reselect';
import { testimonialSelector } from 'redux/testimonial/selectors';
import { connect } from 'react-redux';
import { hasError } from 'utils/errorHandling';
import { getError } from 'utils/errorHandling';
import { UploadAvatarSuccessResponse } from 'types/states/testimonial/UploadAvatarSuccessResponse';
import { uploadAvatar } from 'apis/testimonial';

const professions = [
    'Doctor',
    'Teacher',
    'Web Developer',
    'Programmer',
    'Other'
];

interface Prop {
    testimonialState: TestimonialState,
    actionText: string,
    testimonial: TestimonialItemType,
    setTestimonial: React.Dispatch<React.SetStateAction<TestimonialItemType>>,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    isLoading: boolean
}

const imageStyle: React.CSSProperties = {
    width: '12rem',
    height: '12rem',
    borderRadius: '0.25rem'
};

const InputFieldSection = ({ testimonialState, actionText, testimonial, setTestimonial, onSubmit, isLoading }: Prop) => 
{
    const { error } = testimonialState;
    const {
        name,
        profession,
        body,
        rate
    } = testimonial;

    const [ avatar, setAvatar ] = useState<string | null>(null);
    const [ loading, setLoading ] = useState(false);

    const handleChangeFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setLoading(true);
        try {
            const { files } = e.target;

            if (files)
            {
                if (! files.length) return;
            
                const file = files[0];
                const reader = new FileReader();
    
                reader.onload = (e: ProgressEvent<FileReader>) => 
                {
                    if (e?.target?.result) {
                        setAvatar(e.target.result as string);
                    }
                };

                const fd = new FormData();
                fd.append('avatar', file);
    
                const result: UploadAvatarSuccessResponse = await uploadAvatar(fd);
                
                setTestimonial({
                    ...testimonial,
                    avatar_url: result.data.url
                });

                reader.readAsDataURL(file);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTestimonial({ ...testimonial, [e.target.name]: e.target.value });
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h5" px={ 2 } py={ 3 }>{ actionText } Testimonial</Typography>
            <div style={{ textAlign: 'center', padding: '1rem 0', position: 'relative' }}>
                {
                    loading 
                        ? <CircularProgress sx={{ padding: '6rem 0' }} />
                        :   (
                            !testimonial.avatar_url && !avatar
                                ? <img 
                                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" 
                                    style={ imageStyle }
                                />
                                : <img 
                                    src={ avatar || testimonial.avatar_url }
                                    style={ imageStyle } 
                                />
                        )
                }
                <label htmlFor='file-upload'>
                    <ModeEditOutlineRoundedIcon 
                        sx={{ 
                            position: 'absolute',
                            bottom: 20,
                            '&:hover': {
                                cursor: 'pointer',
                                color: '#DDDDDD'
                            }
                        }}
                    />
                </label>
                <input 
                    type='file'
                    style={{ display: 'none' }}
                    id='file-upload'
                    accept='image/*'
                    onChange={ handleChangeFileUpload }
                />
                
                
            </div>
            <Grid container spacing={ 3 } component='form' noValidate onSubmit={ onSubmit }>
                <Grid item xs={ 12 } sm={ 6 }>
                    <TextField
                        name='name'
                        label="Name"
                        variant="filled"
                        fullWidth
                        sx={{ mb: 3 }}
                        onChange={ handleChange }
                        value={ name }
                        error={ hasError(error, 'name') }
                        helperText={ getError(error, 'name') }
                    />
                    <FormControl fullWidth>
                        <InputLabel id="select-profession-label">Profession</InputLabel>
                        <Select
                            name='profession'
                            labelId="select-profession-label"
                            label="Profession"
                            onChange={ e => setTestimonial({ ...testimonial, profession: e.target.value }) }
                            value={ (!professions.includes(profession) && profession) ? 'Other' : profession }
                            error={ hasError(error, 'profession') }
                        >
                            {
                                professions.map((profession, index) => 
                                (
                                    <MenuItem 
                                        key={ index } 
                                        value={ profession }
                                    >
                                        { profession }
                                    </MenuItem>
                                ))
                            }
                        </Select>
                        <FormHelperText error={ hasError(error, 'profession') }>{ getError(error, 'profession') }</FormHelperText>
                    </FormControl>
                    {
                        (
                            profession &&
                            (profession === 'Other' || !professions.includes(profession))
                        ) && (
                            <TextField
                                name='profession'
                                label="Profession"
                                variant="standard"
                                fullWidth
                                sx={{ p: 2, mt: 2 }}
                                onChange={ handleChange }
                                value={ profession }
                                error={ hasError(error, 'profession') }
                                helperText={ getError(error, 'profession') }
                            />
                        )
                    }
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                    <TextField
                        name='body'
                        label="What does he say about your work?"
                        variant="filled"
                        fullWidth
                        multiline
                        rows={ 9 }
                        onChange={ handleChange }
                        value={ body }
                        error={ hasError(error, 'body') }
                        helperText={ getError(error, 'body') }
                    />
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } mt={ 10 } sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1" mb={ 1 }>What`s his rating?</Typography>
                    <Rating 
                        value={ rate } 
                        precision={ 0.5 } 
                        size='large' 
                        onChange={ (e, value) => 
                            setTestimonial({ ...testimonial, rate: value ?? 0 }) 
                        }
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <SaveCancelButtons isLoading={ isLoading } />
                </Grid>
            </Grid>
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    testimonialState: testimonialSelector
});

export default connect(mapStateToProps)(InputFieldSection);