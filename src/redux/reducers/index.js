import { combineReducers } from "redux";
import datVeReducer from "./movie";

const rootReducer = combineReducers({
  datVeReducer,
});
// lỗi ở đây nè, phải trả về obj
export default rootReducer;
