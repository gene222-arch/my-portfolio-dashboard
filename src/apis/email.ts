import { GetEmailsSuccessResponse, GetEmailsFailedResponse } from 'types/states/email';
import { GetEmailPayload } from 'types/states/email/GetEmailPayload';
import axiosInstance from '../utils/axiosInstance';

export const index = async (payload: GetEmailPayload): Promise<GetEmailsSuccessResponse | GetEmailsFailedResponse> => 
{
    return await axiosInstance()
        .get('/emails')
        .then((response: { data: GetEmailsSuccessResponse }) => response.data)
        .catch((error: { response: { data: GetEmailsFailedResponse }}) => Promise.reject(error.response.data))
};