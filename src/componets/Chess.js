import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


import "../App.css"
import img1 from "../img/Chess-Carousel/Campeones estado TX K-1.png";
import img2 from "../img/Chess-Carousel/chess cake.jpg";
import img3 from "../img/Chess-Carousel/Coimbra.png";
import img4 from "../img/Chess-Carousel/IMG_6976.png";
import img5 from "../img/Chess-Carousel/Nacional Equipo Bronsville TX.png";
import img6 from "../img/Chess-Carousel/Nacional K-1.png";
import img7 from "../img/Chess-Carousel/summer camp florida.png";
import img8 from "../img/Chess-Carousel/Texas.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
    margin: " 0 3rem 3rem 3rem",
    textAlign: "center",
  },
  slider: {
  position: "relative",
  height: "70vh",
  display:"flex",
  justifyContent: "center",
  alignItems: "center ",
  marginTop:"10px"
  },
  imageSlider: {
  width: "600px",
  height: "513px",
    borderRadius: "10px",
  border:"2px solid black",
  },
  paragraph: {
    fontWeight: 300,
    fontSize: "2.5rem",
    maxWidth: "50em",
    lineHeight: 1.5,
    color: "#000",
  },

}));

const paragraph = `I have played chess since the age of seven, and have had
                  countless years competing at the professional level, as well
                  as coaching. I graduated in Physical Education, in 2010, and I
                  have an international title in Chess (FIDE Master). `


const Chess = () => {
  const [current, setCurrent] = useState(0);
  const classes = useStyles();

  const slides = [
    {
      name: "first_image",
      url:`${img1}`
    },
    {
      name: "second_image",
      url:`${img2}`
    },
    {
      name: "third_image",
      url:`${img3}`
    },
    {
      name: "fourth_image",
      url:`${img4}`
    },
    {
      name: "fifth_image",
      url:`${img5}`
    },
    {
      name: "sixth_image",
      url:`${img6}`
    },
    {
      name: "seventh_image",
      url:`${img7}`
    },
    {
      name: "eighth_image",
      url:`${img8}`
    },
  ]

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current + 1)
    }, 2000);
    return () => clearInterval(slider);
       
  }, [current])

  useEffect(() => {
    const lastSlide = slides.length - 1;

    if (current < 0) {
      setCurrent(lastSlide);
    }
    if (current > lastSlide) {
      setCurrent(0);
    };
   
  }, [current]);


   return (
  <Grid container direction="column">
    <Paper className={classes.paper}>
      
    <Grid item container className={classes.slider}>
      <FaArrowCircleLeft className="left-arrow" onClick={()=> setCurrent(current - 1)} />
      <FaArrowCircleRight className="right-arrow" onClick={()=> setCurrent(current + 1)} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.url} alt={slide.name} className={classes.imageSlider} />
            )}
          </div>
        );
      })}
      </Grid>
      <Grid item container direction="column" id="book">
      <Paper className={classes.paper}>
        <Grid item container justify="center" sm={12}>
          <Grid item>
            <p className={classes.paragraph}>
              {paragraph}
            </p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
      </Paper>
      </Grid>
  );
}


export default Chess
