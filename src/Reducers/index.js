import { combineReducers } from "redux";
import { calculator } from "./calculator";

import { eBook } from "./eBook";
import { todos } from "./todos";

export default combineReducers({
  todos: todos,
  eBook: eBook,
  calculator: calculator
});
