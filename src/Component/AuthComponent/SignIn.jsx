import React from "react";
import { Link } from "react-router-dom";
import TextBox from "../Comman/Fields/TextBox";
import ButtonComponrnt from "../Comman/Fields/ButtonComponrnt";
import { useStyles } from "../../Assets/Style/SignIn";
import {
  Grid,
  Divider,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const SignIn = () => {
  const classes = useStyles();
  return (
    <div className="SignIn" className={classes.root}>
      <Grid container spacing={12} className={classes.SignInComponent}>
        <form noValidate autoComplete="off" className={classes.formClass}>
          <Grid item lg={12}>
            <Card className={classes.CardClass}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  Sign In
                </Typography>
                <Divider className={classes.DividClass} />

                <TextBox label="Email Id" type="text" name="EmailId" />
                <TextBox label="Password" type="password" name="password" />

                <Divider className={classes.DividClass} />
                <ButtonComponrnt value="Sign In" />
              </CardContent>
            </Card>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default SignIn;
