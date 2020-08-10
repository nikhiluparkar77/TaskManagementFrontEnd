import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../../../Assets/Style/Link";

const ButtonComponrnt = ({ value, type, className, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      type={type}
      className={className}
      color="primary"
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default ButtonComponrnt;
