import { TestimonialState } from "../../types/states/testimonial/TestimonialState";
import { 
    ActionType, 
    CREATE_TESTIMONIAL_FAILED, 
    CREATE_TESTIMONIAL_START, 
    CREATE_TESTIMONIAL_SUCCEEDED, 
    GET_TESTIMONIALS_FAILED, 
    GET_TESTIMONIALS_START, 
    GET_TESTIMONIALS_SUCCEEDED 
} from "./action.types";

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
        case CREATE_TESTIMONIAL_START:
        case GET_TESTIMONIALS_START:
            return { 
                ...state, 
                isLoading: true,
                error
            };

        case CREATE_TESTIMONIAL_SUCCEEDED:
            return {
                ...state,
                isLoading,
                error
            };

        case GET_TESTIMONIALS_SUCCEEDED:
            return {
                ...state,
                testimonials: action.payload.data,
                isLoading: false,
                error
            };

        case CREATE_TESTIMONIAL_FAILED:
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
