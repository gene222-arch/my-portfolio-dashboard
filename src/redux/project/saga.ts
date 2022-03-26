import { all, take, put, call } from 'redux-saga/effects';
import { GetProjectsFailedResponse } from '../../types/states/project/GetProjectsFailedResponse';
import { GetProjectsSuccessResponse } from '../../types/states/project/GetProjectsSuccessResponse';
import { getErrorMessage } from '../../utils/errorHandling';
import { getProjectsFailed, getProjectsSucceeded } from './action.creators';
import { GET_PROJECTS_START } from './action.types';
import * as API from './../../apis/project';

function* getProjectsSaga()
{
    try {
        const result: GetProjectsSuccessResponse = yield call(API.getProjects);
        
        yield put(getProjectsSucceeded(result));
    } catch (error) {
        const errorMessage: GetProjectsFailedResponse = getErrorMessage(error);
        yield put(getProjectsFailed(errorMessage));
    }
}

function* getProjectsWatcher()
{
    while(true)
    {
        yield take(GET_PROJECTS_START);
        yield call(getProjectsSaga);
    }
}

export default function* ()
{
    yield all([
        getProjectsWatcher()
    ]);
}