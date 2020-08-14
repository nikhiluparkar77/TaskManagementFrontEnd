import axios from "axios";
import { CURRENT_USER, LISTED_TASK, GET_TASK } from "../Types";

export const createUser = ( userData, history ) => ( dispatch ) => {
  axios
    .post( "http://localhost:5000/api/user/SignUp", userData )
    .then(
      ( res ) =>
        dispatch( {
          type: CURRENT_USER,
          payload: res.data,
        } ),
      history.push( "/admin/dashbord" )
    )
    .catch( ( err ) => console.log( err ) );
};

export const userSignIn = ( userData, history ) => ( dispatch ) => {
  axios
    .post( "http://localhost:5000/api/user/SignIn", userData )
    .then(
      ( res ) => {
        console.log( res );
        dispatch( {
          type: CURRENT_USER,
          payload: res.data,

        } );
      }

      // history.push( "/admin/dashbord" )
    )
    .catch( ( err ) => console.log( err ) );
};

export const getTask = () => ( dispatch ) => {
  axios.get( "http://localhost:5000/api/complete/listTask" ).then( ( res ) => dispatch( {
    type: LISTED_TASK,
    payload: res.data
  } ) ).catch( ( err ) => console.log( err ) );
};

// Get Assign Task
export const getAssignTask = () => ( dispatch ) => {
  axios.get( "http://localhost:5000/api/task/taskList" ).then( ( res ) => dispatch( {
    type: GET_TASK,
    payload: res.data
  } ) ).catch( ( err ) => console.log( err ) );
};
