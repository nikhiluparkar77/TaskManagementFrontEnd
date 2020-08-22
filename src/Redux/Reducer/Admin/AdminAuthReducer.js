import {
  CURRENT_ADMIN,
  USER_LIST,
  DELETE_USER,
  SINGLE_USER,
  GET_TASK,
  DELETE_TASK,
  GET_COMPLETE_TASK
} from "../../Action/Types";

const initalState = {
  isAuthenticated: false,
  admin: {},
  userList: null,
  user: null,
  taskList: [],
  CompleteTask: []
};

export default function ( state = initalState, action ) {
  switch ( action.type ) {
    case CURRENT_ADMIN:
      return {
        ...state,
        isAuthenticated: action.payload,
        admin: action.payload,
      };
    case USER_LIST:
      return {
        ...state,
        userList: action.payload,
      };
    case SINGLE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_TASK:
      return {
        ...state,
        taskList: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        taskList: action.payload,
      };
    case GET_COMPLETE_TASK:
      return {
        ...state,
        CompleteTask: action.payload,
      };
    default:
      return state;
  }
}
