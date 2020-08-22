import React, { useState, useEffect } from 'react';
import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { getCompleteTask } from '../../../Redux/Action/Admin/AuthAdmin';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Grid, } from "@material-ui/core";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

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
    root: {
        flexGrow: 1,
        margin: "4% 0%",
    },
} );

const TaskStatus = ( { getCompleteTask, adminAuth } ) => {
    const classes = useStyles();
    const [ TaskStatus, setTaskStatus ] = useState( [] );

    useEffect( () => {
        getCompleteTask();
    }, [] );

    useEffect( () => {
        setTaskStatus( adminAuth.CompleteTask );
    }, [ adminAuth.taskList ] );



    useEffect( () => {
        setTaskStatus( adminAuth.CompleteTask );
    }, [ adminAuth.CompleteTask ] );


    let StatusTask;
    if ( TaskStatus.length === 0 ) {
        StatusTask = <h1> Not Completed Task Avilable</h1>;
    } else {
        StatusTask = (
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
                        { TaskStatus.map( ( item, index ) => (
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
                                    {/* <ButtonComponrnt
                                        onClick={ ( e ) => {
                                            HandleAssignDelete( item._id );
                                        } }
                                        value="Delete"
                                    /> */}
                                </StyledTableCell>
                            </StyledTableRow>
                        ) ) }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    return (
        <div className="AdminCompleteTask" className={ classes.root }>
            <Container>
                <Grid container spacing={ 2 }>
                    <Grid item md={ 12 }>
                        <h4>Task Status</h4>
                        { StatusTask }
                    </Grid>
                </Grid>

            </Container>

        </div>
    );
};


TaskStatus.propTypes = {
    getCompleteTask: PropTypes.func.isRequired,
    adminAuth: PropTypes.object.isRequired,
};

const mapStateToProps = ( state ) => ( {
    adminAuth: state.adminAuth,
} );
const mapDispatchToProps = {
    getCompleteTask,
};

export default connect( mapStateToProps, mapDispatchToProps )( TaskStatus );