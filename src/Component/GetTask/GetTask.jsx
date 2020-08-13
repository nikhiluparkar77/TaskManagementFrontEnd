import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { getTask } from '../../Redux/Action/User/AuthUser';

const GetTask = ( { getTask } ) => {
    useEffect( () => {
        getTask();
    }, [] );
    return (
        <div>
            <h1>Get Task</h1>
        </div>
    );
};

GetTask.propTypes = {
    getTask: PropTypes.func.isRequired,
    listedTask: PropTypes.array.isRequired
};
const mapStateToProps = ( state ) => ( {
    listedTask: state.listedTask
} );

const mapDispatchToProps = {
    getTask
};


export default connect( mapStateToProps, mapDispatchToProps )( GetTask );
