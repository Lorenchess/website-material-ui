import React, { useState, useEffect} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../img/logo-king.png";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"
import MainTabs from "./Tabs";
import Drawer from "./Drawer";


import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 100,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "8rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "7rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "6.25rem",
    },
  },
  toolBar: {
    justifyContent: "center",
    width: "100%",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "12rem",
    [theme.breakpoints.down("md")]: {
      height: "11rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "9.5rem",
    },
    margin: "1.5rem 0",
    cursor: "pointer",
    transition: "all 300ms ease-in-out",
  },

  muiButtonBase: {
    disableRipple: "true",
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  headerShown: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "#91e2ed",
    height: "110px",
    transition: "all 300ms ease-in-out",
  },
  headerNotShown: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "#51c4d3",
    height: "150px",
    transition: "all 300ms ease-in-out",
  },
  logoReduce: {
    height: "9rem",
    margin: "1.5rem 0",
    cursor: "pointer",
    transition: "all 300ms ease-in-out",
  },
}));


const Navbar = () => {
  
  // const [value, setValue] = useState(0);
  const [headerShow, setHeaderShow] = useState(false);  

  
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));


  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true)
    }
    else {
      setHeaderShow(false);
   }
  }


 useEffect(() => {
   window.addEventListener("scroll", handleScroll)
   
 }, [])
  
  

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className={headerShow ? classes.headerShown : classes.headerNotShown}
      >
        <Toolbar className={classes.toolBar}>
          <Button
            disableRipple
            className={`${classes.logoContainer} ${classes.muiButtonBase}`}
            // onClick={() => setValue(0)}
          >
            <img src={logo} alt="logo" className={headerShow ? classes.logoReduce: classes.logo} />
          </Button>
          {matches ? <Drawer /> : <MainTabs headerShow={headerShow} />}
        </Toolbar>
      </AppBar>

      {/* <div className={classes.toolbarMargin} /> */}
    </React.Fragment>
  );
};

export default Navbar;
