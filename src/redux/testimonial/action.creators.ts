import { 
    CreateTestimonialFailedResponse,
    CreateTestimonialSuccessResponse,
    DeleteTestimonialsFailedResponse,
    DeleteTestimonialsPayload,
    DeleteTestimonialsSuccessResponse,
    GetTestimonialsFailedResponse,
    GetTestimonialsSuccessResponse,
    TestimonialItemType,
} from 'types/states/testimonial';
import { 
    ActionType, 
    GET_TESTIMONIALS_START, 
    GET_TESTIMONIALS_SUCCEEDED, 
    GET_TESTIMONIALS_FAILED, 
    CREATE_TESTIMONIAL_SUCCEEDED,
    CREATE_TESTIMONIAL_START,
    CREATE_TESTIMONIAL_FAILED,
    EDIT_TESTIMONIAL_START,
    EDIT_TESTIMONIAL_SUCCEEDED,
    EDIT_TESTIMONIAL_FAILED,
    DELETE_TESTIMONIALS_START,
    DELETE_TESTIMONIALS_SUCCEEDED,
    DELETE_TESTIMONIALS_FAILED
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

export const deleteTestimonialsStart = (payload: DeleteTestimonialsPayload): ActionType => ({
    type: DELETE_TESTIMONIALS_START,
    payload
});

export const deleteTestimonialsSucceeded = (payload: DeleteTestimonialsPayload): ActionType => ({
    type: DELETE_TESTIMONIALS_SUCCEEDED,
    payload
});

export const deleteTestimonialsFailed = (payload: DeleteTestimonialsFailedResponse): ActionType => ({
    type: DELETE_TESTIMONIALS_FAILED,
    payload
});

export const editTestimonialStart = (payload: TestimonialItemType): ActionType => ({
    type: EDIT_TESTIMONIAL_START,
    payload
});

export const editTestimonialSucceeded = (payload: CreateTestimonialSuccessResponse): ActionType => ({
    type: EDIT_TESTIMONIAL_SUCCEEDED,
    payload
});

export const editTestimonialFailed = (payload: CreateTestimonialFailedResponse): ActionType => ({
    type: EDIT_TESTIMONIAL_FAILED,
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