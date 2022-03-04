import { GetPageReportFailedResponse } from '../../types/states/page-report/GetPageReportFailedResponse';
import { GetPageReportSuccessResponse } from '../../types/states/page-report/GetPageReportSuccessResponse';
import { ActionType, GET_PAGE_REPORT_START, GET_PAGE_REPORT_SUCCEEDED, GET_PAGE_REPORT_FAILED } from './action.types';

export const getPageReportStart = (): ActionType => ({
    type: GET_PAGE_REPORT_START
});

export const getPageReportSucceeded = (payload: GetPageReportSuccessResponse): ActionType => ({
    type: GET_PAGE_REPORT_SUCCEEDED,
    payload
});

export const getPageReportFailed = (payload: GetPageReportFailedResponse): ActionType => ({
    type: GET_PAGE_REPORT_FAILED,
    payload
});