import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import TextBox from "../../Comman/Fields/TextBox";
import ButtonComponrnt from "../../Comman/Fields/ButtonComponrnt";
import { useStyles } from "../../../Assets/Style/SignIn";
import { AdminAuthSignIn } from "../../../Redux/Action/Admin/AuthAdmin";
import {
  Grid,
  Divider,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const AdminSignIn = ({ AdminAuthSignIn, adminAuth }) => {
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    if (adminAuth.isAuthenticated) {
      history.push("/admin/dashbord");
    }
  });

  const [State, SetState] = useState({
    email: "",
    password: "",
  });

  const OnChange = (e) => {
    SetState({
      ...State,
      [e.target.name]: e.target.value,
    });
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    const adminSignInData = {
      email: State.email,
      password: State.password,
    };
    AdminAuthSignIn(adminSignInData, history);
  };

  return (
    <div className="SignIn" className={classes.root}>
      <Grid container spacing={2} className={classes.AdminSignIn}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={OnSubmit}
          className={classes.formClass}
        >
          <Grid item lg={12}>
            <Card className={classes.CardClass}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  Admin Sign In
                </Typography>
                <Divider className={classes.DividClass} />
                <TextBox
                  label="Email Id"
                  type="text"
                  name="email"
                  value={State.email}
                  onChange={OnChange}
                />
                <TextBox
                  label="Password"
                  type="password"
                  name="password"
                  value={State.password}
                  onChange={OnChange}
                />

                <Divider className={classes.DividClass} />
                <ButtonComponrnt type="submit" value="Sign In" />
                <Link to="/admin/sign-up">
                  <ButtonComponrnt
                    value="Sign Up"
                    className={classes.classRight}
                  />
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

AdminSignIn.propTypes = {
  AdminAuthSignIn: PropTypes.func.isRequired,
  adminAuth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  adminAuth: state.adminAuth,
});

const mapDispatchToProps = {
  AdminAuthSignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminSignIn);
