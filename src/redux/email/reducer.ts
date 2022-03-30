import { EmailState } from "types/states/email/EmailState";
import { 
    ActionType, 
    DESTROY_EMAILS_START, 
    DESTROY_EMAILS_SUCCEEDED, 
    GET_EMAILS_FAILED, 
    GET_EMAILS_START, 
    GET_EMAILS_SUCCEEDED, 
    RESTORE_EMAILS_FAILED, 
    RESTORE_EMAILS_START,
    RESTORE_EMAILS_SUCCEEDED
} from "./action.types";
import { destroyEmails } from "./utils";

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
        case DESTROY_EMAILS_START:
        case GET_EMAILS_START:
        case RESTORE_EMAILS_START:
            return { 
                ...state, 
                isLoading: true,
                error
            };

        case DESTROY_EMAILS_SUCCEEDED:
            return {
                ...state,
                emails: destroyEmails(state.emails, action.payload.ids),
                isLoading: false,
                error
            };
        
        case GET_EMAILS_SUCCEEDED:
            return {
                ...state,
                emails: action.payload.data,
                isLoading: false,
                error
            };

        case RESTORE_EMAILS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                error
            };

        case GET_EMAILS_FAILED:
        case RESTORE_EMAILS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            };

        default:
            return state
    }
};
