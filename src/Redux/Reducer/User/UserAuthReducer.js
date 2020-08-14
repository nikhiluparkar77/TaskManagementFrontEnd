import { CURRENT_USER, LISTED_TASK, GET_TASK } from "../../Action/Types";

const initialState = {
  isAuthenticated: false,
  user: {},
  listedTask: [],
  taskList: [],
};

export default function ( state = initialState, action ) {
  switch ( action.type ) {
    case CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
        user: action.payload,
      };
    case LISTED_TASK:
      return {
        ...state,
        listedTask: action.payload,
      };
    case GET_TASK:
      return {
        ...state,
        taskList: action.payload,
      };

    default:
      return state;
  }
}
