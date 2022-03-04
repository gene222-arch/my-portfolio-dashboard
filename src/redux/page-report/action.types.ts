import { GetPageReportFailedResponse } from "../../types/states/page-report/GetPageReportFailedResponse";
import { GetPageReportSuccessResponse } from "../../types/states/page-report/GetPageReportSuccessResponse";

export const GET_PAGE_REPORT_START = 'GET_PAGE_REPORT_START';
export const GET_PAGE_REPORT_SUCCEEDED = 'GET_PAGE_REPORT_SUCCEEDED';
export const GET_PAGE_REPORT_FAILED = 'GET_PAGE_REPORT_FAILED';

export type ActionType = 
    | { type: undefined }
    | { type: typeof GET_PAGE_REPORT_START }
    | { type: typeof GET_PAGE_REPORT_SUCCEEDED, payload: GetPageReportSuccessResponse }
    | { type: typeof GET_PAGE_REPORT_FAILED, payload: GetPageReportFailedResponse };