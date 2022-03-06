import React, { useState } from 'react'
import InputFieldSection from '../../../components/testimonial/InputFieldSection';
import { TestimonialItemType } from '../../../types/states/testimonial/TestimonialState';

const defaultTestimonial: TestimonialItemType = {
    name: '',
    body: '',
    profession: '',
    rate: 0
};

const CreateTestimonialPage = () => 
{
    const [ testimonial, setTestimonial ] = useState(defaultTestimonial);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault();
        window.alert('Submitted');
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