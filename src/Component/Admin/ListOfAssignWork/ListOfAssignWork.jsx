import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory, Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { taskGetFunc, taskDeleteFunc } from "../../../Redux/Action/Admin/AuthAdmin";
import ButtonComponrnt from "../../Comman/Fields/ButtonComponrnt";


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
} );

const ListOfAssignWork = ( { taskGetFunc, taskDeleteFunc, adminAuth } ) => {

  const classes = useStyles();
  const [ ListTask, setListTask ] = useState( null );
  useEffect( () => {
    taskGetFunc();
  }, [] );

  useEffect( () => {
    setListTask( adminAuth.taskList );
  }, [ adminAuth.taskList ] );


  const HandleAssignDelete = ( id ) => {
    taskDeleteFunc( id );
  };
  useEffect( () => {
    setListTask( adminAuth.taskList );
  }, [ adminAuth.taskList ] );

  let AssignList;
  if ( ListTask == undefined ) {
    AssignList = <h1> No Task Avilable</h1>;
  } else {
    AssignList = (
      <TableContainer component={ Paper }>
        <Table className={ classes.table } aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Task</StyledTableCell>
              <StyledTableCell align="right">Start Time</StyledTableCell>
              <StyledTableCell align="right">End Time</StyledTableCell>
              <StyledTableCell align="right">Priority</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { ListTask.map( ( item, index ) => (
              <StyledTableRow key={ index }>
                <StyledTableCell component="th" scope="row">
                  { item.userId.name }
                </StyledTableCell>
                <StyledTableCell align="right">{ item.taskAssign }</StyledTableCell>
                <StyledTableCell align="right">{ item.StartTime }</StyledTableCell>
                <StyledTableCell align="right">{ item.EndTime }</StyledTableCell>
                <StyledTableCell align="right">{ item.Priority }</StyledTableCell>
                <StyledTableCell align="right">{ item.Status }</StyledTableCell>
                <StyledTableCell>
                  <ButtonComponrnt
                    onClick={ ( e ) => {
                      HandleAssignDelete( item._id );
                    } }
                    value="Delete"
                  /></StyledTableCell>
              </StyledTableRow>
            ) ) }
          </TableBody>
        </Table>
      </TableContainer>
    );
  }


  return (
    <div>
      { AssignList }
    </div>
  );
};

ListOfAssignWork.propTypes = {
  adminAuth: PropTypes.object.isRequired,
  taskGetFunc: PropTypes.func.isRequired,
  taskDeleteFunc: PropTypes.func.isRequired
};

const mapStateToProps = ( state ) => ( {
  adminAuth: state.adminAuth
} );

const mapDispatchToProps = {
  taskGetFunc,
  taskDeleteFunc
};

export default connect( mapStateToProps, mapDispatchToProps )( ListOfAssignWork );
