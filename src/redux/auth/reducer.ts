import { AuthState } from '../../types/states/auth/AuthState';
import { User } from '../../types/states/auth/User';
import { ActionType, GET_ACCOUNT_DETAILS_FAILED, GET_ACCOUNT_DETAILS_START, GET_ACCOUNT_DETAILS_SUCCEEDED, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCEEDED, LOGOUT_FAILED, LOGOUT_START, LOGOUT_SUCCEEDED } from './action.types'

const isLoading = false;
const error = undefined;
const user: User = {
    id: 0,
    name: '',
    email: '',
    address: {
        address: '',
        city: '',
        state: '',
        zip_code: 0,
        country: ''
    },
    details: {
        phone_number: ''
    },
    social_media_accounts: {
        id: 0,
        user_id: 0,
        name: '',
        email: '',
        url: ''
    }
};

const initialState: AuthState = {
    user,
    isAuthenticated: false,
    isLoading,
    error
};

const reducer = (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case GET_ACCOUNT_DETAILS_START:
        case LOGIN_START:
        case LOGOUT_START:
            return { 
                ...state, 
                isLoading: true 
            };

        case GET_ACCOUNT_DETAILS_SUCCEEDED:
            return {
                ...state,
                user: action.payload.data
            };

        case LOGIN_SUCCEEDED:
            return {
                ...state,
                user: action.payload.data.data,
                isAuthenticated: true,
                isLoading,
                error
            }; 

        case LOGOUT_SUCCEEDED:
            return {
                ...state,
                user,
                isAuthenticated: false,
                isLoading,
                error
            };

        case GET_ACCOUNT_DETAILS_FAILED:
        case LOGIN_FAILED:
        case LOGOUT_FAILED:
            return {
                ...state,
                isLoading,
                error: action.payload.message
            };

        default:
            return state
    }
};

export default reducer;