import React from "react";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  TextClasses: {
    width: "100%",
    margin: "10px 0",
  },
}));

const SelectArea = ({ label, value, name, type }) => {
  const classes = useStyles();
  return (
    <div>
      <Select
        id="outlined-basic"
        type={type}
        label={label}
        name={name}
        className={classes.TextClasses}
        variant="outlined"
      >
        <MenuItem value={value}>{value}</MenuItem>
      </Select>
    </div>
  );
};

export default SelectArea;
