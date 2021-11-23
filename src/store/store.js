import { createStore, applyMiddleware, compose } from "redux";
//applyMiddleware for redux-thunk
//compose - for redux devtools
//thunk - for  async actions
//composeEnhancers -for devtools 

import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;