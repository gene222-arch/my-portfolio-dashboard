import { GetTestimonialsFailedResponse } from "../../types/states/testimonial/GetTestimonialsFailedResponse";
import { GetTestimonialsSuccessResponse } from "../../types/states/testimonial/GetTestimonialsSuccessResponse";

export const GET_TESTIMONIALS_START = 'GET_TESTIMONIALS_START';
export const GET_TESTIMONIALS_SUCCEEDED = 'GET_TESTIMONIALS_SUCCEEDED';
export const GET_TESTIMONIALS_FAILED = 'GET_TESTIMONIALS_FAILED';

export type ActionType = 
    | { type: undefined }
    | { type: typeof GET_TESTIMONIALS_START }
    | { type: typeof GET_TESTIMONIALS_SUCCEEDED, payload: GetTestimonialsSuccessResponse }
    | { type: typeof GET_TESTIMONIALS_FAILED, payload: GetTestimonialsFailedResponse };