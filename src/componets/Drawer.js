import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import GitHub from "@material-ui/icons/GitHub";
import LocalLibrary from "@material-ui/icons/LocalLibrary";

import EmailIcon from "@material-ui/icons/Email";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
// import { Link as LinkS } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";

import { scroller } from "react-scroll";

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

const Drawer = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);
    
  const classes = useStyles();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    
     const handleChange = (event, newValue) => {
       setSelectedTab(newValue);
     };

    const links = ["header", "about", "projects", "chess", "book", "contact"];
    

  const scrollToElementD = (element) => {
    scroller.scrollTo(element, {
      duration: 500,
      smooth: true,
      offset: -90,
    });
    };

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onChange={handleChange}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
        selectedTab={selectedTab}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              scrollToElementD(links[0]);
              setSelectedTab(0);
            }}
            selected={selectedTab === 0}
          >
            <ListItemIcon>
              <HomeIcon
                className={
                  selectedTab === 0 ? classes.tabIconSelected : classes.tabIcon
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="HOME"
              className={
                selectedTab === 0 ? classes.tabTextActive : classes.tabText
              }
            />
          </ListItem>

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              scrollToElementD(links[1]);
              setSelectedTab(1);
            }}
            selected={selectedTab === 1}
          >
            <ListItemIcon>
              <FaceIcon
                className={
                  selectedTab === 1 ? classes.tabIconSelected : classes.tabIcon
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="ABOUT ME"
              className={
                selectedTab === 1 ? classes.tabTextActive : classes.tabText
              }
            />
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
            }}
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
              // setValue(3);
            }}
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
              // setValue(4);
            }}
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
              // setValue(5);
            }}
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
};

export default Drawer;
