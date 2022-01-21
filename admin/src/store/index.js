import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { newsReducer } from "./reducers/newsReducer";

// const rootReducer = combineReducers({
//   news: newsReducer,
// });

export const store = createStore(
  newsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
