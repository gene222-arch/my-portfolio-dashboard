import React, { useState } from 'react'
import InputFieldSection from '../../../components/testimonial/InputFieldSection';
import { TestimonialItemType, TestimonialState } from '../../../types/states/testimonial/TestimonialState';
import { useDispatch, connect } from 'react-redux';
import { createTestimonialStart } from '../../../redux/testimonial/action.creators';
import { createStructuredSelector } from 'reselect';
import { testimonialSelector } from './../../../redux/testimonial/selectors';

const defaultTestimonial: TestimonialItemType = {
    name: '',
    avatar_url: '',
    body: '',
    profession: '',
    rate: 0,
    id: 0
};

interface Prop {
    testimonialState: TestimonialState
}

const CreateTestimonialPage = ({ testimonialState }: Prop) => 
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
            isLoading={ testimonialState.isLoading }
        />
    );
};

const mapStateToProps = createStructuredSelector({
    testimonialState: testimonialSelector
});

export default connect(mapStateToProps)(CreateTestimonialPage);