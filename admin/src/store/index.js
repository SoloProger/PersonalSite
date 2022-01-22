import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { newsReducer } from "./reducers/newsReducer";
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  todos: todoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
