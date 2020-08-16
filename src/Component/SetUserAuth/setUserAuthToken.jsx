import axios from "axios";

const setUserAuthToken = ( token ) => {
    if ( token ) {
        axios.defaults.headers.common[ "Authorization" ] = token;
    } else {
        delete axios.defaults.headers.common[ "Authorization" ];
    }
};

export default setUserAuthToken;
