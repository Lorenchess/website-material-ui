import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  progress: {
      backgroundColor: "#d8d8d8",
      fontSize: "2rem",
    borderRadius: "2rem",
    height: "5rem",
    width: "50rem",
    margin: "5px 0",
  },
  progressDone: {
    background: "linear-gradient(to left, #F2709C, #FF9472)",
    boxShadow: "0 3px 3px -5px #F2709C, 0 2px 5px #F2709C",
    borderRadius: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    opacity: "0",
      width: "0",
    transition:"1s ease"
  },
}));

const ProgressBar = ({ done }) => {
    const [style, setStyle] = useState({})

     const classes = useStyles();

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 1000);

    return (
        <div className={classes.progress}>
            <div className={classes.progressDone} style={style}>
                {done}%
            </div>
        </div>
    )
}

export default ProgressBar
