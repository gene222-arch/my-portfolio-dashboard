import {  
    ProjectState
} from "../../types/states/project";
import { 
    ActionType, 
    CREATE_PROJECT_FAILED, 
    CREATE_PROJECT_START, 
    CREATE_PROJECT_SUCCEEDED, 
    GET_PROJECTS_FAILED, 
    GET_PROJECTS_START, 
    GET_PROJECTS_SUCCEEDED 
} from "./action.types";

const isLoading = false;
const error = undefined;

const initialState: ProjectState = {
    projects: [],
    isLoading,
    error
};

export default (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case CREATE_PROJECT_START:
        case GET_PROJECTS_START:
            return { 
                ...state, 
                isLoading: true,
                error
            };

        case CREATE_PROJECT_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                error
            };

        case GET_PROJECTS_SUCCEEDED:
            return {
                ...state,
                projects: action.payload.data,
                isLoading: false,
                error
            };

        case CREATE_PROJECT_FAILED:
        case GET_PROJECTS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            };

        default:
            return state
    }
};
