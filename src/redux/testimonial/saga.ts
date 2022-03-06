import { all, take, put, call } from 'redux-saga/effects';
import { GetTestimonialsFailedResponse } from '../../types/states/testimonial/GetTestimonialsFailedResponse';
import { GetTestimonialsSuccessResponse } from '../../types/states/testimonial/GetTestimonialsSuccessResponse';
import { getErrorMessage } from '../../utils/errorHandling';
import { createTestimonialFailed, createTestimonialSucceeded, getTestimonialsFailed, getTestimonialsSucceeded } from './action.creators';
import { CREATE_TESTIMONIAL_START, GET_TESTIMONIALS_START } from './action.types';
import * as API from './../../apis/testimonial';
import { CreateTestimonialSuccessResponse } from '../../types/states/testimonial/CreateTestimonialSuccessResponse';
import { CreateTestimonialFailedResponse } from '../../types/states/testimonial/CreateTestimonialFailedResponse';
import { TestimonialItemType } from '../../types/states/testimonial/TestimonialState';

function* createTestimonialSaga(payload: TestimonialItemType)
{
    try {
        const result: CreateTestimonialSuccessResponse = yield call(API.store, payload);
        yield put(createTestimonialSucceeded(result));
    } catch (error) {
        const errorMessage: CreateTestimonialFailedResponse = getErrorMessage(error);
        yield put(createTestimonialFailed(errorMessage));
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
        getTestimonialsWatcher()
    ]);
}