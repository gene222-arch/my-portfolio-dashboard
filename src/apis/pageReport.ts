import { GetPageReportFailedResponse } from '../types/states/page-report/GetPageReportFailedResponse';
import { GetPageReportSuccessResponse } from '../types/states/page-report/GetPageReportSuccessResponse';
import axiosInstance from '../utils/axiosInstance';

export const getPageReport = async (): Promise<GetPageReportSuccessResponse | GetPageReportFailedResponse> => 
{
    return await axiosInstance()
        .get('/page-report')
        .then((response: { data: GetPageReportSuccessResponse }) => response.data)
        .catch((error: { response: { data: GetPageReportFailedResponse }}) => Promise.reject(error.response.data))
};