import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { newsReducer } from "./reducers/newsReducer";
import { todoReducer } from "./reducers/todoReducer";
import thunk from "redux-thunk";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

const rootReducer = combineReducers({
  news: newsReducer,
  todo: todoReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
