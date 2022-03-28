import { all, take, put, call } from 'redux-saga/effects';
import { 
    CreateProjectFailedResponse,
    CreateProjectPayload,
    CreateProjectSuccessResponse,
    GetProjectsFailedResponse, 
    GetProjectsSuccessResponse 
} from '../../types/states/project';
import { getErrorMessage } from '../../utils/errorHandling';
import { createProjectFailed, createProjectSucceeded, getProjectsFailed, getProjectsSucceeded } from './action.creators';
import { CREATE_PROJECT_START, GET_PROJECTS_START } from './action.types';
import * as API from './../../apis/project';
import { push } from 'redux-first-history';
import { PROJECT_PATH } from 'routes/path';

function* createProjectSaga(payload: CreateProjectPayload)
{
    try {
        const result: CreateProjectSuccessResponse = yield call(API.store, payload);
        
        yield put(createProjectSucceeded(result));
        yield put(push(PROJECT_PATH));
    } catch (error) {
        const errorMessage: CreateProjectFailedResponse = getErrorMessage(error);
        yield put(createProjectFailed(errorMessage));
    }
}

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

function* creatProjectWatcher()
{
    while(true)
    {
        const { payload } = yield take(CREATE_PROJECT_START);
        yield call(createProjectSaga, payload);
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
        creatProjectWatcher(),
        getProjectsWatcher()
    ]);
}