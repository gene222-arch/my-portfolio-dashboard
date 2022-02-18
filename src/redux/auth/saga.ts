import { push } from 'redux-first-history';
import { all, call, put, take } from 'redux-saga/effects';
import { DASHBOARD_PATH } from '../../routes/path';
import { LoginFailedResponse } from '../../types/states/auth/LoginFailedResponse';
import { LoginSuccessResponse } from '../../types/states/auth/LoginSuccessResponse';
import { LogoutFailedResponse } from '../../types/states/auth/LogoutFailedResponse';
import { LogoutSuccessResponse } from '../../types/states/auth/LogoutSuccessResponse';
import { getErrorMessage } from '../../utils/errorHandling';
import * as Api from './../../apis/auth/login';
import * as Cookies from './../../utils/cookies';
import { loginSucceeded, loginFailed, logoutSucceeded, logoutFailed } from './action.creators';
import { LOGIN_START, LOGOUT_START } from './action.types';
import { LOGIN_PATH } from './../../routes/path';


function* loginSaga(credentials: Credential) 
{
    try {
        const result: LoginSuccessResponse = yield call(Api.login, credentials);
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
        const result: LogoutSuccessResponse = yield call(Api.logout);
        const { data } = result;
        
        Cookies.removeToken();
        yield put(logoutSucceeded(result));
        yield put(push(LOGIN_PATH));
    } catch (error: any) {
        const errorMessage: LogoutFailedResponse = getErrorMessage(error);

        yield put(logoutFailed(errorMessage));
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


export default function* ()
{
    yield all([
        loginWatcher(),
        logoutWatcher()
    ]);
}