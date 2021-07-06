import React from "react";
import ProgressBar from "./ProgressBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
import { makeStyles} from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import author from "../img/RLP.jpg";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import useElementOnScreen from "./ObserverHook";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin:"3rem"
  },
  mission: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "2.5rem",
    maxWidth: "50em",
    lineHeight: 1.5,
  },
  authorInfo: {
    fontWeight: 300,
    fontSize: "3.5rem",
    maxWidth: "50em",
    lineHeight: 1.5,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
    margin: "5rem",
    border: "3px solid black",
    boxShadow: "0 2rem 6rem rgba(15, 173, 235, 0.527)",
  },
  progressBarContainer: {
    margin: "6rem 0",
    
  },

  progressBar: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    margin: "0px 10px",
    "& h1": {
      marginRight: "10px",
      fontSize: "25px",
      color:"#000"
    },
  },
}));

const About = () => {

  const classes = useStyles();
  
  return (
    <React.Fragment>
    
        <Grid container direction="column" id="about">
          <Paper className={classes.paper}>
            {/* <Grid
              item
              container
              className={classes.rowContainer}
              style={{ marginTop: "1rem" }}
              justify="center"
            >
              <Typography variant="h1" style={{ color: "#000" }}>
                About
              </Typography>
            </Grid> */}
            <Grid
              item
              container
              justify="center"
            className={classes.rowContainer}
            >
              <Typography
                variant="h5"
                align="center"
                className={classes.mission}
                style={{ marginTop: "1em" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                omnis illum repellat ut ducimus perferendis repellendus
                reprehenderit eius porro. Inventore cum tempora rerum
                repudiandae rem voluptatem nisi repellat saepe.
              </Typography>
            </Grid>
            <Grid
              item
              container
              sm={6}
              direction="column"
              alignItems="center"
              lg
              className={classes.rowContainer}
            >
              <Grid item>
                <Avatar alt="author" src={author} className={classes.avatar} />
              </Grid>
              <Grid item>
                <Typography
                  variant="h3"
                  paragraph
                  align="center"
                  style={{ color: "#000" }}
                >
                  Ramon Lorente
                </Typography>
              </Grid>
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                lg
                className={classes.rowContainer}
              >
                <Typography
                  variant="h4"
                  align="center"
                  sm={6}
                  className={classes.authorInfo}
                  style={{ marginTop: "1rem", maxWidth: "45em", color: "#000" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  omnis illum repellat ut ducimus perferendis repellendus
                  reprehenderit eius porro. Inventore cum tempora rerum
                  repudiandae rem voluptatem nisi repellat saepe, reprehenderit
                  nostrum, neque soluta iusto officiis quibusdam? Provident
                  tempora harum a!
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container justify="center" lg>
                <Paper
                  className={classes.paper}
                  style={{ boxShadow: "0 2rem 6rem rgba(15, 173, 235, 0.527)" }}
                >
                  <Grid
                    item
                    className={classes.progressBar}
                    style={{ margin: "1em" }}
                  >
                    <h1>HTML</h1>
                    <div>
                      <ProgressBar done="90" />
                    </div>
                  </Grid>
                  <Grid item className={classes.progressBar}>
                    <h1>CSS</h1>
                    <div>
                      <ProgressBar done="90" />
                    </div>
                  </Grid>
                  <Grid item className={classes.progressBar}>
                    <h1>JavaScript</h1>
                    <div>
                      <ProgressBar done="70" />
                    </div>
                  </Grid>
                  <Grid item className={classes.progressBar}>
                    <h1>React</h1>
                    <div>
                      <ProgressBar done="70" />
                    </div>
                  </Grid>
                  <Grid item className={classes.progressBar}>
                    <h1>Material UI</h1>
                    <div>
                      <ProgressBar done="85" />
                    </div>
                  </Grid>
                  <Grid item className={classes.progressBar}>
                    <h1>Bootstrap</h1>
                    <div>
                      <ProgressBar done="70" />
                    </div>
                  </Grid>
                  <Grid item className={classes.progressBar}>
                    <h1>Indesign</h1>
                    <div>
                      <ProgressBar done="80" />
                    </div>
                  </Grid>
                  <Grid item className={classes.progressBar}>
                    <h1>Illustrator</h1>
                    <div>
                      <ProgressBar done="80" />
                    </div>
                  </Grid>
                  <Grid item className={classes.progressBar}>
                    <h1>Photoshop</h1>
                    <div>
                      <ProgressBar done="60" />
                    </div>
                  </Grid>
                  <Grid item className={classes.progressBar}>
                    <h1>Chess</h1>
                    <div>
                      <ProgressBar done="100" />
                    </div>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
    
    </React.Fragment>
  );
};

export default About;
