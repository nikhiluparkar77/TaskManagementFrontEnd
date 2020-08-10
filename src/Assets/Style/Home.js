import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "100%",
    },
  },
  HomeClass: {
    overflowX: "hidden",
    background: "#e0e0e0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    paddingTop: "7%",
    position: "relative",
  },
}));
