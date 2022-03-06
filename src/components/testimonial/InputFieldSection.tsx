import React from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { TestimonialItemType } from '../../types/states/testimonial/TestimonialState';
import { FormControl, InputLabel, MenuItem, Select, Rating, Button } from '@mui/material';
import SaveCancelButtons from '../SaveCancelButtons';

const professions = [
    'Doctor',
    'Teacher',
    'Web Developer',
    'Programmer',
    'Other'
];

interface Prop {
    actionText: string,
    testimonial: TestimonialItemType,
    setTestimonial: React.Dispatch<React.SetStateAction<TestimonialItemType>>,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const InputFieldSection = ({ actionText, testimonial, setTestimonial, onSubmit }: Prop) => 
{
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
                        value={ testimonial.name }
                    />
                    <FormControl fullWidth>
                        <InputLabel id="select-profession-label">Profession</InputLabel>
                        <Select
                            name='profession'
                            labelId="select-profession-label"
                            label="Profession"
                            onChange={ e => setTestimonial({ ...testimonial, profession: e.target.value }) }
                            value={ !professions.includes(testimonial.profession) ? 'Other' : testimonial.profession }
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
                    </FormControl>
                    {
                        (testimonial.profession === 'Other' || !professions.includes(testimonial.profession)) && (
                            <TextField
                                name='profession'
                                label="Profession"
                                variant="standard"
                                fullWidth
                                sx={{ p: 2, mt: 2 }}
                                onChange={ handleChange }
                                value={ testimonial.profession }
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
                        value={ testimonial.body }
                    />
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } mt={ 10 } sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1" mb={ 1 }>What`s his rating?</Typography>
                    <Rating 
                        value={ testimonial.rate } 
                        precision={ 0.5 } 
                        size='large' 
                        onChange={ (e, value) => 
                            setTestimonial({ ...testimonial, rate: value ?? 0 }) 
                        } 
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <SaveCancelButtons />
                </Grid>
            </Grid>
        </Container>
    );
};

export default InputFieldSection;