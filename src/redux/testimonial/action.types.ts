import { CreateTestimonialFailedResponse } from "../../types/states/testimonial/CreateTestimonialFailedResponse";
import { CreateTestimonialSuccessResponse } from "../../types/states/testimonial/CreateTestimonialSuccessResponse";
import { EditTestimonialFailedResponse } from "../../types/states/testimonial/EditTestimonialFailedResponse";
import { EditTestimonialSuccessResponse } from "../../types/states/testimonial/EditTestimonialSuccessResponse";
import { GetTestimonialsFailedResponse } from "../../types/states/testimonial/GetTestimonialsFailedResponse";
import { GetTestimonialsSuccessResponse } from "../../types/states/testimonial/GetTestimonialsSuccessResponse";
import { TestimonialItemType } from "../../types/states/testimonial/TestimonialState";

export const GET_TESTIMONIALS_START = 'GET_TESTIMONIALS_START';
export const GET_TESTIMONIALS_SUCCEEDED = 'GET_TESTIMONIALS_SUCCEEDED';
export const GET_TESTIMONIALS_FAILED = 'GET_TESTIMONIALS_FAILED';
export const CREATE_TESTIMONIAL_START = 'CREATE_TESTIMONIAL_START';
export const CREATE_TESTIMONIAL_SUCCEEDED = 'CREATE_TESTIMONIAL_SUCCEEDED';
export const CREATE_TESTIMONIAL_FAILED = 'CREATE_TESTIMONIAL_FAILED';
export const EDIT_TESTIMONIAL_START = 'EDIT_TESTIMONIAL_START';
export const EDIT_TESTIMONIAL_SUCCEEDED = 'EDIT_TESTIMONIAL_SUCCEEDED';
export const EDIT_TESTIMONIAL_FAILED = 'EDIT_TESTIMONIAL_FAILED';

export type ActionType = 
    | { type: undefined }
    | { type: typeof CREATE_TESTIMONIAL_START, payload: TestimonialItemType }
    | { type: typeof CREATE_TESTIMONIAL_SUCCEEDED, payload: CreateTestimonialSuccessResponse }
    | { type: typeof CREATE_TESTIMONIAL_FAILED, payload: CreateTestimonialFailedResponse }
    | { type: typeof EDIT_TESTIMONIAL_START, payload: TestimonialItemType }
    | { type: typeof EDIT_TESTIMONIAL_SUCCEEDED, payload: EditTestimonialSuccessResponse }
    | { type: typeof EDIT_TESTIMONIAL_FAILED, payload: EditTestimonialFailedResponse }
    | { type: typeof GET_TESTIMONIALS_START }
    | { type: typeof GET_TESTIMONIALS_SUCCEEDED, payload: GetTestimonialsSuccessResponse }
    | { type: typeof GET_TESTIMONIALS_FAILED, payload: GetTestimonialsFailedResponse };