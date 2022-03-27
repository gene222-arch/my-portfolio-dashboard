import { all, take, put, call } from 'redux-saga/effects';
import { 
    GetEmailsFailedResponse, 
    GetEmailsSuccessResponse 
} from 'types/states/email';
import { getErrorMessage } from 'utils/errorHandling';
import { getEmailsFailed, getEmailsSucceeded } from './action.creators';
import { GET_EMAILS_START } from './action.types';
import * as API from 'apis/email';
import { GetEmailPayload } from 'types/states/email/GetEmailPayload';

function* getEmailsSaga(payload: GetEmailPayload)
{
    try {
        const result: GetEmailsSuccessResponse = yield call(API.index, payload);
        
        yield put(getEmailsSucceeded(result));
    } catch (error) {
        const errorMessage: GetEmailsFailedResponse = getErrorMessage(error);
        yield put(getEmailsFailed(errorMessage));
    }
}

function* getEmailsWatcher()
{
    while(true)
    {
        const { payload } = yield take(GET_EMAILS_START);
        yield call(getEmailsSaga, payload);
    }
}

export default function* ()
{
    yield all([
        getEmailsWatcher()
    ]);
}