import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../../reducer';
import { rootSaga } from '../../rootSaga';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'connected-react-router';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares, logger)),
);

sagaMiddleware.run(rootSaga);

export default store;
