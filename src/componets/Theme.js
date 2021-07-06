import { createMuiTheme } from "@material-ui/core/styles";

const mainBlue = "#51c4d3";
const lighterBlue = "#91e2ed";
const darkBlue = "#04009a";
const mainGreen = "#197a19";
const white = "#fff";
const black = "#000";
const red = "#ff3366";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${mainBlue}`,
      green: `${mainGreen}`,
    },
    primary: {
      main: `${darkBlue}`,
    },
    secondary: {
      main: `${mainBlue}`,
    },
    tertiary: {
      main:`${lighterBlue}`
    },
    white: {
      main: `${white}`,
    },
    black: {
      main: `${black}`,
    },
    darkBlue: {
      main: `${darkBlue}`,
    },
    red: {
      main: `${red}`,
    },
    h1: {
      color:`${black}` ,
    },
  },
});
