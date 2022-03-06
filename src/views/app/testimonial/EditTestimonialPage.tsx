import React, { useEffect, useState } from 'react'
import InputFieldSection from '../../../components/testimonial/InputFieldSection';
import { TestimonialItemType, TestimonialState } from '../../../types/states/testimonial/TestimonialState';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { testimonialSelector } from './../../../redux/testimonial/selectors';
import { connect } from 'react-redux';

const defaultTestimonial: TestimonialItemType = {
    name: '',
    body: '',
    profession: '',
    rate: 0
};

interface Prop {
    testimonialState: TestimonialState
}

const EditTestimonialPage = ({ testimonialState }: Prop) => 
{
    const { id } = useParams<string>(); 

    const [ testimonial, setTestimonial ] = useState(defaultTestimonial);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault();
        window.alert('Submitted');
    };

    useEffect(() => {
        if (id) {
            const testimonial_ = testimonialState.testimonials.find(({ id: testimonialID }) => testimonialID === parseInt(id));
            testimonial_ && setTestimonial(testimonial_);
        }
    }, []);

    return (
        <InputFieldSection 
            actionText='Edit'
            testimonial={ testimonial }
            setTestimonial={ setTestimonial }
            onSubmit={ handleOnSubmit }
        />
    );
};

const mapStateToProps = createStructuredSelector({
    testimonialState: testimonialSelector
});

export default connect(mapStateToProps)(EditTestimonialPage);