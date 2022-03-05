import { GetProjectsFailedResponse } from "../../types/states/project/GetProjectsFailedResponse";
import { GetProjectsSuccessResponse } from "../../types/states/project/GetProjectsSuccessResponse";

export const GET_PROJECTS_START = 'GET_PROJECTS_START';
export const GET_PROJECTS_SUCCEEDED = 'GET_PROJECTS_SUCCEEDED';
export const GET_PROJECTS_FAILED = 'GET_PROJECTS_FAILED';

export type ActionType = 
    | { type: undefined }
    | { type: typeof GET_PROJECTS_START }
    | { type: typeof GET_PROJECTS_SUCCEEDED, payload: GetProjectsSuccessResponse }
    | { type: typeof GET_PROJECTS_FAILED, payload: GetProjectsFailedResponse };