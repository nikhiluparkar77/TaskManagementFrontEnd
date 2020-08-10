import axios from "axios";
import { TASK_ASSAGIN, } from "../../Action/Types";

// Assign Task
export const taskAssignFunc = ( taskData, history ) => ( dispatch ) => {
  axios
    .post( "http://localhost:5000/api/task/taskAssign", taskData )
    .then( ( res ) => dispatch( { type: TASK_ASSAGIN, payload: res.data } ),
      history.push( "/admin/dashbord" ) )
    .catch( ( err ) => console.log( err ) );
};

