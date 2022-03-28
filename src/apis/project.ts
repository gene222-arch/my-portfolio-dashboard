import { CreateProjectPayload } from 'types/states/project/CreateProjectPayload';
import { 
    GetProjectsFailedResponse, 
    GetProjectsSuccessResponse,
    CreateProjectSuccessResponse,
    CreateProjectFailedResponse,
    UploadFileSuccessResponse,
    UploadFileFailedResponse,
    UpdateProjectPayload,
    UpdateProjectSuccessResponse,
    UpdateProjectFailedResponse
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

export const update = async (payload: UpdateProjectPayload): Promise<UpdateProjectSuccessResponse | UpdateProjectFailedResponse> => 
{
    return await axiosInstance()
        .put(`/projects/${ payload.project_id }`, payload)
        .then((response: { data: UpdateProjectSuccessResponse }) => response.data)
        .catch((error: { response: { data: UpdateProjectFailedResponse }}) => Promise.reject(error.response.data))
};

export const upload = async (image: FormData): Promise<UploadFileSuccessResponse> => 
{
    return await axiosInstance()
        .post('/projects/image-upload', image, {
            headers: {
                contentType: 'multipart/form-data'
            }
        })
        .then((response: { data: UploadFileSuccessResponse }) => response.data)
        .catch((error: { response: { data: UploadFileFailedResponse }}) => Promise.reject(error.response.data))
};