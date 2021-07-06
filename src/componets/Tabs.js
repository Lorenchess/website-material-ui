import React, { useState} from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import GitHub from "@material-ui/icons/GitHub";
import LocalLibrary from "@material-ui/icons/LocalLibrary";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import EmailIcon from "@material-ui/icons/Email";
import Paper from "@material-ui/core/Paper";
import { scroller } from "react-scroll";
// import { Link as LinkS } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";


import "../App.css";
import useElementOnScreen from "./ObserverHook";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 100,
  },

  tabs: {
    flexGrow: 1,
    maxWidth: "1000px",
    backgroundColor: "#51c4d3",
    marginLeft: "10%",
    marginRight: "10%",
    boxShadow: "none",
    transition: "all 300ms ease-in-out",
  },
  headerShown: {
    flexGrow: 1,
    maxWidth: "1000px",
    backgroundColor: "#91e2ed",
    marginLeft: "9%",
    marginRight: "9%",
    boxShadow: "none",
    transition: "all 300ms ease-in-out",
  },
  tabIcon: {
    width: "3rem ",
    height: "3rem ",
    color: "#000",
  },
  tabIconHeaderShown: {
    width: "2rem ",
    height: "2rem ",
    color: "black",
    transition: "all 300ms ease-in-out",
  },
  tabIconNotHeaderShown: {
    width: "3rem ",
    height: "3rem ",
    transition: "all 300ms ease-in-out",
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
}));


const MainTabs = ({ headerShow }) => {
  const [value, setValue] = useState(0);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   const links = ["header", "about", "projects", "chess", "book", "contact"];

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      smooth: true,
      offset: -90,
    });
  };

  /*/////////////////////////////////////////*/
  



  /*/////////////////////////////////////////*/ 


const classes = useStyles();
 
  
  return (
    <React.Fragment>
      <Paper className={headerShow ? classes.headerShown : classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs"
        >
          <Tab
          onClick={() => scrollToElement(links[0])}
          icon=
          {
            <HomeIcon
              className={`${
                value === 0 ? classes.tabIconSelected : classes.tabIcon
              } ${
                headerShow
                  ? classes.tabIconHeaderShown
                  : classes.tabIconNotHeaderShown
              }`}
            />
          }
          label={`HOME`}
          className={value === 0 ? classes.tabTextActive : classes.tabText}/>
        
          <Tab
          onClick={() => scrollToElement(links[1])}
          icon=
          {
            <FaceIcon
              className={`${
                value === 1 ? classes.tabIconSelected : classes.tabIcon
              } ${
                headerShow
                  ? classes.tabIconHeaderShown
                  : classes.tabIconNotHeaderShown
              }`}
            />
          }
          label="ABOUT ME" className=
          {value === 1 ? classes.tabTextActive : classes.tabText}/>
          <Tab
          onClick={() => scrollToElement(links[2])}
          icon=
          {
            <GitHub
              className={`${
                value === 2 ? classes.tabIconSelected : classes.tabIcon
              } ${
                headerShow
                  ? classes.tabIconHeaderShown
                  : classes.tabIconNotHeaderShown
              }`}
            />
          }
          label="MY PROJECTS" className=
          {value === 2 ? classes.tabTextActive : classes.tabText}/>
          <Tab
          onClick={() => scrollToElement(links[3])}
          icon=
          {
            <FavoriteIcon
              className={` ${
                value === 3 ? classes.tabIconSelected : classes.tabIcon
              } ${
                headerShow
                  ? classes.tabIconHeaderShown
                  : classes.tabIconNotHeaderShown
              }`}
            />
          }
          label="CHESS" className=
          {value === 3 ? classes.tabTextActive : classes.tabText}/>
          <Tab
          onClick={() => scrollToElement(links[4])}
          icon=
          {
            <LocalLibrary
              className={` ${
                value === 4 ? classes.tabIconSelected : classes.tabIcon
              } ${
                headerShow
                  ? classes.tabIconHeaderShown
                  : classes.tabIconNotHeaderShown
              }`}
            />
          }
          label="MY BOOK" className=
          {value === 4 ? classes.tabTextActive : classes.tabText}/>
          <Tab
            onClick={() => scrollToElement(links[5])}
            icon=
            {
              <EmailIcon
                className={` ${
                  value === 5 ? classes.tabIconSelected : classes.tabIcon
                } ${
                  headerShow
                    ? classes.tabIconHeaderShown
                    : classes.tabIconNotHeaderShown
                }`}
              />
            }
            label="CONTACT ME" className=
            {value === 5 ? classes.tabTextActive : classes.tabText}/>
          
        </Tabs>
      </Paper>
      <Brightness7Icon className={classes.toggleIcon} id="toggle-btn-navbar" />
    </React.Fragment>
  );
};

export default MainTabs;
