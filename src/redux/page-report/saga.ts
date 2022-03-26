import { all, take, put, call } from 'redux-saga/effects';
import { GetPageReportFailedResponse } from '../../types/states/page-report/GetPageReportFailedResponse';
import { GetPageReportSuccessResponse } from '../../types/states/page-report/GetPageReportSuccessResponse';
import { getErrorMessage } from '../../utils/errorHandling';
import { getPageReportFailed, getPageReportSucceeded } from './action.creators';
import { GET_PAGE_REPORT_START } from './action.types';
import * as API from './../../apis/pageReport';

function* getPageReportSaga()
{
    try {
        const result: GetPageReportSuccessResponse = yield call(API.getPageReport);
        
        yield put(getPageReportSucceeded(result));
    } catch (error) {
        const errorMessage: GetPageReportFailedResponse = getErrorMessage(error);
        yield put(getPageReportFailed(errorMessage));
    }
}

function* getPageReportWatcher()
{
    while(true)
    {
        yield take(GET_PAGE_REPORT_START);
        yield call(getPageReportSaga);
    }
}

export default function* ()
{
    yield all([
        getPageReportWatcher()
    ]);
}