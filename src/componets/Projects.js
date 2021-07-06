import React, { useState } from "react";
import chess4mathGames from "../img/board-bg.jpeg";
import marvel from "../img/marvel.jpg";
import chapel from "../img/chapel.jpg";
import netriler from "../img/netriler.jpg";

import Modal from "./Modal";
import FirstCard from '../componets/cards/Card-project-1';
import SecondCard from '../componets/cards/Card-project-2';
import ThirdCard from '../componets/cards/Card-project-3';
import FourthCard from '../componets/cards/Card-project-4';
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import Paper from "@material-ui/core/Paper";

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
    color: theme.palette.text.secondary,
    margin: "3rem",
    height: "100vh",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  portfolioImg: {
    // position: "relative",
    width: "40rem",
    height: "30rem",
    border: "1px solid var(--color-black)",
  },
  imageContainer: {
    position: "relative",
    margin: "4rem 0 2rem 0",
    "&:hover": {
      "& $overflow": {
        opacity: "60%",
        transition: ".3s ease-in-out",
      },
      "& $magIcon": {
        opacity: 1,
        transition: ".3s ease-in-out",
      },
    },
  },
  overflow: {
    position: "absolute",
    opacity: 0,
    background: "#000",
    width: "40rem",
    height: "30rem",
    top: "1",
    border: "1px solid var(--color-green)",
    cursor: "pointer",
  },
  projectInfo: {
    fontWeight: 300,
    fontSize: "2.5rem",
    maxWidth: "50em",
    lineHeight: 1.5,
    marginTop: "2rem",
    color: "#000",
  },
  magIcon: {
    position: "absolute",
    opacity: 0,
    top: "41%",
    left: "43%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontSize: "7.5rem",
    cursor: "pointer",
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
  animatedMagIcon: {
     animation: `$pulsate 1s infinite ${theme.transitions.easing.easeInOut}`
  }
}));


const Projects = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  const classes = useStyles();

  return (
    <Grid container direction="column" id="projects">
      <Paper className={classes.paper}>
        {/* <Grid item container justify="center">
          <Typography
            variant="h1"
            style={{ color: "#000", margin: "2rem 0 5rem 0" }}
          >
            Portfolio Projects
          </Typography>
        </Grid> */}
        <Grid item container justify="center" spacing={3} alignItems="center">
          <Grid item className={classes.imageContainer}>
            <Grid item container>
              <img
                src={chess4mathGames}
                alt="chess 4 math games"
                className={classes.portfolioImg}
              />
              <div className={classes.overflow}></div>

              <ZoomInIcon
                className={`${classes.magIcon} ${classes.animatedMagIcon}`}
                onClick={() => {
                  setIsModalOpen1(true);
                }}
              />
              <Modal open={isModalOpen1} onClose={() => setIsModalOpen1(false)}>
                <FirstCard />
              </Modal>
            </Grid>
          </Grid>

          <Grid item className={classes.imageContainer}>
            <Grid item container>
              <img src={marvel} alt="marvel" className={classes.portfolioImg} />
              <div className={classes.overflow}></div>
              <ZoomInIcon
                className={`${classes.magIcon} ${classes.animatedMagIcon}`}
                onClick={() => {
                  setIsModalOpen2(true);
                }}
              />
              <Modal open={isModalOpen2} onClose={() => setIsModalOpen2(false)}>
                <SecondCard />
              </Modal>
            </Grid>
          </Grid>

          <Grid item className={classes.imageContainer}>
            <Grid item container>
              <img src={chapel} alt="chapel" className={classes.portfolioImg} />
              <div className={classes.overflow}></div>
              <ZoomInIcon
                className={`${classes.magIcon} ${classes.animatedMagIcon}`}
                onClick={() => setIsModalOpen3(true)}
              />
              <Modal open={isModalOpen3} onClose={() => setIsModalOpen3(false)}>
                <ThirdCard />
              </Modal>
            </Grid>
          </Grid>

          <Grid item className={classes.imageContainer}>
            <Grid item container>
              <img
                src={netriler}
                alt="netriler"
                className={classes.portfolioImg}
              />
              <div className={classes.overflow}></div>
              <ZoomInIcon
                className={`${classes.magIcon} ${classes.animatedMagIcon}`}
                onClick={() => setIsModalOpen4(true)}
              />
              <Modal open={isModalOpen4} onClose={() => setIsModalOpen4(false)}>
                <FourthCard />
              </Modal>
            </Grid>
          </Grid>
          <Grid item container justify="center" sm={8}>
            <Typography
              variant="h5"
              align="center"
              className={classes.projectInfo}
              style={{ marginTop: "2rem" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              officiis doloremque nesciunt quod nobis tempore odit impedit id
              asperiores fuga doloribus dolorum itaque, similique maxime tempora
              reiciendis expedita totam est dolore saepe soluta? Corrupti error
              dolore sint. Dolor at doloremque quod aliquam vel voluptatum
              cupiditate, tempora enim quia. Consequuntur cumque at voluptate
              voluptatibus quisquam reiciendis voluptas, nisi blanditiis
              repellendus saepe mollitia aliquam dolorum quae provident quos
              ducimus, optio incidunt facere veniam officia iusto commodi. Natus
              eveniet corrupti harum perspiciatis tempore ab nemo accusantium
              rerum, facilis, aperiam doloremque neque eius similique, quod
              incidunt. Laboriosam molestiae earum itaque cupiditate nesciunt.
              Itaque, labore.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Projects;
