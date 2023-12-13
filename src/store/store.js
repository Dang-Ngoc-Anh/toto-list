import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import allReducers from './reducers';
import logger from 'redux-logger'
import rootSaga, { mySaga } from './saga/saga';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware]

export const store = createStore(
  allReducers,
  applyMiddleware(...middlewares)
  );
sagaMiddleware.run(rootSaga);
