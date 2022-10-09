import {
  combineReducers,
  applyMiddleware,
  compose,
  legacy_createStore,
} from "redux";
import { appReducer } from "./App/appReducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
