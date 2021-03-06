import axios from "axios";
import jwt_decode from "jwt-decode";
import { CURRENT_USER, LISTED_TASK, GET_TASK, GET_SINGLE_TASK, ADD_COMPLETE_TASK } from "../Types";
import setUserAuthToken from "../../../Component/SetUserAuth/setUserAuthToken";

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
        const { token } = res.data;
        localStorage.setItem( "jwtUserToken", token );
        setUserAuthToken( token );
        const decode = jwt_decode( token );
        dispatch( CurrentUserSet( decode ) );
      }

    )
    .catch( ( err ) => console.log( err ) );
};

// Set  User
export const CurrentUserSet = ( decode ) => {
  return {
    type: CURRENT_USER,
    payload: decode,
  };
};

// User Logout
export const UserLogout = () => ( dispatch ) => {
  localStorage.removeItem( "jwtUserToken" );
  setUserAuthToken( false );
  dispatch( CurrentUserSet( false ) );
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


// Get Single Task
export const getSingleTask = ( id ) => ( dispatch ) => {
  axios.get( `http://localhost:5000/api/task/getTaskList/${ id }` ).then( ( res ) => dispatch( {
    type: GET_SINGLE_TASK,
    payload: res.data
  } ) ).catch( ( err ) => console.log( err ) );
};

// Add Complete task 
export const addCompltedTask = ( TeskInfo, history ) => ( dispatch ) => {
  axios.post( "http://localhost:5000/api/complete/Task", TeskInfo ).then( ( res ) => dispatch( {
    type: ADD_COMPLETE_TASK,
    payload: res.data
  } ), history.push( "/get-task" ) ).catch( ( err ) => console.log( err ) );
};
