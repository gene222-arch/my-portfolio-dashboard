import { GetProjectsFailedResponse } from '../types/states/project/GetProjectsFailedResponse';
import { GetProjectsSuccessResponse } from '../types/states/project/GetProjectsSuccessResponse';
import axiosInstance from '../utils/axiosInstance';

export const getProjects = async (): Promise<GetProjectsSuccessResponse | GetProjectsFailedResponse> => 
{
    return await axiosInstance()
        .get('/projects')
        .then((response: { data: GetProjectsSuccessResponse }) => response.data)
        .catch((error: { response: { data: GetProjectsFailedResponse }}) => Promise.reject(error.response.data))
};