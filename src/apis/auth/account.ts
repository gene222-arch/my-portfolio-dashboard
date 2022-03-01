import axiosInstance from './../../utils/axiosInstance';
import { GetAccountDetailFailedResponse } from '../../types/states/auth/GetAccountDetailFailedResponse';
import { GetAccountDetailSuccessResponse } from '../../types/states/auth/GetAccountDetailSuccessResponse';
import { UpdateAccountDetailsPayload } from '../../types/states/auth/UpdateAccountDetailsPayload';
import { UpdateAccountSuccessResponse } from '../../types/states/auth/UpdateAccountSuccessResponse';
import { UpdateAccountFailedResponse } from '../../types/states/auth/UpdateAccountFailedResponse';

export const getAccountDetails = async (userID: number): Promise<GetAccountDetailSuccessResponse | GetAccountDetailFailedResponse> => 
{
    return await axiosInstance()
        .get(`/account/${ userID }`)
        .then((response: { data: GetAccountDetailSuccessResponse }) => response.data)
        .catch((error: { response: { data: GetAccountDetailFailedResponse }}) => Promise.reject(error.response.data))
};

export const update = async (payload: UpdateAccountDetailsPayload): Promise<UpdateAccountSuccessResponse | UpdateAccountFailedResponse> => 
{
    return await axiosInstance()
        .put(`/account/details/${ payload.id }`, payload)
        .then((response: { data: UpdateAccountSuccessResponse }) => response.data)
        .catch((error: { response: { data: UpdateAccountFailedResponse }}) => Promise.reject(error.response.data))
};