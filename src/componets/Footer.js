import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Fade} from "react-awesome-reveal";
import { FaChessBoard, FaTwitterSquare } from "react-icons/fa";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 1,
    position: "relative",
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    overflow: "hidden",
    height: "25vh",
    // flexDirection: "column",
  },
  boardSvg: {
    position: "absolute",
    width: "100%",
    height: "100rem",
    margin: "0 auto",
  },

  facebookIncon: {
    position: "absolute",
    top: "2rem",
    left: "-8rem",
    width: "9rem",
    height: "auto",
    cursor: "pointer",
    zIndex: "100",
   
  },
  linkedInIcon: {
    position: "absolute",
    top: "2rem",
    left: "-2rem",
    width: "9rem",
    height: "auto",
    cursor: "pointer",
    zIndex: "100",
    
  },
  gitHubIcon: {
    position: "absolute",
    top: "2.3rem",
    left: "11rem",
    width: "7.5rem",
    height: "auto",
    cursor: "pointer",
    zIndex: "100",
  
  },
  twitterIncon: {
    position: "absolute",
    top: "2.3rem",
    left: "4.6rem",
    width: "8rem",
    height: "auto",
    cursor: "pointer",
    zIndex: "100",
  },
  MuiButton: {
    padding: 0,
  },

  tittleSocial: {
    position: "absolute",
    top: "2rem",
    left: "18rem",
    fontWeight: "700",
    fontSize: "25px",
  },
  titleCopyRight: {
    position: "absolute",
    top: "15rem",
    left: "85rem",
    fontWeight: "700",
    fontSize: "20px",
  },
  titleCopyRight2: {
    position: "absolute",
    top: "19rem",
    left: "84.5rem",
    fontWeight: "700",
    fontSize: "13px",
  },
  "@keyframes pulsate": {
    "0%": {
      transform: "scale(1)",
    },

    "50%": {
      transform: "scale(1.08)",
    },

    "100%": {
      transform: "scale(1)",
    },
  },
  animatedSocIcon: {
    animation: `$pulsate 1s infinite ${theme.transitions.easing.easeInOut}`,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Fade>
      <AppBar position="static" className={classes.footer}>
        <Toolbar>
          <Grid container justify="center" align="center">
            <Grid item>
              <Button
                className={classes.MuiButton}
                component={"a"}
                color="primary"
                href="https://www.facebook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookIcon
                  className={`${classes.facebookIncon} ${classes.animatedSocIcon}`}
                />
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.MuiButton}
                color="primary"
                component={"a"}
                href="https://www.linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedInIcon className={`${classes.linkedInIcon} ${classes.animatedSocIcon}`} />
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.MuiButton}
                color="primary"
                component={"a"}
                href="https://www.twitter.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitterSquare className={`${classes.twitterIncon} ${classes.animatedSocIcon}`}/>
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.MuiButton}
                color="primary"
                component={"a"}
                href="https://www.github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHubIcon className={`${classes.gitHubIcon} ${classes.animatedSocIcon}`}/>
              </Button>
            </Grid>
          </Grid>
          <FaChessBoard className={classes.boardSvg} />
      
          <Typography
            variant="subtitle2"
            color="primary"
            className={classes.titleCopyRight}
          >
            <p>Florida, The United States </p>
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            className={classes.titleCopyRight2}
          >
            <p>
              &copy;{new Date().getFullYear()} Ramon Lorente | All right
              reserved
            </p>
          </Typography>
        </Toolbar>
      </AppBar>
    </Fade>
  );
};

export default Footer;
