import { all, take, put, call } from 'redux-saga/effects';
import { 
    DestroyEmailsFailedResponse,
    DestroyEmailsPayload,
    DestroyEmailsSuccessResponse,
    GetEmailsFailedResponse, 
    GetEmailsSuccessResponse 
} from 'types/states/email';
import { getErrorMessage } from 'utils/errorHandling';
import { destroyEmailsFailed, destroyEmailsSucceeded, getEmailsFailed, getEmailsSucceeded } from './action.creators';
import { DESTROY_EMAILS_START, GET_EMAILS_START } from './action.types';
import * as API from 'apis/email';
import { GetEmailPayload } from 'types/states/email/GetEmailPayload';

function* destroyEmailsSaga(payload: DestroyEmailsPayload)
{
    try {
        const result: DestroyEmailsSuccessResponse = yield call(API.destroyMultiple, payload);
        
        yield put(destroyEmailsSucceeded(payload));
    } catch (error) {
        const errorMessage:DestroyEmailsFailedResponse = getErrorMessage(error);
        yield put(destroyEmailsFailed(errorMessage));
    }
}

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

function* destroyEmailsWatcher()
{
    while(true)
    {
        const { payload } = yield take(DESTROY_EMAILS_START);
        yield call(destroyEmailsSaga, payload);
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
        destroyEmailsWatcher(),
        getEmailsWatcher()
    ]);
}