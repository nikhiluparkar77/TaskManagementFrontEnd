import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  CURRENT_ADMIN,
  USER_LIST,
  DELETE_USER,
  SINGLE_USER,
  GET_TASK,
  DELETE_TASK
} from "../../Action/Types";
import setAdminAuthToken from "../../../Component/Admin/SetAdminAuth/SetAdminAuthToken";

// Admin Sign Up
export const AdminAuthSignUp = ( adminSignData, history ) => ( dispatch ) => {
  axios
    .post( `http://localhost:5000/api/admin/SignUp`, adminSignData )
    .then( ( res ) => {
      dispatch( {
        type: CURRENT_ADMIN,
        payload: res.data,
      } );
      history.push( "/admin/sign-in" );
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
};

// Admin Sign In
export const AdminAuthSignIn = ( adminSignInData, history ) => ( dispatch ) => {
  axios
    .post( `http://localhost:5000/api/admin/SignIn`, adminSignInData )
    .then( ( res ) => {
      const { token } = res.data;
      localStorage.setItem( "jwtToken", token );
      setAdminAuthToken( token );
      const decode = jwt_decode( token );
      dispatch( CurrentAdminSet( decode ) );
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
};

export const CurrentAdminSet = ( decode ) => {
  return {
    type: CURRENT_ADMIN,
    payload: decode,
  };
};

// Admin Logout
export const AdminLogout = () => ( dispatch ) => {
  localStorage.removeItem( "jwtToken" );
  setAdminAuthToken( false );
  dispatch( CurrentAdminSet( false ) );
};

// User List
export const userListFunc = () => ( dispatch ) => {
  axios
    .get( "http://localhost:5000/api/user/UserList" )
    .then( ( res ) =>
      dispatch( {
        type: USER_LIST,
        payload: res.data,
      } )
    )
    .catch( ( err ) => {
      console.log( err );
    } );
};

// Single user info
export const userInfo = ( id ) => ( dispatch ) => {
  axios
    .get( `http://localhost:5000/api/user/UserInfo/${ id }` )
    .then( ( res ) =>
      dispatch( {
        type: SINGLE_USER,
        payload: res.data,
      } )
    )
    .catch( ( err ) => console.log( err ) );
};

// Edit Single user
export const editUserInfo = ( id, userData, history ) => ( dispatch ) => {
  axios
    .patch( `http://localhost:5000/api/user/Edit/${ id }`, userData )
    .then(
      ( res ) =>
        dispatch( {
          type: SINGLE_USER,
          payload: res.data,
        } ),
      history.push( "/admin/dashbord" )
    )
    .catch( ( err ) => console.log( err ) );
};

// Delete user
export const userDelete = ( id, history ) => ( dispatch ) => {
  axios
    .delete( `http://localhost:5000/api/user/Delete/${ id }` )
    .then(
      ( res ) =>
        dispatch( {
          type: DELETE_USER,
          payload: res.data,
        } ),
      history.push( "/admin/dashbord" )
    )
    .catch( ( err ) => {
      console.log( err );
    } );
};


// GET Task List
export const taskGetFunc = () => ( dispatch ) => {
  axios
    .get( "http://localhost:5000/api/task/" )
    .then( ( res ) => dispatch( { type: GET_TASK, payload: res.data } ) )
    .catch( ( err ) => console.log( err ) );
};

// DELETE Task
export const taskDeleteFunc = ( id ) => ( dispatch ) => {
  axios
    .delete( `http://localhost:5000/api/task/${ id }` )
    .then( ( res ) => dispatch( { type: DELETE_TASK, payload: res.data } ) )
    .catch( ( err ) => console.log( err ) );
};
