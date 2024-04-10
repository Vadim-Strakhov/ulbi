import { applyMiddleware, createStore, compose } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";

const composedEnhancer = compose(applyMiddleware(thunk), composeWithDevTools());

export const store = createStore(rootReducer, composedEnhancer);
