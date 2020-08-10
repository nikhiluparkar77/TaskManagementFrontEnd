import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../../Assets/Style/CreateUser";
import TextBox from "../../Comman/Fields/TextBox";
import ButtonComponrnt from "../../Comman/Fields/ButtonComponrnt";
import { userInfo, editUserInfo } from "../../../Redux/Action/Admin/AuthAdmin";
import {
  Divider,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";

const EditUserForm = ( { userInfo, editUserInfo, customprops, adminAuth } ) => {
  const history = useHistory();

  const classes = useStyles();
  const [State, SetState] = useState( {
    id: "",
    name: "",
    email: "",
    password: "",
    joinDate: "",
    resignDate: "",
  } );

  useEffect( () => {
    userInfo( customprops.match.params.userId );
  }, [] );

  useEffect( () => {
    if ( adminAuth.user !== null ) {
      SetState( {
        id: adminAuth.user._id,
        name: adminAuth.user.name,
        email: adminAuth.user.email,
        password: adminAuth.user.password,
        joinDate: adminAuth.user.joinDate,
        resignDate: adminAuth.user.resignDate,
      } );
    } else {
      SetState( {
        id: null,
        name: null,
        email: null,
        password: null,
        joinDate: null,
        resignDate: null,
      } );
    }
  }, [adminAuth.user] );

  const OnChange = ( e ) => {
    SetState( {
      ...State,
      [e.target.name]: e.target.value,
    } );
  };
  console.log();

  const OnSubmit = ( e ) => {
    e.preventDefault();
    let id = State.id;
    const userData = {
      name: State.name,
      email: State.email,
      password: State.password,
      joinDate: State.joinDate,
      resignDate: State.resignDate,
    };
    editUserInfo( id, userData, history );
  };

  return (
    <div className="EditUser" className={classes.EditUser}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Card className={classes.CardClass}>
              <CardContent>
                <form onSubmit={OnSubmit}>
                  <Typography gutterBottom variant="h5" component="h5">
                    Edit user
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
                  <ButtonComponrnt type="submit" value="Edit User" />
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

EditUserForm.propTypes = {
  userInfo: PropTypes.func.isRequired,
  editUserInfo: PropTypes.func.isRequired,
  adminAuth: PropTypes.object.isRequired,
};

const mapStateToProps = ( state ) => ( {
  adminAuth: state.adminAuth,
} );
const mapDispatchToProps = {
  userInfo,
  editUserInfo,
};

export default connect( mapStateToProps, mapDispatchToProps )( EditUserForm );
