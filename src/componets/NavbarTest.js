import React, { useState, useEffect, useCallback } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../img/logo-king.png";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
// import Fab from "@material-ui/core/Fab";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import Zoom from "@material-ui/core/Zoom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import GitHub from "@material-ui/icons/GitHub";
import LocalLibrary from "@material-ui/icons/LocalLibrary";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EmailIcon from "@material-ui/icons/Email";
// import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

import Button from "@material-ui/core/Button";

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
    marginBottom: "9rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "8rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "7.25rem",
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
  },
  tabs: {
    flexGrow: 1,
    maxWidth: 1000,
    backgroundColor: "#51c4d3",
    marginLeft: "10%",
    marginRight: "10%",
    boxShadow: "none",
  },
  tabIcon: {
    width: "3rem ",
    height: "3rem ",
    color: "#000",
  },
  tabIconSelected: {
    width: "3rem ",
    height: "3rem ",
    color: "#04009a",
  },
  tabText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#000",
  },
  tabTextActive: {
    fontSize: "1.7rem",
    fontWeight: "700",
    color: "#04009a",
  },

  toggleIcon: {
    width: "4rem ",
    height: "4rem ",
    color: "#000",
    marginRight: "0",
    cursor: "pointer",
  },
  drawerIconContainer: {
    marginLeft: "auto",
  },
  drawerIcon: {
    height: "5rem",
    width: "5rem",
    color: "#000",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
    height: "100%",
  },
  muiButtonBase: {
    disableRipple: "true",
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const routeAssigment = useCallback(() => {
    const routes = [
      { name: "/", value: 0 },
      { name: "/about", value: 1 },
      { name: "/projects", value: 2 },
      { name: "/book", value: 3 },
      { name: "/chess", value: 4 },
      { name: "/contact", value: 5 },
    ];
    routes.forEach((route) => {
      if (window.location.pathname === route.name && value !== route.value) {
        setValue(route.value);
      }
    });
  }, [value, setValue]);

  useEffect(() => {
    routeAssigment();
  }, [routeAssigment]);

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            selected={value === 0}
          >
            <ListItemIcon>
              <HomeIcon className={classes.tabIcon} />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            selected={value === 1}
          >
            <ListItemIcon>
              <FaceIcon className={classes.tabIcon} />
            </ListItemIcon>
            <ListItemText primary="ABOUT ME" />
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            selected={value === 2}
          >
            <ListItemIcon>
              <GitHub className={classes.tabIcon} />
            </ListItemIcon>
            <ListItemText primary="MY PROJECTS" />
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            selected={value === 3}
          >
            <ListItemIcon>
              <LocalLibrary className={classes.tabIcon} />
            </ListItemIcon>
            <ListItemText primary="MY BOOK" />
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            selected={value === 4}
          >
            <ListItemIcon>
              <FavoriteIcon className={classes.tabIcon} />
            </ListItemIcon>
            <ListItemText primary="CHESS" />
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            selected={value === 5}
          >
            <ListItemIcon>
              <EmailIcon className={classes.tabIcon} />
            </ListItemIcon>
            <ListItemText primary="CONTACT ME" />
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  const tabs = (
    <React.Fragment>
      <Paper className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example"
        >
          {/* <LinkS
            to="/"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          > */}
          <Tab
            icon={
              <HomeIcon
                className={
                  value === 0 ? classes.tabIconSelected : classes.tabIcon
                }
              />
            }
            label={`HOME`}
            className={value === 0 ? classes.tabTextActive : classes.tabText}
          />
          {/* </LinkS> */}
          {/* <LinkS
            to="/about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          > */}
          <Tab
            icon={
              <FaceIcon
                className={
                  value === 1 ? classes.tabIconSelected : classes.tabIcon
                }
              />
            }
            label="ABOUT ME"
            className={value === 1 ? classes.tabTextActive : classes.tabText}
          />
          {/* </LinkS> */}
          <Tab
            icon={
              <GitHub
                className={
                  value === 2 ? classes.tabIconSelected : classes.tabIcon
                }
              />
            }
            label="MY PROJECTS"
            className={value === 2 ? classes.tabTextActive : classes.tabText}
          />
          <Tab
            icon={
              <LocalLibrary
                className={
                  value === 3 ? classes.tabIconSelected : classes.tabIcon
                }
              />
            }
            label="MY BOOK"
            className={value === 3 ? classes.tabTextActive : classes.tabText}
          />
          <Tab
            icon={
              <FavoriteIcon
                className={
                  value === 4 ? classes.tabIconSelected : classes.tabIcon
                }
              />
            }
            label="CHESS"
            className={value === 4 ? classes.tabTextActive : classes.tabText}
          />
          <Tab
            icon={
              <EmailIcon
                className={
                  value === 5 ? classes.tabIconSelected : classes.tabIcon
                }
              />
            }
            label="CONTACT ME"
            className={value === 5 ? classes.tabTextActive : classes.tabText}
          />
        </Tabs>
      </Paper>
      <Brightness7Icon className={classes.toggleIcon} id="toggle-btn-navbar" />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="secondary"
        className={classes.appbar}
        id="back-to-top-anchor"
      >
        <Toolbar className={classes.toolBar}>
          <Button
            disableRipple
            className={`${classes.logoContainer} ${classes.muiButtonBase}`}
            onClick={() => setValue(0)}
          >
            <img src={logo} alt="logo" className={classes.logo} />
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Navbar;
