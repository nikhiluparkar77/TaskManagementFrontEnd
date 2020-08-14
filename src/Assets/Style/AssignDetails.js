import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles( ( theme ) => ( {
    root: {
        "& > *": {
            margin: theme.spacing( 0 ),
            width: "100%",
        },
    },
    CreateUser: {
        margin: "5% 0%",
    },
    EditUser: {
        margin: "5% 0%",
        display: "block",
    },
    SignInComponent: {
        margin: "5% 0%",
    },

    formClass: {
        margin: "30px auto",
        display: "block",
    },
    CardClass: {
        width: "1000px",
        border: "1px solid #eee",
        margin: "auto",
        display: "block",
    },
    DividClass: {
        margin: "15px 0px",
    },
    TextClasses: {
        width: "100%",
        margin: "10px 0",
    },
    LinkClass: {
        textDecoration: "none",
        color: "#3f51b5",
    },
    classRight: {
        float: "right",
    },
} ) );
