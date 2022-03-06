import React from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { TestimonialItemType, TestimonialState } from '../../types/states/testimonial/TestimonialState';
import { FormControl, InputLabel, MenuItem, Select, Rating, FormHelperText } from '@mui/material';
import SaveCancelButtons from '../SaveCancelButtons';
import { createStructuredSelector } from 'reselect';
import { testimonialSelector } from './../../redux/testimonial/selectors';
import { connect } from 'react-redux';
import { hasError } from '../../utils/errorHandling';
import { getError } from './../../utils/errorHandling';

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

const InputFieldSection = ({ testimonialState, actionText, testimonial, setTestimonial, onSubmit, isLoading }: Prop) => 
{
    const { error } = testimonialState;
    const {
        name,
        profession,
        body,
        rate
    } = testimonial;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTestimonial({ ...testimonial, [e.target.name]: e.target.value });
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h5" px={ 2 } py={ 3 }>{ actionText } Testimonial</Typography>
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