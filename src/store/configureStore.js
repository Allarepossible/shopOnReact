import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


export default function configureStore(initialState, history) {
  const middleware = [thunk, routerMiddleware(history)];
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), f => f));

  return store;
}
