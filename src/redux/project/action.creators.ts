import { GetProjectsFailedResponse } from '../../types/states/project/GetProjectsFailedResponse';
import { GetProjectsSuccessResponse } from '../../types/states/project/GetProjectsSuccessResponse';
import { ActionType, GET_PROJECTS_START, GET_PROJECTS_SUCCEEDED, GET_PROJECTS_FAILED } from './action.types';

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