import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import Api from '../middlewares/api.js';

export const history = createHistory();
const router = routerMiddleware(history);

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(router),
      applyMiddleware(thunkMiddleware),
      applyMiddleware(Api),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
  );
}
