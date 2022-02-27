import axiosInstance from './../../utils/axiosInstance';
import { GetAccountDetailFailedResponse } from '../../types/states/auth/GetAccountDetailFailedResponse';
import { GetAccountDetailSuccessResponse } from '../../types/states/auth/GetAccountDetailSuccessResponse';

export const getAccountDetails = async (userID: number): Promise<GetAccountDetailSuccessResponse | GetAccountDetailFailedResponse> => 
{
    return await axiosInstance()
        .get(`/account/${ userID }`)
        .then((response: { data: GetAccountDetailSuccessResponse }) => response.data)
        .catch((error: { response: { data: GetAccountDetailFailedResponse }}) => Promise.reject(error.response.data))
};
