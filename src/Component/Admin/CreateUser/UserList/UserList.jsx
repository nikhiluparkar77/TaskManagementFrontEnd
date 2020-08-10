import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import ButtonComponrnt from "../../../Comman/Fields/ButtonComponrnt";
import {
  userDelete,
  userListFunc,
} from "../../../../Redux/Action/Admin/AuthAdmin";
import {
  StyledTableCell,
  StyledTableRow,
  useStyles,
} from "../../../../Assets/Style/Table";
import {
  Table,
  TableBody,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
} from "@material-ui/core";

const UserListComponent = ({
  UserList,
  userListFunc,
  userDelete,
  adminAuth,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [ListUser, setListUser] = useState();
  useEffect((e) => {
    userListFunc();
  }, []);

  useEffect(
    (e) => {
      let UList = [ListUser];
      UList.push();
      setListUser(adminAuth.userList);
    },
    [adminAuth]
  );
  console.log(ListUser);
  const HandleUserDelete = (id) => {
    userDelete(id, history);
  };

  let DataList;
  if (ListUser == undefined) {
    DataList = <h1>No Employee List Avilable</h1>;
  } else {
    DataList = (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Joining Date</StyledTableCell>
              <StyledTableCell align="right">Regine Date</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ListUser.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {item.name}
                </StyledTableCell>
                <StyledTableCell align="right">{item.email}</StyledTableCell>
                <StyledTableCell align="right">
                  <Moment format="YYYY/MM/DD">{item.joinDate}</Moment>
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.resignDate === null ? (
                    "Now"
                  ) : (
                    <Moment format="YYYY/MM/DD">{item.resignDate}</Moment>
                  )}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link
                    className={classes.LinkClass}
                    to={`/admin/edit-user/${item._id}`}
                  >
                    <ButtonComponrnt value="Edit" />
                  </Link>{" "}
                  <ButtonComponrnt
                    onClick={(e) => {
                      HandleUserDelete(item._id);
                    }}
                    value="Delete"
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div>
      <h2>List Of User</h2>

      {DataList}
    </div>
  );
};

UserListComponent.propTypes = {
  userDelete: PropTypes.func.isRequired,
  userListFunc: PropTypes.func.isRequired,
  adminAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ adminAuth: state.adminAuth });
const mapDispatchToProps = { userDelete, userListFunc };

export default connect(mapStateToProps, mapDispatchToProps)(UserListComponent);
