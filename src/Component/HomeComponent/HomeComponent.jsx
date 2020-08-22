import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../../Assets/Style/Home";
import { Container, Grid } from "@material-ui/core";
import ButtonComponrnt from "../Comman/Fields/ButtonComponrnt";
import CompletedTask from "../CompletedTask/CompletedTask";
import GetTask from "../GetTask/GetAssignTask/GetTask";

const HomeComponent = () => {
  const classes = useStyles();
  return (
    <div className={ classes.root }>
      <div className={ classes.HomeClass }>
        <Container>
          <Grid container spacing={ 2 }>

          </Grid>
          <Grid container spacing={ 1 }>


          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomeComponent;
