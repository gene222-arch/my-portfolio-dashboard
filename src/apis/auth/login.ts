import { LoginFailedResponse } from "../../types/states/auth/LoginFailedResponse";
import { LoginSuccessResponse } from "../../types/states/auth/LoginSuccessResponse";
import { LogoutFailedResponse } from "../../types/states/auth/LogoutFailedResponse";
import { LogoutSuccessResponse } from "../../types/states/auth/LogoutSuccessResponse";
import axiosInstance from './../../utils/axiosInstance';

export const login = async (payload: Credential): Promise<LoginSuccessResponse | LoginFailedResponse> => 
{
    return await axiosInstance()
        .post('/auth/login', payload)
        .then((response: { data: LoginSuccessResponse }) => response.data)
        .catch((error: { response: { data: LoginFailedResponse }}) => Promise.reject(error.response.data))
};

export const logout = async (): Promise<LogoutSuccessResponse | LogoutFailedResponse> => 
{
    return await axiosInstance()
        .post('/auth/logout')
        .then((response: { data: LogoutSuccessResponse }) => response.data)
        .catch((error: { response: { data: LogoutFailedResponse }}) => Promise.reject(error.response.data))
};