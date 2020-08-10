import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  LinkClass: {
    textDecoration: "none",
    color: "#fff",
  },
  adminAvatar: {
    width: "30px!important",
    height: "30px!important",
    borderRadius: "50%",
    marginRight: "10px",
  },
  ButtonClass: {
    color: "#fff",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));
