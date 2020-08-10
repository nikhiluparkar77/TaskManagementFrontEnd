import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../../../Assets/Style/CreateUser";
import TextBox from "../../../Comman/Fields/TextBox";
import ButtonComponrnt from "../../../Comman/Fields/ButtonComponrnt";
import { createUser } from "../../../../Redux/Action/User/AuthUser";

import { Divider, Card, CardContent, Typography } from "@material-ui/core";

const CreateUserForm = ( { createUser } ) => {
  const history = useHistory();
  const [State, SetState] = useState( {
    name: "",
    email: "",
    password: "",
    joinDate: "",
    resignDate: "",
  } );
  const classes = useStyles();

  const OnChange = ( e ) => {
    SetState( {
      ...State,
      [e.target.name]: e.target.value,
    } );
  };
  const OnSubmit = ( e ) => {
    e.preventDefault();
    const userData = {
      name: State.name,
      email: State.email,
      password: State.password,
      joinDate: State.joinDate,
      resignDate: State.resignDate,
    };
    createUser( userData, history );
  };

  return (
    <div>
      <Card className={classes.CardClass}>
        <CardContent>
          <form onSubmit={OnSubmit}>
            <Typography gutterBottom variant="h5" component="h5">
              Create user
            </Typography>
            <Divider className={classes.DividClass} />
            <TextBox
              label="Name"
              type="text"
              name="name"
              value={State.name}
              onChange={OnChange}
            />
            <TextBox
              label="Email"
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
            <label>Join Date</label>
            <TextBox
              label=""
              type="date"
              name="joinDate"
              value={State.joinDate}
              onChange={OnChange}
            />
            <label>Resign Date</label>
            <TextBox
              label=""
              variant="outlined"
              type="date"
              name="resignDate"
              value={State.resignDate}
              onChange={OnChange}
            />
            <Divider className={classes.DividClass} />
            <ButtonComponrnt type="submit" value="Create User" />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

CreateUserForm.propTypes = {
  createUser: PropTypes.func.isRequired,
};

const mapStateToProps = ( state ) => ( {} );
const mapDispatchToProps = {
  createUser,
};

export default connect( mapStateToProps, mapDispatchToProps )( CreateUserForm );
