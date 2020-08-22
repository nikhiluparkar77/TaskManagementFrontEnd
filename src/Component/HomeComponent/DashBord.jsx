import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../../Assets/Style/Home";
import { Container, Grid } from "@material-ui/core";
import ButtonComponrnt from "../Comman/Fields/ButtonComponrnt";
import CompletedTask from "../CompletedTask/CompletedTask";
import GetTask from "../GetTask/GetAssignTask/GetTask";

const DashBord = () => {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <div className={ classes.HomeClass }>
                <Container>
                    <Grid container spacing={ 2 }>
                        <Grid item md={ 6 }>
                            <Link to="/get-task" className={ classes.LinkClass }><ButtonComponrnt value="Get Task" className={ classes.ButtonClass } /></Link>
                        </Grid>
                        <Grid item md={ 6 }>
                            <Link to="/completed-task" className={ classes.LinkClass }><ButtonComponrnt value="Completed Task" className={ classes.ButtonClass } /></Link>
                        </Grid>
                    </Grid>
                    <Grid container spacing={ 1 }>
                        <Grid item md={ 12 }>
                            <GetTask />
                        </Grid>

                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default DashBord;
