
import React from "react";

import logo from '../img/logo-king.png';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import createMuiTheme from "./Theme";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    overflow: "hidden",
  },
  paper: {
    textAlign: "center",
    color: "white",
    backgroundColor: theme.palette.common.blue,
    fontSize: "16px",
    boxShadow: "none",
    margin: "20px 0",
  },
  logoFooter: {
    width: "25%",
    [theme.breakpoints.down("md")]: {
      width:"21%"
    },
    [theme.breakpoints.down("xs")]: {
      width:"15%"
    },
  }
}));

const FooterMUI = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs zeroMinWidth>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs zeroMinWidth>
        <Paper className={classes.paper}>
            <img src={logo} className={classes.logoFooter} alt="logo" />
          </Paper>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Paper className={classes.paper}>hello</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            &copy;{new Date().getFullYear()} Ramon Lorente | All right reserved
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterMUI;
