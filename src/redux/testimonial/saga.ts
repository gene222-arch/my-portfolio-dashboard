import { all, take, put, call } from 'redux-saga/effects';
import { GetTestimonialsFailedResponse } from '../../types/states/testimonial/GetTestimonialsFailedResponse';
import { GetTestimonialsSuccessResponse } from '../../types/states/testimonial/GetTestimonialsSuccessResponse';
import { getErrorMessage } from '../../utils/errorHandling';
import { getTestimonialsFailed, getTestimonialsSucceeded } from './action.creators';
import { GET_TESTIMONIALS_START } from './action.types';
import * as API from './../../apis/testimonial';

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
        getTestimonialsWatcher()
    ]);
}