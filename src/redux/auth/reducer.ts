import { AuthState } from '../../types/states/auth/AuthState';
import { ActionType, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCEEDED, LOGOUT_FAILED, LOGOUT_START, LOGOUT_SUCCEEDED } from './action.types'

const isLoading = false;
const error = undefined;
const user = {
    id: 0,
    name: '',
    email: ''
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
        case LOGIN_START:
        case LOGOUT_START:
            return { 
                ...state, 
                isLoading: true 
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