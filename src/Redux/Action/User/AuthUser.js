import axios from "axios";

import { CURRENT_USER } from "../Types";

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
