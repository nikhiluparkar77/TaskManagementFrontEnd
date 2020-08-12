import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "../../Assets/Style/Admin";
import ListOfAssignWork from "./ListOfAssignWork/ListOfAssignWork";
import ButtonComponrnt from "../Comman/Fields/ButtonComponrnt";

const AdminComponent = () => {
  const classes = useStyles();

  return (
    <div className="Admin" className={ classes.root }>
      <Container maxWidth="lg">
        <Grid container spacing={ 3 }>
          <Grid item md={ 4 }>
            <Link to="/admin/create-user" className={ classes.LinkClass }>
              <ButtonComponrnt
                value="User Info"
                className={ classes.ButtonClass }
              />
            </Link>
          </Grid>
          <Grid item md={ 4 }>
            <Link to="/admin/task-assign" className={ classes.LinkClass }>
              { " " }
              <ButtonComponrnt
                value="Task Assign"
                className={ classes.ButtonClass }
              />
            </Link>
          </Grid>
          <Grid item md={ 4 }>
            <ButtonComponrnt
              value="Task Status"
              className={ classes.ButtonClass }
            />
          </Grid>

        </Grid>
        <Grid container spacing={ 3 }>
          <Grid item md={ 12 }>
            <ListOfAssignWork />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdminComponent;
