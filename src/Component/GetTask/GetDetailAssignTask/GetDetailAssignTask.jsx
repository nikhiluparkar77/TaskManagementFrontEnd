import React, { useState, useEffect } from 'react';
import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Divider, InputLabel, FormControl, MenuItem, Select, Card, CardContent, Typography, Container, Grid, } from "@material-ui/core";
import { useStyles } from "../../../Assets/Style/AssignDetails";
import TextBox from '../../Comman/Fields/TextBox';
import TextArea from '../../Comman/Fields/TextArea';
import ButtonComponrnt from '../../Comman/Fields/ButtonComponrnt';
import { getSingleTask, addCompltedTask } from '../../../Redux/Action/User/AuthUser';

const GetDetailAssignTask = ( { getSingleTask, customprops, userAuth, addCompltedTask } ) => {
    const classes = useStyles();
    const [ State, SetState ] = useState( {
        taskId: "",
        taskAssign: "",
        StartTime: "",
        EndTime: "",
        Priority: "",
        Status: "",
        Comment: ""
    } );


    useEffect( () => {
        getSingleTask( customprops.match.params.gtId );
    }, [] );

    useEffect( () => {
        if ( userAuth.taskDetails == null ) {
            SetState( {
                taskId: "",
                taskAssign: "",
                StartTime: "",
                EndTime: "",
                Priority: "",
                Status: "",
                Comment: ""
            } );
        } else {
            SetState( {
                taskId: userAuth.taskDetails._id,
                taskAssign: userAuth.taskDetails.taskAssign,
                StartTime: userAuth.taskDetails.StartTime,
                EndTime: userAuth.taskDetails.EndTime,
                Priority: userAuth.taskDetails.Priority,
                Status: userAuth.taskDetails.Status,
                Comment: userAuth.taskDetails.Comment
            } );
        }

    }, [ userAuth.taskDetails ] );





    const OnChange = ( e ) => {
        SetState( {
            ...State,
            [ e.target.name ]: e.target.value,
        } );
    };


    const OnSubmit = ( e ) => {
        e.preventDefault();
        const TeskInfo = {
            taskId: userAuth.taskDetails._id,
            taskAssign: userAuth.taskDetails.taskAssign,
            StartTime: userAuth.taskDetails.StartTime,
            EndTime: userAuth.taskDetails.EndTime,
            Priority: userAuth.taskDetails.Priority,
            Status: State.Status,
            Comment: State.Comment
        };


        addCompltedTask( TeskInfo, customprops.history );

    };



    return (
        <div className="EditUser" className={ classes.EditUser }>
            <Container>


                <Grid container spacing={ 2 }>
                    <Grid item md={ 12 }>
                        <Card className={ classes.CardClass }>
                            <CardContent>
                                <form onSubmit={ OnSubmit }>
                                    <Grid item md={ 12 }>
                                        <Typography gutterBottom variant="h5" component="h5">
                                            Assign Task Details
                                        </Typography>
                                    </Grid>
                                    <Divider className={ classes.DividClass } />
                                    <Grid container spacing={ 2 }>
                                        <Grid item md={ 12 }>
                                            <Typography gutterBottom variant="h6" component="h6">
                                                Task:
                                            </Typography>
                                            { State.taskAssign }
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={ 2 }>
                                        <Grid item md={ 6 }>
                                            <Typography gutterBottom variant="h6" component="h6">
                                                Start Time:
                                            </Typography>
                                            <Moment format="YYYY/MM/DD">{ State.StartTime }</Moment>
                                        </Grid>
                                        <Grid item md={ 6 }>
                                            <Typography gutterBottom variant="h6" component="h6">
                                                End Time:
                                            </Typography>
                                            <Moment format="YYYY/MM/DD">{ State.EndTime }</Moment>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={ 2 }>
                                        <Grid item md={ 6 }>
                                            <FormControl
                                                variant="outlined"
                                                className={ classes.TextClasses }
                                            >
                                                <InputLabel id="demo-simple-select-outlined-label">
                                                    Priority
                                                </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={ State.Priority }
                                                    onChange={ OnChange }
                                                    name="Priority"
                                                    label="Priority"
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value="Very High">Very High</MenuItem>
                                                    <MenuItem value="High">High</MenuItem>
                                                    <MenuItem value="On Condition">On Condition</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item md={ 6 }>

                                            <FormControl
                                                variant="outlined"
                                                className={ classes.TextClasses }
                                            >
                                                <InputLabel id="demo-simple-select-outlined-label">
                                                    Status </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={ State.Status }
                                                    onChange={ OnChange }
                                                    label="Status"
                                                    name="Status"
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value="Completed">Completed</MenuItem>
                                                    <MenuItem value="Work on Progress">
                                                        Work on Progress
                                                        </MenuItem>
                                                    <MenuItem value="Not Started">Not Started</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={ 2 }>
                                        <Grid item md={ 12 }>
                                            <TextArea
                                                label="Comment"
                                                type="text"
                                                rows={ 4 }
                                                name="Comment"
                                                value={ State.Comment }
                                                onChange={ OnChange }
                                            />
                                        </Grid>
                                    </Grid>
                                    <Divider className={ classes.DividClass } />
                                    <ButtonComponrnt type="submit" value="Submit" />
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

GetDetailAssignTask.propTypes = {
    getSingleTask: PropTypes.func.isRequired,
    userAuth: PropTypes.object.isRequired,
    addCompltedTask: PropTypes.func.isRequired,
};

const mapStateToProps = ( state ) => ( {
    userAuth: state.userAuth
} );
const mapDispatchToProps = {
    getSingleTask,
    addCompltedTask
};

export default connect( mapStateToProps, mapDispatchToProps )( GetDetailAssignTask );
