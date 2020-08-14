import React, { useState, useEffect } from 'react';
import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { getTask, getAssignTask } from '../../../Redux/Action/User/AuthUser';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import ButtonComponrnt from '../../Comman/Fields/ButtonComponrnt';


const StyledTableCell = withStyles( ( theme ) => ( {
    head: {
        backgroundColor: "#3f51b5",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
} ) )( TableCell );

const StyledTableRow = withStyles( ( theme ) => ( {
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
} ) )( TableRow );


const useStyles = makeStyles( {
    table: {
        minWidth: 700,
    },
    GetTasked: {
        margin: "5% 0%",
    },
} );



const GetAssignTask = ( { getTask, getAssignTask, userAuth } ) => {

    const classes = useStyles();
    const [ TaskList, SetTaskList ] = useState( [] );
    useEffect( () => {
        getAssignTask();
        getTask();
    }, [] );

    useEffect( () => {
        SetTaskList( userAuth.taskList );
    }, [ userAuth.taskList ] );

    let AssignList;
    if ( TaskList.length === 0 ) {
        AssignList = <h1> No Assign Task Avilable</h1>;
    } else {
        AssignList = (
            <TableContainer component={ Paper }>
                <Table className={ classes.table } aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Task</StyledTableCell>
                            <StyledTableCell align="left">Start Time</StyledTableCell>
                            <StyledTableCell align="left">End Time</StyledTableCell>
                            <StyledTableCell align="left">Priority</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { TaskList.map( ( item, index ) => (
                            <StyledTableRow key={ index }>
                                <StyledTableCell component="th" scope="row">
                                    { item.userId.name }
                                </StyledTableCell>
                                <StyledTableCell align="left">{ item.taskAssign }</StyledTableCell>
                                <StyledTableCell align="left"> <Moment format="YYYY/MM/DD">{ item.StartTime }</Moment></StyledTableCell>
                                <StyledTableCell align="left"><Moment format="YYYY/MM/DD">{ item.EndTime }</Moment></StyledTableCell>
                                <StyledTableCell align="left">{ item.Priority }</StyledTableCell>
                                <StyledTableCell align="left">{ item.Status }</StyledTableCell>
                                <StyledTableCell>
                                    <Link to="/"></Link> <ButtonComponrnt
                                        value="Details"
                                    /></StyledTableCell>
                            </StyledTableRow>
                        ) ) }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }



    console.log( TaskList );
    return (
        <div className="GetAssignTask" className={ classes.GetTasked }>
            <Container maxWidth="lg">
                <Grid container spacing={ 3 }>
                    <Grid item md={ 12 }>
                        <h3>Get Assigned Task</h3>
                        { AssignList }
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

GetAssignTask.propTypes = {
    getTask: PropTypes.func.isRequired,
    getAssignTask: PropTypes.func.isRequired,
    listedTask: PropTypes.array.isRequired,
    taskList: PropTypes.array.isRequired,
};
const mapStateToProps = ( state ) => ( {
    listedTask: state.listedTask,
    userAuth: state.userAuth
} );

const mapDispatchToProps = {
    getTask,
    getAssignTask
};


export default connect( mapStateToProps, mapDispatchToProps )( GetAssignTask );
