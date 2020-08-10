import { combineReducers } from "redux";
import AdminAuthReducer from "./Admin/AdminAuthReducer";
import UserAuthReducer from "./User/UserAuthReducer";
import TaskReducer from "./Task/Task";

export default combineReducers({
  adminAuth: AdminAuthReducer,
  userAuth: UserAuthReducer,
  task: TaskReducer,
});
