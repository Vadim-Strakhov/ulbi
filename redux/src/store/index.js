import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

const composedEnhancer = compose(
  applyMiddleware(sagaMiddleware),
  composeWithDevTools(applyMiddleware(thunk))
);

export const store = createStore(rootReducer, composedEnhancer);

sagaMiddleware.run(rootWatcher);
