import { GetEmailsSuccessResponse, GetEmailsFailedResponse, DestroyEmailsPayload, DestroyEmailsSuccessResponse, DestroyEmailsFailedResponse } from 'types/states/email';
import { GetEmailPayload } from 'types/states/email/GetEmailPayload';
import axiosInstance from '../utils/axiosInstance';

export const index = async ({ archive }: GetEmailPayload): Promise<GetEmailsSuccessResponse | GetEmailsFailedResponse> => 
{
    return await axiosInstance()
        .get(`/emails?archives=${ archive }`)
        .then((response: { data: GetEmailsSuccessResponse }) => response.data)
        .catch((error: { response: { data: GetEmailsFailedResponse }}) => Promise.reject(error.response.data))
};

export const destroyMultiple = async (payload: DestroyEmailsPayload): Promise<DestroyEmailsSuccessResponse | DestroyEmailsFailedResponse> => 
{
    return await axiosInstance()
        .delete('/emails', {
            data: payload
        })
        .then((response: { data: DestroyEmailsSuccessResponse }) => response.data)
        .catch((error: { response: { data: DestroyEmailsFailedResponse }}) => Promise.reject(error.response.data))
};