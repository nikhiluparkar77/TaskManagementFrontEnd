import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { useStyles } from "../../../Assets/Style/Header";
import {
  Container,
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { AdminLogout } from "../../../Redux/Action/Admin/AuthAdmin";
import { UserLogout } from "../../../Redux/Action/User/AuthUser";

const Header = ( { AdminLogout, adminAuth, UserLogout, userAuth } ) => {
  const classes = useStyles();
  const { isAuthenticated } = adminAuth;


  const LogoutAdmin = () => {
    AdminLogout();
  };

  const LogoutUser = () => {
    UserLogout();
  };







  const AdminLink = (
    <>
      <Link className={ classes.LinkClass } to="/admin/dashbord">
        <Button color="inherit">DashBord</Button>
      </Link>
      <Avatar
        alt={ isAuthenticated.name }
        className={ classes.adminAvatar }
        src={ isAuthenticated.avatar }
      />{ " " }
      <Button color="inherit" onClick={ LogoutAdmin }>
        { " " }
        Logout
      </Button>
    </>
  );
  const GestLink = (
    <>
      <Link className={ classes.LinkClass } to="/sign-in">
        <Button color="inherit">User</Button>
      </Link>
      <Link className={ classes.LinkClass } to="/admin/sign-in">
        <Button color="inherit">Admin</Button>
      </Link>
    </>
  );

  const UserLink = (
    <>

      <Link className={ classes.LinkClass } to="/home">
        <Button color="inherit">Home</Button>
      </Link>
      <Avatar
        alt={ userAuth.isAuthenticated.name }
        className={ classes.adminAvatar }
        src={ userAuth.isAuthenticated.avatar }
      />{ " " }
      <Button color="inherit" onClick={ LogoutUser }>
        { " " }
        Logout
      </Button>
    </>
  );



  return (
    <div>
      <div className={ classes.root }>
        <AppBar position="static">
          <Container>
            <Toolbar>
              { " " }
              <Typography variant="h6" className={ classes.title }>
                <Link className={ classes.LinkClass } to="/">
                  Tast Management System
                </Link>
              </Typography>

              { isAuthenticated ? AdminLink : GestLink }

              { userAuth.isAuthenticated ? UserLink : GestLink }
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
  );
};

Header.propTypes = {
  AdminLogout: PropTypes.func.isRequired,
  adminAuth: PropTypes.object.isRequired,
  UserLogout: PropTypes.func.isRequired,
  userAuth: PropTypes.object.isRequired,
};

const mapStateToProps = ( state ) => ( {
  adminAuth: state.adminAuth,
  userAuth: state.userAuth
} );

const mapDispatchToProps = {
  AdminLogout,
  UserLogout
};

export default connect( mapStateToProps, mapDispatchToProps )( Header );
