import { TestimonialState } from "../../types/states/testimonial/TestimonialState";
import { ActionType, GET_TESTIMONIALS_FAILED, GET_TESTIMONIALS_START, GET_TESTIMONIALS_SUCCEEDED } from "./action.types";

const isLoading = false;
const error = undefined;

const initialState: TestimonialState = {
    testimonials: [],
    isLoading,
    error
};

export default (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case GET_TESTIMONIALS_START:
            return { 
                ...state, 
                isLoading: true,
                error
            };

        case GET_TESTIMONIALS_SUCCEEDED:
            return {
                ...state,
                testimonials: action.payload.data,
                isLoading: false,
                error
            };

        case GET_TESTIMONIALS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            };

        default:
            return state
    }
};
