import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
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

const Header = ({ AdminLogout, adminAuth }) => {
  const classes = useStyles();
  const { isAuthenticated } = adminAuth;

  const LogoutAdmin = () => {
    AdminLogout();
  };

  const AdminLink = (
    <>
      <Avatar
        alt={isAuthenticated.name}
        className={classes.adminAvatar}
        src={isAuthenticated.avatar}
      />{" "}
      <Button color="inherit" onClick={LogoutAdmin}>
        {" "}
        Logout
      </Button>
    </>
  );
  const GestLink = (
    <>
      <Link className={classes.LinkClass} to="/sign-in">
        <Button color="inherit">User</Button>
      </Link>
      <Link className={classes.LinkClass} to="/admin/sign-in">
        <Button color="inherit">Admin</Button>
      </Link>
    </>
  );

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Container>
            <Toolbar>
              {" "}
              <Typography variant="h6" className={classes.title}>
                <Link className={classes.LinkClass} to="/admin/dashbord">
                  Tast Management System
                </Link>
              </Typography>
              {isAuthenticated ? AdminLink : GestLink}
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
};

const mapStateToProps = (state) => ({
  adminAuth: state.adminAuth,
});

const mapDispatchToProps = {
  AdminLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
