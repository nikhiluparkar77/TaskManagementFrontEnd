import { TASK_ASSAGIN, GET_TASK, DELETE_TASK } from "../../Action/Types";

const InitialState = {
  task: [],

};

export default function ( state = InitialState, action ) {
  switch ( action ) {
    case TASK_ASSAGIN:
      return {
        ...state,
        task: action.payload,
      };
    default:
      return state;
  }
}
