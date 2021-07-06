import React from "react";

import { makeStyles } from "@material-ui/styles";
import heroImage from "../img/header.jpg";

// import Typed from "react-typed";

import Button from "@material-ui/core/Button";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 100,
  },
  headerContainer: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    }},
    mainInfo: {
      display: "flex",
      position: "absolute",
      top: 50,
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      zIndex: 10,

      "& h1": {
      fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      fontWeight: 400,
      fontSize: "60px",
      color: "#fff",
        margin: "55px 0",
      
        "& span": {
          fontSize:"4rem"
        }
      
    },
  },
  button: {
    color: "#ff3366",
    border: "2px solid #ff3366",
    padding: "10px 12px 12px 12px",
    marginTop: "65px",
    fontSize: "20px",
    fontWeight: "700",
    textDecoration: "none",
    outline: "none",
    "&:hover": {
      color: "#fff",
      border: "2px solid #fff",
    },
  },
  link: {
    textDecoration: "none",
  },
}));


const Header = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <section className={classes.headerContainer} >
        <div className={classes.mainInfo}>
          <h1>
            Frontend Developer <span>&&</span> Chess Master
          </h1>

          <Button variant="outlined" className={classes.button}>
            Contact Me
          </Button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Header;
