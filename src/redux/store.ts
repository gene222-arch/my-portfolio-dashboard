import { createReduxHistoryContext } from "redux-first-history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";
import rootSaga from './rootSaga';
import { browserHistory } from '../utils/browserHistory';

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
    history: browserHistory
});

const sagaMiddleware = createSagaMiddleware();

const middlewares: any = [
    routerMiddleware,
    sagaMiddleware
];

const enhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
);

const configureStore = (preloadedState: any = {}) =>{
    const store = createStore(rootReducer, preloadedState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
};

const store = configureStore();
const history = createReduxHistory(store);
const persistor = persistStore(store);

export { store, history, persistor }