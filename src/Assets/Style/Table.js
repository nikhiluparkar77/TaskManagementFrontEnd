import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TableRow, TableCell } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const useStyles = makeStyles({
  table: {
    minWidth: "700",
  },
  LinkClass: {
    textDecoration: "none",
    color: "#3f51b5",
  },
});
