import { all } from "redux-saga/effects";
import auth from './auth/saga';

function* rootSaga() 
{
    yield all([
        auth()
    ]);
}

export default rootSaga;