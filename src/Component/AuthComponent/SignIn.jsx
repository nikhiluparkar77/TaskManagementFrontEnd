import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextBox from "../Comman/Fields/TextBox";
import ButtonComponrnt from "../Comman/Fields/ButtonComponrnt";
import { useStyles } from "../../Assets/Style/SignIn";
import { Grid, Divider, Card, CardContent, Typography, } from "@material-ui/core";
import { userSignIn } from "../../Redux/Action/User/AuthUser";


const SignIn = ( { userSignIn, userAuth, }, customprops ) => {
  const classes = useStyles();
  const history = useHistory();
  useEffect( () => {
    if ( userAuth.isAuthenticated ) {
      history.push( "/home" );
    }
  } );



  const [ State, SetState ] = useState( {
    email: "",
    password: "",
  } );

  const OnSubmit = ( e ) => {
    e.preventDefault();
    const userData = {
      email: State.email,
      password: State.password
    };
    userSignIn( userData );
  };

  const OnChange = ( e ) => {
    SetState( {
      ...State,
      [ e.target.name ]: e.target.value,
    } );
  };

  return (
    <div className="SignIn" className={ classes.root }>
      <Grid container spacing={ 1 } className={ classes.SignInComponent }>
        <form noValidate autoComplete="off" onSubmit={ OnSubmit } className={ classes.formClass }>
          <Grid item lg={ 12 }>
            <Card className={ classes.CardClass }>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  Sign In
                </Typography>
                <Divider className={ classes.DividClass } />

                <TextBox label="Email Id" onChange={ OnChange } value={ State.email } type="text" name="email" />
                <TextBox label="Password" onChange={ OnChange } value={ State.password } type="password" name="password" />

                <Divider className={ classes.DividClass } />
                <ButtonComponrnt type="submit" value="Sign In" />
              </CardContent>
            </Card>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

SignIn.propTypes = {
  userSignIn: PropTypes.func.isRequired
};


const mapStateToProps = ( state ) => ( {
  userAuth: state.userAuth
} );

const mapDispatchToProps = {
  userSignIn
};

export default connect( mapStateToProps, mapDispatchToProps )( SignIn );
