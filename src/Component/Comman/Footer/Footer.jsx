import React from "react";
import { useStyles } from "../../../Assets/Style/Footer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  const classes = useStyles();
  let date = new Date();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              @ Copyright {date.getFullYear()} All Rights Reserved.
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Footer;
