import React, { useState, useEffect } from 'react';
import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { getDetailsTask, getDeleteDatailTask } from '../../../../Redux/Action/Admin/AuthAdmin';
import { useStyles } from "../../../../Assets/Style/SignIn";
import { Container, Grid, Typography } from "@material-ui/core";
import ButtonComponrnt from '../../../Comman/Fields/ButtonComponrnt';



const DetailsTaskStatus = ( { getDetailsTask, getDeleteDatailTask, customprops, adminAuth } ) => {
    const classes = useStyles();
    const [ DetailState, SetDetailState ] = useState( "" );
    useEffect( () => {
        getDetailsTask( customprops.match.params.tid );
    }, [] );
    useEffect( () => {
        SetDetailState( adminAuth.DetailCompleteTask );
    }, [ adminAuth.DetailCompleteTask ] );

    const HandeleDelete = ( id ) => {
        getDeleteDatailTask( id );
    };
    useEffect( () => {
        getDetailsTask( customprops.match.params.tid );
    }, [] );


    let DatailCompleteTask;
    if ( DetailState.length === 0 ) {
        DatailCompleteTask = <h1>No Data Avilable</h1>;
    } else {
        DatailCompleteTask = (
            <div>
                <Grid container spacing={ 2 }>
                    <Grid item md={ 10 }>
                        <p className={ classes.paraClass }>Employee:- { DetailState.userId.name }</p>
                        <p className={ classes.paraClass }>Task Assign:- { DetailState.taskId.taskAssign }</p>
                        <p className={ classes.paraClass }>Start Time:- <Moment format="YYYY/MM/DD">{ DetailState.StartTime }</Moment></p>
                        <p className={ classes.paraClass }>End Time:- <Moment format="YYYY/MM/DD">{ DetailState.EndTime }</Moment></p>
                        <p className={ classes.paraClass }>Status:- { DetailState.Status }</p>
                        <p className={ classes.paraClass }>Comment:- { DetailState.Comment }</p>
                        <ButtonComponrnt value="Delete" onClick={ ( e ) => HandeleDelete( DetailState._id ) } />
                    </Grid>
                </Grid>
            </div>
        );
    }
    console.log( DetailState );

    return (
        <div className="DetailsClass">
            <div className={ classes.AdminSignIn } >
                <Container>
                    <Grid container spacing={ 2 }>
                        <Grid item md={ 12 }>
                            <Typography gutterBottom variant="h5" component="h5">
                                Completed Details Task
                        </Typography>
                            { DatailCompleteTask }
                        </Grid>
                    </Grid>
                </Container>

            </div>
        </div>

    );
};

DetailsTaskStatus.propTypes = {
    getDetailsTask: PropTypes.func.isRequired,
    getDeleteDatailTask: PropTypes.func.isRequired,
    adminAuth: PropTypes.object.isRequired,
};

const mapStateToProps = ( state ) => ( {
    adminAuth: state.adminAuth,
} );
const mapDispatchToProps = {
    getDetailsTask,
    getDeleteDatailTask
};

export default connect( mapStateToProps, mapDispatchToProps )( DetailsTaskStatus );


