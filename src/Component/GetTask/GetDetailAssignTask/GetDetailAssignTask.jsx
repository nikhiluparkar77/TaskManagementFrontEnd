import React, { useState, useEffect } from 'react';
import {
    Divider, InputLabel, FormControl, MenuItem, Select,
    Card,
    CardContent,
    Typography,
    Container,
    Grid,
} from "@material-ui/core";
import { useStyles } from "../../../Assets/Style/AssignDetails";
import TextBox from '../../Comman/Fields/TextBox';
import TextArea from '../../Comman/Fields/TextArea';
import ButtonComponrnt from '../../Comman/Fields/ButtonComponrnt';

const GetDetailAssignTask = () => {

    const classes = useStyles();
    const [ State, SetState ] = useState( {
        userId: "",
        taskAssign: "",
        StartTime: "",
        EndTime: "",
        Priority: "",
        Status: "",
        Comment: ""
    } );
    const OnChange = ( e ) => {
        SetState( {
            ...State,
            [ e.target.name ]: e.target.value,
        } );
    };


    const OnSubmit = ( e ) => {
        e.preventDefault();

    };

    return (
        <div className="EditUser" className={ classes.EditUser }>
            <Container>
                <Grid container spacing={ 2 }>
                    <Grid item md={ 12 }>
                        <Card className={ classes.CardClass }>
                            <CardContent>
                                <form onSubmit={ OnSubmit }>
                                    <Grid item md={ 12 }>
                                        <Typography gutterBottom variant="h5" component="h5">
                                            Assign Task Details
                                        </Typography>
                                    </Grid>
                                    <Divider className={ classes.DividClass } />
                                    <Grid container spacing={ 2 }>
                                        <Grid item md={ 12 }>
                                            <TextBox
                                                label="Task Assign"
                                                type="text"
                                                name="taskAssign"
                                                value={ State.taskAssign }
                                                onChange={ OnChange }
                                            />
                                        </Grid>

                                    </Grid>


                                    <Grid container spacing={ 2 }>
                                        <Grid item md={ 6 }>
                                            <label>Start Time</label>
                                            <TextBox
                                                label=""
                                                type="date"
                                                name="StartTime"
                                                value={ State.StartTime }
                                                onChange={ OnChange }
                                            />
                                        </Grid>
                                        <Grid item md={ 6 }>

                                            <label>End Time</label>
                                            <TextBox
                                                label=""
                                                type="date"
                                                name="EndTime"
                                                value={ State.EndTime }
                                                onChange={ OnChange }
                                            />

                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={ 2 }>
                                        <Grid item md={ 6 }>
                                            <FormControl
                                                variant="outlined"
                                                className={ classes.TextClasses }
                                            >
                                                <InputLabel id="demo-simple-select-outlined-label">
                                                    Priority
                                                </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={ State.Priority }
                                                    onChange={ OnChange }
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
                                        </Grid>
                                        <Grid item md={ 6 }>

                                            <FormControl
                                                variant="outlined"
                                                className={ classes.TextClasses }
                                            >
                                                <InputLabel id="demo-simple-select-outlined-label">
                                                    Status </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={ State.Status }
                                                    onChange={ OnChange }
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
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={ 2 }>
                                        <Grid item md={ 12 }>
                                            <TextArea
                                                label="Comment"
                                                type="text"
                                                rows={ 4 }
                                                name="Comment"
                                                value={ State.Comment }
                                                onChange={ OnChange }
                                            />
                                        </Grid>

                                    </Grid>




                                    <Divider className={ classes.DividClass } />
                                    <ButtonComponrnt type="submit" value="Submit" />
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default GetDetailAssignTask;
