import React, { useState, useEffect } from 'react';
import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { getTask } from '../../Redux/Action/User/AuthUser';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import ButtonComponrnt from '../../Component/Comman/Fields/ButtonComponrnt';


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

const CompletedTask = ( { getTask, userAuth } ) => {
    const classes = useStyles();
    const [ CompleteTaskList, SetCompleteTaskList ] = useState( [] );
    useEffect( () => {
        getTask();
    }, [] );

    useEffect( () => {
        SetCompleteTaskList( userAuth.listedTask );
    }, [ userAuth.listedTask ] );

    console.log( CompleteTaskList );
    let CompleteList;
    if ( CompleteTaskList.length === 0 ) {
        CompleteList = <h1> No Assign Task Avilable</h1>;
    } else {
        CompleteList = (
            <TableContainer component={ Paper }>
                <Table className={ classes.table } aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Task</StyledTableCell>
                            <StyledTableCell align="left">Start Time</StyledTableCell>
                            <StyledTableCell align="left">End Time</StyledTableCell>

                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { CompleteTaskList.map( ( item, index ) => (
                            <StyledTableRow key={ index }>
                                <StyledTableCell component="th" scope="row">
                                    { item.userId.name }
                                </StyledTableCell>
                                <StyledTableCell align="left">{ item.taskId.taskAssign }</StyledTableCell>
                                <StyledTableCell align="left"> <Moment format="YYYY/MM/DD">{ item.StartTime }</Moment></StyledTableCell>
                                <StyledTableCell align="left"><Moment format="YYYY/MM/DD">{ item.EndTime }</Moment></StyledTableCell>

                                <StyledTableCell align="left">{ item.Status }</StyledTableCell>
                                <StyledTableCell>
                                    <Link to={ `/get-details/${ item._id }` }>
                                        <ButtonComponrnt
                                            value="Details"
                                        />
                                    </Link> </StyledTableCell>
                            </StyledTableRow>
                        ) ) }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
    return (
        <div className="GetAssignTask" className={ classes.GetTasked }>
            <Container maxWidth="lg">
                <Grid container spacing={ 3 }>
                    <Grid item md={ 12 }>
                        <h3>Get Completed Task</h3>
                        { CompleteList }
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

CompletedTask.propTypes = {
    getTask: PropTypes.func.isRequired,
    listedTask: PropTypes.array.isRequired,
    taskList: PropTypes.array.isRequired,
};
const mapStateToProps = ( state ) => ( {
    listedTask: state.listedTask,
    userAuth: state.userAuth
} );

const mapDispatchToProps = {
    getTask
};

export default connect( mapStateToProps, mapDispatchToProps )( CompletedTask );
