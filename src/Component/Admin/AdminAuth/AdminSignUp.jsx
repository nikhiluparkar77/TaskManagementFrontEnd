import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextBox from "../../Comman/Fields/TextBox";
import ButtonComponrnt from "../../Comman/Fields/ButtonComponrnt";
import { useStyles } from "../../../Assets/Style/SignUp";
import { AdminAuthSignUp } from "../../../Redux/Action/Admin/AuthAdmin";
import { Grid, Divider, Card, CardContent, Typography, } from "@material-ui/core";

const AdminSignUp = ( { AdminAuthSignUp, adminAuth } ) => {
  const classes = useStyles();
  let history = useHistory();

  useEffect( () => {
    if ( adminAuth.isAuthenticated ) {
      history.push( "/admin/dashbord" );
    }
  }, [] );

  const [ State, SetState ] = useState( {
    name: "",
    email: "",
    password: "",
  } );

  const OnSubmit = ( e ) => {
    e.preventDefault();
    const adminSignData = {
      name: State.name,
      email: State.email,
      password: State.password,
    };

    AdminAuthSignUp( adminSignData, history );
  };

  const HandleChange = ( e ) => {
    SetState( {
      ...State,
      [ e.target.name ]: e.target.value,
    } );
  };

  return (
    <div className="SignIn" className={ classes.root }>
      <Grid container spacing={ 12 } className={ classes.AdminSignUp }>
        <form onSubmit={ OnSubmit } className={ classes.formClass }>
          <Grid item lg={ 12 }>
            <Card className={ classes.CardClass }>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  Admin Sign Up
                </Typography>
                <Divider className={ classes.DividClass } />

                <TextBox
                  label="Name"
                  type="text"
                  name="name"
                  value={ State.name }
                  onChange={ HandleChange }
                />
                <TextBox
                  label="Email Id"
                  type="text"
                  name="email"
                  value={ State.email }
                  onChange={ HandleChange }
                />
                <TextBox
                  label="Password"
                  type="password"
                  name="password"
                  value={ State.password }
                  onChange={ HandleChange }
                />

                <Divider className={ classes.DividClass } />
                <ButtonComponrnt type="submit" value="Sign Up" />
                <Link to="/admin/sign-in">
                  <ButtonComponrnt
                    className={ classes.classRight }
                    type="submit"
                    value="Sign In"
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

AdminSignUp.propTypes = {
  AdminAuthSignUp: PropTypes.func.isRequired,
  adminAuth: PropTypes.object.isRequired,
};

const mapStateToProps = ( state ) => ( {
  adminAuth: state.adminAuth,
} );

const mapDispatchToProps = {
  AdminAuthSignUp,
};

export default connect( mapStateToProps, mapDispatchToProps )( AdminSignUp );
