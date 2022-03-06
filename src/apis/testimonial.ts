import { GetTestimonialsFailedResponse } from '../types/states/testimonial/GetTestimonialsFailedResponse';
import { GetTestimonialsSuccessResponse } from '../types/states/testimonial/GetTestimonialsSuccessResponse';
import { CreateTestimonialFailedResponse } from '../types/states/testimonial/CreateTestimonialFailedResponse';
import { CreateTestimonialSuccessResponse } from '../types/states/testimonial/CreateTestimonialSuccessResponse';
import axiosInstance from '../utils/axiosInstance';
import { TestimonialItemType } from '../types/states/testimonial/TestimonialState';

export const getTestimonials = async (): Promise<GetTestimonialsSuccessResponse | GetTestimonialsFailedResponse> => 
{
    return await axiosInstance()
        .get('/testimonials')
        .then((response: { data: GetTestimonialsSuccessResponse }) => response.data)
        .catch((error: { response: { data: GetTestimonialsFailedResponse }}) => Promise.reject(error.response.data))
};

export const store = async (payload: TestimonialItemType): Promise<CreateTestimonialSuccessResponse | CreateTestimonialFailedResponse> => 
{
    return await axiosInstance()
        .post('/testimonials', payload)
        .then((response: { data: CreateTestimonialFailedResponse }) => response.data)
        .catch((error: { response: { data: CreateTestimonialSuccessResponse }}) => Promise.reject(error.response.data))
};