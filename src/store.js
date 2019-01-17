import { createStore,applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import initialState from "./reducers/InitialState";

const middlewares = [
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk
  ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store;