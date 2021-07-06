import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


// import { slidesData } from "./SlidesData";

import "../App.css"

const paragraph = `I have played chess since the age of seven, and have had
                  countless years competing at the professional level, as well
                  as coaching. I graduated in Physical Education, in 2010, and I
                  have an international title in Chess (FIDE Master). I had the
                  opportunity to teach students from different countries and all
                  levels, in Academies, Chess Clubs, regular classrooms, which
                  has given me the experience to work with kids and parents with
                  different approaches and interest about chess.
                  Working in a Kindergarten class as a bilingual
                  instructor was a fantastic experience, and as a chess master
                  it is evident that I tried to teach them chess too. The idea
                  of using chess to teach mathematics came to me one day when I
                  was participating in a math curriculum training. Knowing that
                  the chess pieces have a numerical value, I thought that it was
                  possible to create math exercises that involve the chess
                  pieces (representing the numbers). Then, I started a
                  conscientious study of the Common Core Mathematical Standards
                  and the Standards for Mathematical Practice, and I found the
                  pedagogical foundation of the idea in the 2nd Standard for
                  Mathematical Practice: “Thinking Abstractly and
                  Quantitatively.” 
                  The standard states that students need to think abstractly for
                  a given situation, represent it symbolically, and manipulate
                  the representing symbols as if they have a life of their own.
                  Then I realized that the chess pieces could be the abstract
                  representation of the numbers and the symbols that students
                  can manipulate during the activities. From there, I started
                  the design of math exercises with the chess pieces instead of
                  numbers, and with a bit of surprise, the students understood
                  the idea pretty quickly and even showed enthusiasm in seeing
                  more activities. They fell in love with the chess pieces. So,
                  I decided to continue testing the concept and wrote a book for
                  Kindergarteners and 1st graders. But designing a textbook and
                  getting it ready for high-quality printing was more difficult
                  than I thought.`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    margin: "3rem",
    textAlign: "center",
  },
  topIcon: {
    width: "3rem",
    height: "auto",
    color:"blue"
  },
  bookInfo: {
    fontWeight: 300,
    fontSize: "2.5rem",
    maxWidth: "50em",
    lineHeight: 1.5,
    marginTop: "2rem",
    color: "#000",
  },
  
  button: {
    fontSize: "1.5rem",
    transition: `all .2s ${theme.transitions.easing.easeInOut}`,
    "&:hover": {
      transform: "scale(.95)",
    },
  },
  slider: {
  position: "relative",
  height: "70vh",
  display:"flex",
  justifyContent: "center",
  alignItems: "center ",
    marginTop: "10px",
  // border:"2px solid black",
  },


}));

const Carousel = ({slides}) => {
  const [current, setCurrent] = useState(0);
   const [readMore, setReadMore] = useState(false);

  const classes = useStyles();

  // const length = slides.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1)
  // }

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1)
  // };
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
              <img src={slide} alt="book-photos" className="image-slider" />
            )}
          </div>
        );
      })}
      </Grid>
      <Grid item container direction="column" id="book">
      <Paper className={classes.paper}>
        <Grid item container justify="center" sm={12}>
          <Grid item>
            <p className={classes.bookInfo}>
              {readMore ? paragraph : `${paragraph.substring(0, 400)}...`}
            </p>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "show less" : "read more"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
      </Paper>
      </Grid>
  );
}

export default Carousel

