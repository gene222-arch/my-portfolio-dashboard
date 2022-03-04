import { all } from "redux-saga/effects";
import auth from './auth/saga';
import pageReport from './page-report/saga';

function* rootSaga() 
{
    yield all([
        auth(),
        pageReport()
    ]);
}

export default rootSaga;