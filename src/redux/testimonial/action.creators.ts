import { GetTestimonialsFailedResponse } from '../../types/states/testimonial/GetTestimonialsFailedResponse';
import { GetTestimonialsSuccessResponse } from '../../types/states/testimonial/GetTestimonialsSuccessResponse';
import { ActionType, GET_TESTIMONIALS_START, GET_TESTIMONIALS_SUCCEEDED, GET_TESTIMONIALS_FAILED } from './action.types';

export const getTestimonialsStart = (): ActionType => ({
    type: GET_TESTIMONIALS_START
});

export const getTestimonialsSucceeded = (payload: GetTestimonialsSuccessResponse): ActionType => ({
    type: GET_TESTIMONIALS_SUCCEEDED,
    payload
});

export const getTestimonialsFailed = (payload: GetTestimonialsFailedResponse): ActionType => ({
    type: GET_TESTIMONIALS_FAILED,
    payload
});