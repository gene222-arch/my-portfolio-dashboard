import { 
    GetProjectsFailedResponse,
    GetProjectsSuccessResponse,
    CreateProjectPayload,
    CreateProjectSuccessResponse,
    CreateProjectFailedResponse,
    UpdateProjectPayload,
    UpdateProjectSuccessResponse,
    UpdateProjectFailedResponse,
    DestroyProjectsPayload,
    DestroyProjectsFailedResponse
} from "types/states/project";

export const DESTROY_PROJECTS_START = 'DESTROY_PROJECTS_START';
export const DESTROY_PROJECTS_SUCCEEDED = 'DESTROY_PROJECTS_SUCCEEDED';
export const DESTROY_PROJECTS_FAILED = 'DESTROY_PROJECTS_FAILED';
export const GET_PROJECTS_START = 'GET_PROJECTS_START';
export const GET_PROJECTS_SUCCEEDED = 'GET_PROJECTS_SUCCEEDED';
export const GET_PROJECTS_FAILED = 'GET_PROJECTS_FAILED';
export const CREATE_PROJECT_START = 'CREATE_PROJECT_START';
export const CREATE_PROJECT_SUCCEEDED = 'CREATE_PROJECT_SUCCEEDED';
export const CREATE_PROJECT_FAILED = 'CREATE_PROJECT_FAILED';
export const UPDATE_PROJECT_START = 'UPDATE_PROJECT_START';
export const UPDATE_PROJECT_SUCCEEDED = 'UPDATE_PROJECT_SUCCEEDED';
export const UPDATE_PROJECT_FAILED = 'UPDATE_PROJECT_FAILED';

export type ActionType = 
    | { type: undefined }
    | { type: typeof CREATE_PROJECT_START, payload: CreateProjectPayload }
    | { type: typeof CREATE_PROJECT_SUCCEEDED, payload: CreateProjectSuccessResponse }
    | { type: typeof CREATE_PROJECT_FAILED, payload: CreateProjectFailedResponse }
    | { type: typeof DESTROY_PROJECTS_START, payload: DestroyProjectsPayload }
    | { type: typeof DESTROY_PROJECTS_SUCCEEDED, payload: DestroyProjectsPayload }
    | { type: typeof DESTROY_PROJECTS_FAILED, payload: DestroyProjectsFailedResponse }
    | { type: typeof GET_PROJECTS_START }
    | { type: typeof GET_PROJECTS_SUCCEEDED, payload: GetProjectsSuccessResponse }
    | { type: typeof GET_PROJECTS_FAILED, payload: GetProjectsFailedResponse }
    | { type: typeof UPDATE_PROJECT_START, payload: UpdateProjectPayload }
    | { type: typeof UPDATE_PROJECT_SUCCEEDED, payload: UpdateProjectSuccessResponse }
    | { type: typeof UPDATE_PROJECT_FAILED, payload: UpdateProjectFailedResponse };