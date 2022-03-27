import { AnyAction } from 'redux';
import { createReduxHistoryContext } from "redux-first-history";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import storage from 'redux-persist/lib/storage';
import { browserHistory } from '../utils/browserHistory';
import auth from './auth/reducer';
import email from './email/reducer';
import pageReport from './page-report/reducer';
import project from './project/reducer';
import testimonial from './testimonial/reducer';

const { routerReducer } = createReduxHistoryContext({
    history: browserHistory
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: []
};

const reducers = {
    router: routerReducer,
    auth,
    email,
    pageReport,
    project,
    testimonial,
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

const rootReducer = (state: any, action: AnyAction) =>
{
    if (action.type === 'LOGOUT_SUCCEEDED') {
        storage.removeItem('persist:root');
    }

    return persistedReducer(state, action);
}

export default rootReducer;