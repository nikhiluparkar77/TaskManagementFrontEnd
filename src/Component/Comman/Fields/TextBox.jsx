import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  TextClasses: {
    width: "100%",
    margin: "10px 0",
  },
}));

const TextBox = ({ label, value, name, type, onChange }) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        id="outlined-basic"
        type={type}
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        className={classes.TextClasses}
        variant="outlined"
      />
    </div>
  );
};

export default TextBox;
