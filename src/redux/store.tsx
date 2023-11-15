import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { loggerMiddleware } from "./loggerMiddleware";

const middleware = [thunk, loggerMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
