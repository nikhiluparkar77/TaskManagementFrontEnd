import React from "react";
import { useStyles } from "../../Assets/Style/Home";
import { Container } from "@material-ui/core";

const HomeComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.HomeClass}>
        <Container></Container>
      </div>
    </div>
  );
};

export default HomeComponent;
