import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import thunkMiddleware from 'redux-thunk';

export const history = createHistory();
const router = routerMiddleware(history);

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(router),
      DevTools.instrument()
    ),
    applyMiddleware(
      thunkMiddleware
    )
  );
}
