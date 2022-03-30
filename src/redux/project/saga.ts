import { all, take, put, call } from 'redux-saga/effects';
import { 
    CreateProjectFailedResponse,
    CreateProjectPayload,
    CreateProjectSuccessResponse,
    DestroyProjectsFailedResponse,
    DestroyProjectsPayload,
    DestroyProjectsSuccessResponse,
    GetProjectsFailedResponse, 
    GetProjectsSuccessResponse, 
    UpdateProjectFailedResponse, 
    UpdateProjectPayload,
    UpdateProjectSuccessResponse
} from '../../types/states/project';
import { getErrorMessage } from '../../utils/errorHandling';
import { createProjectFailed, createProjectSucceeded, destroyProjectsFailed, destroyProjectsSucceeded, getProjectsFailed, getProjectsSucceeded, updateProjectFailed, updateProjectSucceeded } from './action.creators';
import { CREATE_PROJECT_START, DESTROY_PROJECTS_START, GET_PROJECTS_START, UPDATE_PROJECT_START } from './action.types';
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

function* destroyProjectsSaga(payload: DestroyProjectsPayload)
{
    try {
        const result: DestroyProjectsSuccessResponse = yield call(API.destroyMultiple, payload);
        
        yield put(destroyProjectsSucceeded(payload));
        yield put(push(PROJECT_PATH));
    } catch (error) {
        const errorMessage: DestroyProjectsFailedResponse = getErrorMessage(error);
        yield put(destroyProjectsFailed(errorMessage));
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

function* updateProjectSaga(payload: UpdateProjectPayload)
{
    try {
        const result: UpdateProjectSuccessResponse = yield call(API.update, payload);
        
        yield put(updateProjectSucceeded(result));
        yield put(push(PROJECT_PATH));
    } catch (error) {
        const errorMessage: UpdateProjectFailedResponse = getErrorMessage(error);
        yield put(updateProjectFailed(errorMessage));
    }
}

function* createProjectWatcher()
{
    while(true)
    {
        const { payload } = yield take(CREATE_PROJECT_START);
        yield call(createProjectSaga, payload);
    }
}

function* destroyProjectsWatcher()
{
    while(true)
    {
        const { payload } = yield take(DESTROY_PROJECTS_START);
        yield call(destroyProjectsSaga, payload);
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

function* updateProjectWatcher()
{
    while(true)
    {
        const { payload } = yield take(UPDATE_PROJECT_START);
        yield call(updateProjectSaga, payload);
    }
}

export default function* ()
{
    yield all([
        createProjectWatcher(),
        destroyProjectsWatcher(),
        getProjectsWatcher(),
        updateProjectWatcher()
    ]);
}