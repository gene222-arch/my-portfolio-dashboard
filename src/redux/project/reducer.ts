import { ProjectState } from "../../types/states/project/ProjectState";
import { ActionType, GET_PROJECTS_FAILED, GET_PROJECTS_START, GET_PROJECTS_SUCCEEDED } from "./action.types";

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
        case GET_PROJECTS_START:
            return { 
                ...state, 
                isLoading: true,
                error
            };

        case GET_PROJECTS_SUCCEEDED:
            return {
                ...state,
                projects: action.payload.data,
                isLoading: false,
                error
            };

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
