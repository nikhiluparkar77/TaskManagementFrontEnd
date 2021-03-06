import { CURRENT_USER, LISTED_TASK, GET_TASK, GET_SINGLE_TASK, ADD_COMPLETE_TASK } from "../../Action/Types";

const initialState = {
  isAuthenticated: false,
  user: {},
  listedTask: [],
  taskList: [],
  taskDetails: null,
  TaskComplete: []
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
        listedTask: [ action.payload ],
      };
    case GET_TASK:
      return {
        ...state,
        taskList: action.payload,
      };

    case GET_SINGLE_TASK:
      return {
        ...state,
        taskDetails: action.payload,
      };
    case ADD_COMPLETE_TASK:
      return {
        ...state,
        TaskComplete: action.payload,
      };

    default:
      return state;
  }
}
