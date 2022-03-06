import { all } from "redux-saga/effects";
import auth from './auth/saga';
import pageReport from './page-report/saga';
import project from './project/saga';
import testimonial from './testimonial/saga';

function* rootSaga() 
{
    yield all([
        auth(),
        pageReport(),
        project(),
        testimonial()
    ]);
}

export default rootSaga;