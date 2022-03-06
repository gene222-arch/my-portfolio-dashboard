import { CreateTestimonialFailedResponse } from '../../types/states/testimonial/CreateTestimonialFailedResponse';
import { CreateTestimonialSuccessResponse } from '../../types/states/testimonial/CreateTestimonialSuccessResponse';
import { GetTestimonialsFailedResponse } from '../../types/states/testimonial/GetTestimonialsFailedResponse';
import { GetTestimonialsSuccessResponse } from '../../types/states/testimonial/GetTestimonialsSuccessResponse';
import { TestimonialItemType } from '../../types/states/testimonial/TestimonialState';
import { 
    ActionType, 
    GET_TESTIMONIALS_START, 
    GET_TESTIMONIALS_SUCCEEDED, 
    GET_TESTIMONIALS_FAILED, 
    CREATE_TESTIMONIAL_SUCCEEDED,
    CREATE_TESTIMONIAL_START,
    CREATE_TESTIMONIAL_FAILED
} from './action.types';

export const createTestimonialStart = (payload: TestimonialItemType): ActionType => ({
    type: CREATE_TESTIMONIAL_START,
    payload
});

export const createTestimonialSucceeded = (payload: CreateTestimonialSuccessResponse): ActionType => ({
    type: CREATE_TESTIMONIAL_SUCCEEDED,
    payload
});

export const createTestimonialFailed = (payload: CreateTestimonialFailedResponse): ActionType => ({
    type: CREATE_TESTIMONIAL_FAILED,
    payload
});

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