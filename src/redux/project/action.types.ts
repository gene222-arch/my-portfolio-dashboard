import { CreateProjectPayload } from "types/states/project/CreateProjectPayload";
import { 
    GetProjectsFailedResponse,
    GetProjectsSuccessResponse,
    CreateProjectSuccessResponse,
    CreateProjectFailedResponse
} from "../../types/states/project";

export const GET_PROJECTS_START = 'GET_PROJECTS_START';
export const GET_PROJECTS_SUCCEEDED = 'GET_PROJECTS_SUCCEEDED';
export const GET_PROJECTS_FAILED = 'GET_PROJECTS_FAILED';
export const CREATE_PROJECT_START = 'CREATE_PROJECT_START';
export const CREATE_PROJECT_SUCCEEDED = 'CREATE_PROJECT_SUCCEEDED';
export const CREATE_PROJECT_FAILED = 'CREATE_PROJECT_FAILED';

export type ActionType = 
    | { type: undefined }
    | { type: typeof CREATE_PROJECT_START, payload: CreateProjectPayload }
    | { type: typeof CREATE_PROJECT_SUCCEEDED, payload: CreateProjectSuccessResponse }
    | { type: typeof CREATE_PROJECT_FAILED, payload: CreateProjectFailedResponse }
    | { type: typeof GET_PROJECTS_START }
    | { type: typeof GET_PROJECTS_SUCCEEDED, payload: GetProjectsSuccessResponse }
    | { type: typeof GET_PROJECTS_FAILED, payload: GetProjectsFailedResponse };