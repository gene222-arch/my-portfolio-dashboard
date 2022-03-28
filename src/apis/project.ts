import { CreateProjectPayload } from 'types/states/project/CreateProjectPayload';
import { 
    GetProjectsFailedResponse, 
    GetProjectsSuccessResponse,
    CreateProjectSuccessResponse,
    CreateProjectFailedResponse
} from 'types/states/project';
import axiosInstance from '../utils/axiosInstance';

export const getProjects = async (): Promise<GetProjectsSuccessResponse | GetProjectsFailedResponse> => 
{
    return await axiosInstance()
        .get('/projects')
        .then((response: { data: GetProjectsSuccessResponse }) => response.data)
        .catch((error: { response: { data: GetProjectsFailedResponse }}) => Promise.reject(error.response.data))
};

export const store = async (payload: CreateProjectPayload): Promise<CreateProjectSuccessResponse | CreateProjectFailedResponse> => 
{
    return await axiosInstance()
        .post('/projects', payload)
        .then((response: { data: CreateProjectSuccessResponse }) => response.data)
        .catch((error: { response: { data: CreateProjectFailedResponse }}) => Promise.reject(error.response.data))
};