import { push } from 'redux-first-history';
import { all, call, put, take } from 'redux-saga/effects';
import { DASHBOARD_PATH } from 'routes/path';
import { 
    LoginFailedResponse, 
    LoginSuccessResponse, 
    LogoutFailedResponse, 
    LogoutSuccessResponse,
    GetAccountDetailSuccessResponse,
    GetAccountDetailFailedResponse,
    UpdateAccountDetailsPayload,
    UpdateAccountSuccessResponse
} from 'types/states/auth';
import { getErrorMessage } from 'utils/errorHandling';
import * as LoginApi from 'apis/auth/login';
import * as AccountApi from 'apis/auth/account';
import * as Cookies from 'utils/cookies';
import { loginSucceeded, loginFailed, logoutSucceeded, logoutFailed, getAccountDetailsSucceeded, getAccountDetailsFailed, updateAccountDetailsSucceeded, updateAccountDetailsFailed } from './action.creators';
import { LOGIN_START, LOGOUT_START, GET_ACCOUNT_DETAILS_START, UPDATE_ACCOUNT_DETAILS_START } from './action.types';
import { LOGIN_PATH } from 'routes/path';

function* getAccountDetailsSaga(userID: number) 
{
    try {
        const result: GetAccountDetailSuccessResponse = yield call(AccountApi.getAccountDetails, userID);
        yield put(getAccountDetailsSucceeded(result));
    } catch (error: any) {
        const errorMessage: GetAccountDetailFailedResponse = getErrorMessage(error);
        yield put(getAccountDetailsFailed(errorMessage));
    }
}

function* loginSaga(credentials: Credential) 
{
    try {
        const result: LoginSuccessResponse = yield call(LoginApi.login, credentials);
        const { data } = result;
        
        Cookies.set('accessToken', data.access_token, data.expired_at);
        yield put(loginSucceeded(result));
        yield put(push(DASHBOARD_PATH));
    } catch (error: any) {
        const errorMessage: LoginFailedResponse = getErrorMessage(error);
        yield put(loginFailed(errorMessage));
    }
}

function* logoutSaga() 
{
    try {
        const result: LogoutSuccessResponse = yield call(LoginApi.logout);
        
        Cookies.removeToken();
        yield put(logoutSucceeded(result));
        yield put(push(LOGIN_PATH));
    } catch (error: any) {
        const errorMessage: LogoutFailedResponse = getErrorMessage(error);

        yield put(logoutFailed(errorMessage));
    }
}

function* updateAccountDetailsSaga(payload: UpdateAccountDetailsPayload) 
{
    try {
        const result: UpdateAccountSuccessResponse = yield call(AccountApi.update, payload);
        yield put(updateAccountDetailsSucceeded(result));
    } catch (error: any) {
        const errorMessage: GetAccountDetailFailedResponse = getErrorMessage(error);
        yield put(updateAccountDetailsFailed(errorMessage));
    }
}

function* getAccountDetailsWatcher() 
{
    while (true) {
        const { payload } = yield take(GET_ACCOUNT_DETAILS_START);
        yield call(getAccountDetailsSaga, payload);
    }
}

function* loginWatcher() 
{
    while (true) {
        const { payload } = yield take(LOGIN_START);
        yield call(loginSaga, payload);
    }
}

function* logoutWatcher() 
{
    while (true) {
        yield take(LOGOUT_START);
        yield call(logoutSaga);
    }
}

function* updateAccountDetailsWatcher() 
{
    while (true) {
        const { payload } = yield take(UPDATE_ACCOUNT_DETAILS_START);
        yield call(updateAccountDetailsSaga, payload);
    }
}


export default function* ()
{
    yield all([
        getAccountDetailsWatcher(),
        loginWatcher(),
        logoutWatcher(),
        updateAccountDetailsWatcher()
    ]);
}