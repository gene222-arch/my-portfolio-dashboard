import React, { useState } from 'react'
import InputFieldSection from '../../../components/testimonial/InputFieldSection';
import { TestimonialItemType } from '../../../types/states/testimonial/TestimonialState';
import { useDispatch } from 'react-redux';
import { createTestimonialStart } from '../../../redux/testimonial/action.creators';

const defaultTestimonial: TestimonialItemType = {
    name: '',
    body: '',
    profession: '',
    rate: 0
};

const CreateTestimonialPage = () => 
{
    const dispatch = useDispatch();
    const [ testimonial, setTestimonial ] = useState(defaultTestimonial);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault();
        dispatch(createTestimonialStart(testimonial));
    };

    return (
        <InputFieldSection 
            actionText='Create'
            testimonial={ testimonial }
            setTestimonial={ setTestimonial }
            onSubmit={ handleOnSubmit }
        />
    );
};

export default CreateTestimonialPage;