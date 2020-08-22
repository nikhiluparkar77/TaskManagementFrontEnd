import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( ( theme ) => ( {
  root: {
    flexGrow: 1,
    margin: "4% 0%",
  },
  LinkClass: {
    textDecoration: "none",
    color: "#3f51b5",
  },
  menuButton: {
    marginRight: theme.spacing( 2 ),
  },
  ButtonClass: {
    width: "100%",
    marginBottom: "20px",
  },
} ) );
