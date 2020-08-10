import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import CreateUserForm from "./UserForm/CreateUserForm";
import { useStyles } from "../../../Assets/Style/CreateUser";
import UserListComponent from "./UserList/UserList";
import { userListFunc } from "../../../Redux/Action/Admin/AuthAdmin";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const CreateUser = ({ adminAuth }) => {
  const classes = useStyles();

  return (
    <div className="CreateUser" className={classes.CreateUser}>
      <Container maxWidth="lg">
        <Grid>
          <Grid container spacing={2}>
            <Grid item md={5}>
              <CreateUserForm />
            </Grid>
            <Grid item md={7}>
              <UserListComponent />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

CreateUser.propTypes = {
  adminAuth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  adminAuth: state.adminAuth,
});

const mapDispatchToProps = {
  userListFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
