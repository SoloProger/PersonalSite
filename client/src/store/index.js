import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { newsReducer } from "./reducers/newsReducer";
import thunk from "redux-thunk";

export const store = createStore(
  newsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
