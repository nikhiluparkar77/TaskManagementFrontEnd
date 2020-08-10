import React, { useState, useEffect } from "react";
import { useStyles } from "../../../Assets/Style/CreateUser";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextBox from "../../Comman/Fields/TextBox";
import ButtonComponrnt from "../../Comman/Fields/ButtonComponrnt";
import { taskAssignFunc } from "../../../Redux/Action/Task/Task";
import { userListFunc } from "../../../Redux/Action/Admin/AuthAdmin";
import {
  Grid,
  Container,
  Divider,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

const TaskAssign = ( { taskAssignFunc, userListFunc, adminAuth, customprops } ) => {
  const classes = useStyles();

  useEffect( () => {
    userListFunc();
  }, [] );
  const [userId, SetuserId] = useState( "" );

  const [State, SetState] = useState( {
    employee: [],
    taskAssign: "",
    StartTime: "",
    EndTime: "",
    Priority: "",
    Status: ""
  } );


  useEffect( () => {
    if ( adminAuth.userList === null ) {
      SetState( {
        employee: []
      } )

    } else {
      SetState( {
        employee: adminAuth.userList
      } )

    }
  }, [adminAuth.userList] );



  const OnChange = ( e ) => {
    SetState( {
      ...State,
      [e.target.name]: e.target.value
    } )
  }

  const HandleClick = ( id ) => {
    SetuserId( id );
  }

  let itemOption = State.employee.map( ( item, index ) => (
    <MenuItem value={item._id} key={index} onClick={( e ) => { HandleClick( item._id ) }}>{item.name}</MenuItem>
  ) )


  const OnSubmit = ( e ) => {
    e.preventDefault();
    let history = customprops.history;
    const taskData = {
      userId: userId,
      taskAssign: State.taskAssign,
      StartTime: State.StartTime,
      EndTime: State.EndTime,
      Priority: State.Priority,
      Status: State.Status
    }

    taskAssignFunc( taskData, history );
  }


  return (
    <div className="taskAssign" className={classes.EditUser}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Card className={classes.CardClass}>
              <CardContent>
                <form onSubmit={OnSubmit}>
                  <Typography gutterBottom variant="h5" component="h5">
                    Task Assign
                  </Typography>
                  <Divider className={classes.DividClass} />
                  <FormControl
                    variant="outlined"
                    className={classes.TextClasses}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Employee Name
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={userId}
                      onChange={OnChange}
                      label="Employee Name"
                    >
                      {itemOption}
                    </Select>
                  </FormControl>
                  <TextBox
                    label="Task Assign"
                    type="text"
                    name="taskAssign"
                    value={State.taskAssign}
                    onChange={OnChange}
                  />
                  <label>Start Time</label>
                  <TextBox
                    label=""
                    type="date"
                    name="StartTime"
                    value={State.StartTime}
                    onChange={OnChange}
                  />
                  <label>End Time</label>
                  <TextBox
                    label=""
                    variant="outlined"
                    type="date"
                    name="EndTime"
                    value={State.EndTime}
                    onChange={OnChange}
                  />
                  <FormControl
                    variant="outlined"
                    className={classes.TextClasses}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Priority
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={State.Priority}
                      onChange={OnChange}
                      name="Priority"
                      label="Priority"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Very High">Very High</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                      <MenuItem value="On Condition">On Condition</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    className={classes.TextClasses}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={State.Status}
                      onChange={OnChange}
                      label="Status"
                      name="Status"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                      <MenuItem value="Work on Progress">
                        Work on Progress
                      </MenuItem>
                      <MenuItem value="Not Started">Not Started</MenuItem>
                    </Select>
                  </FormControl>

                  <Divider className={classes.DividClass} />
                  <ButtonComponrnt type="submit" value="Task Assign" />
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
};

TaskAssign.propTypes = {
  adminAuth: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
  taskAssignFunc: PropTypes.func.isRequired,
  userListFunc: PropTypes.func.isRequired,
};

const mapStateToProps = ( state ) => ( {
  adminAuth: state.adminAuth,
  task: state.task,
} );

const mapDispatchToProps = {
  taskAssignFunc,
  userListFunc,
};

export default connect( mapStateToProps, mapDispatchToProps )( TaskAssign );
