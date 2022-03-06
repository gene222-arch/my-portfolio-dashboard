import { GetTestimonialsFailedResponse } from '../types/states/testimonial/GetTestimonialsFailedResponse';
import { GetTestimonialsSuccessResponse } from '../types/states/testimonial/GetTestimonialsSuccessResponse';
import axiosInstance from '../utils/axiosInstance';

export const getTestimonials = async (): Promise<GetTestimonialsSuccessResponse | GetTestimonialsFailedResponse> => 
{
    return await axiosInstance()
        .get('/testimonials')
        .then((response: { data: GetTestimonialsSuccessResponse }) => response.data)
        .catch((error: { response: { data: GetTestimonialsFailedResponse }}) => Promise.reject(error.response.data))
};