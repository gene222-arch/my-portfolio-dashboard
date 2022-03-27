import { EmailState } from "types/states/email/EmailState";
import { ActionType, GET_EMAILS_FAILED, GET_EMAILS_START, GET_EMAILS_SUCCEEDED } from "./action.types";

const isLoading = false;
const error = undefined;

const initialState: EmailState = {
    emails: [],
    isLoading,
    error
};

export default (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case GET_EMAILS_START:
            return { 
                ...state, 
                isLoading: true,
                error
            };

        case GET_EMAILS_SUCCEEDED:
            return {
                ...state,
                emails: action.payload.data,
                isLoading: false,
                error
            };

        case GET_EMAILS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            };

        default:
            return state
    }
};
