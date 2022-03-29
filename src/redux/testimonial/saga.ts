import { all, take, put, call } from 'redux-saga/effects';
import { 
    GetTestimonialsFailedResponse, 
    GetTestimonialsSuccessResponse, 
    CreateTestimonialSuccessResponse,
    CreateTestimonialFailedResponse,
    EditTestimonialSuccessResponse,
    EditTestimonialFailedResponse, 
    DeleteTestimonialsPayload,
    DeleteTestimonialsSuccessResponse,
    DeleteTestimonialsFailedResponse} from 'types/states/testimonial';
import { getErrorMessage } from 'utils/errorHandling';
import { 
    createTestimonialFailed, 
    createTestimonialSucceeded, 
    deleteTestimonialsFailed, 
    deleteTestimonialsSucceeded, 
    editTestimonialFailed, 
    editTestimonialSucceeded, 
    getTestimonialsFailed, 
    getTestimonialsSucceeded 
} from './action.creators';
import { CREATE_TESTIMONIAL_START, DELETE_TESTIMONIALS_START, EDIT_TESTIMONIAL_START, GET_TESTIMONIALS_START } from './action.types';
import * as API from 'apis/testimonial';
import { TestimonialItemType } from 'types/states/testimonial/TestimonialState';
import { push } from 'redux-first-history';
import { TESTIMONIAL_PATH } from 'routes/path';

function* createTestimonialSaga(payload: TestimonialItemType)
{
    try {
        const result: CreateTestimonialSuccessResponse = yield call(API.store, payload);

        yield put(createTestimonialSucceeded(result));
        yield put(push(TESTIMONIAL_PATH));
    } catch (error) {
        const errorMessage: CreateTestimonialFailedResponse = getErrorMessage(error);
        yield put(createTestimonialFailed(errorMessage));
    }
}

function* deleteTestimonialsSaga(payload: DeleteTestimonialsPayload)
{
    try {
        const result: DeleteTestimonialsSuccessResponse = yield call(API.destroy, payload);

        yield put(deleteTestimonialsSucceeded(payload));
    } catch (error) {
        const errorMessage: DeleteTestimonialsFailedResponse = getErrorMessage(error);
        yield put(deleteTestimonialsFailed(errorMessage));
    }
}

function* editTestimonialSaga(payload: TestimonialItemType)
{
    try {
        const result: EditTestimonialSuccessResponse = yield call(API.update, payload);

        yield put(editTestimonialSucceeded(result));
        yield put(push(TESTIMONIAL_PATH));
    } catch (error) {
        const errorMessage: EditTestimonialFailedResponse = getErrorMessage(error);
        yield put(editTestimonialFailed(errorMessage));
    }
}

function* getTestimonialsSaga()
{
    try {
        const result: GetTestimonialsSuccessResponse = yield call(API.getTestimonials);
        
        yield put(getTestimonialsSucceeded(result));
    } catch (error) {
        const errorMessage: GetTestimonialsFailedResponse = getErrorMessage(error);
        yield put(getTestimonialsFailed(errorMessage));
    }
}

function* createTestimonialWatcher()
{
    while(true)
    {
        const { payload } = yield take(CREATE_TESTIMONIAL_START);
        yield call(createTestimonialSaga, payload);
    }
}

function* deleteTestimonialsWatcher()
{
    while(true)
    {
        const { payload } = yield take(DELETE_TESTIMONIALS_START);
        yield call(deleteTestimonialsSaga, payload);
    }
}

function* editTestimonialWatcher()
{
    while(true)
    {
        const { payload } = yield take(EDIT_TESTIMONIAL_START);
        yield call(editTestimonialSaga, payload);
    }
}

function* getTestimonialsWatcher()
{
    while(true)
    {
        yield take(GET_TESTIMONIALS_START);
        yield call(getTestimonialsSaga);
    }
}

export default function* ()
{
    yield all([
        createTestimonialWatcher(),
        deleteTestimonialsWatcher(),
        editTestimonialWatcher(),
        getTestimonialsWatcher()
    ]);
}