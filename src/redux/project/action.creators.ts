import { 
    CreateProjectPayload, 
    GetProjectsSuccessResponse, 
    GetProjectsFailedResponse,
    CreateProjectSuccessResponse,
    CreateProjectFailedResponse,
    UpdateProjectPayload,
    UpdateProjectSuccessResponse,
    UpdateProjectFailedResponse,
    DestroyProjectsPayload,
    DestroyProjectsFailedResponse
} from 'types/states/project';
import { 
    ActionType, 
    GET_PROJECTS_START, 
    GET_PROJECTS_SUCCEEDED, 
    GET_PROJECTS_FAILED, 
    CREATE_PROJECT_START, 
    CREATE_PROJECT_SUCCEEDED, 
    CREATE_PROJECT_FAILED, 
    UPDATE_PROJECT_START,
    UPDATE_PROJECT_SUCCEEDED,
    UPDATE_PROJECT_FAILED,
    DESTROY_PROJECTS_START,
    DESTROY_PROJECTS_SUCCEEDED,
    DESTROY_PROJECTS_FAILED
} from './action.types';

export const createProjectStart = (payload: CreateProjectPayload): ActionType => ({
    type: CREATE_PROJECT_START,
    payload
});

export const createProjectSucceeded = (payload: CreateProjectSuccessResponse): ActionType => ({
    type: CREATE_PROJECT_SUCCEEDED,
    payload
});

export const createProjectFailed = (payload: CreateProjectFailedResponse): ActionType => ({
    type: CREATE_PROJECT_FAILED,
    payload
});

export const destroyProjectsStart = (payload: DestroyProjectsPayload): ActionType => ({
    type: DESTROY_PROJECTS_START,
    payload
});

export const destroyProjectsSucceeded = (payload: DestroyProjectsPayload): ActionType => ({
    type: DESTROY_PROJECTS_SUCCEEDED,
    payload
});

export const destroyProjectsFailed = (payload: DestroyProjectsFailedResponse): ActionType => ({
    type: DESTROY_PROJECTS_FAILED,
    payload
});

export const getProjectsStart = (): ActionType => ({
    type: GET_PROJECTS_START
});

export const getProjectsSucceeded = (payload: GetProjectsSuccessResponse): ActionType => ({
    type: GET_PROJECTS_SUCCEEDED,
    payload
});

export const getProjectsFailed = (payload: GetProjectsFailedResponse): ActionType => ({
    type: GET_PROJECTS_FAILED,
    payload
});

export const updateProjectStart = (payload: UpdateProjectPayload): ActionType => ({
    type: UPDATE_PROJECT_START,
    payload
});

export const updateProjectSucceeded = (payload: UpdateProjectSuccessResponse): ActionType => ({
    type: UPDATE_PROJECT_SUCCEEDED,
    payload
});

export const updateProjectFailed = (payload: UpdateProjectFailedResponse): ActionType => ({
    type: UPDATE_PROJECT_FAILED,
    payload
});