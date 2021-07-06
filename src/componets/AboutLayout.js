import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import ProgressBar from "./ProgressBar";
import author from "../img/RLP.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  mission: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "2.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
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
    },
  },
}));

const AboutLayout = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      align="center"
      justify="center"
      spacing={2}
    >
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "2em" }}
        justify="center"
        // xs={4}
      >
        <Typography variant="h1">About</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer}>
        <Typography
          variant="h5"
          align="center"
          className={classes.mission}
          style={{ marginTop: "1em" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis
          illum repellat ut ducimus perferendis repellendus reprehenderit eius
          porro. Inventore cum tempora rerum repudiandae rem voluptatem nisi
          repellat saepe.
        </Typography>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
        // direction={matchesMD ? "column" : "row"}
        direction="column"
        // alignItems={matchesMD ? "center" : undefined}
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <Grid item container justify="center" lg>
            <Grid item>
              <Avatar alt="author" src={author} className={classes.avatar} />
            </Grid>
            <Grid item>
              <Typography variant="h2" paragraph align="center">
                Ramon Lorente
              </Typography>
            </Grid>

            <Grid item>
              <Typography paragraph align="center" variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis eius porro optio itaque similique architecto omnis in
                molestias eum quis cum, dolorem maxime error.
              </Typography>
              <Typography paragraph align="center" variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis eius porro optio itaque similique architecto omnis in
                molestias eum quis cum, dolorem maxime error.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <Paper className={classes.paper}>
              <Grid item className={classes.progressBar}>
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
      </Grid>
    </Grid>
  );
};

export default AboutLayout;
