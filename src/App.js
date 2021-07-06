import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./componets/Theme";
import { Element } from "react-scroll";

import Particles from "react-particles-js";
import Navbar from "./componets/Navbar";

import Projects from "./componets/Projects";
import Book from "./componets/Book";

import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import About from "./componets/About";
import { slidesData } from "./componets/SlidesData";

import "./App.css";
import Carousel from "./componets/Carousel-Book";
import Chess from "./componets/Chess";



// import Home from "./componets/Home";

const App = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();


  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX-17);
    setCursorY(e.pageY-14);
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 1000,
                },
                color: {
                  value: "#ffffff",
                },
              },
            },
          }}
        />

        <Navbar />
        <Element name="header">
            <Header />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

       <Element name="chess">
          <Chess />
        </Element> 

        <Element name="book">
        <Carousel slides={slidesData}/>
        </Element>

        <Element name="contact">
          <Contact />
        </Element>

      

        <Footer />
      </ThemeProvider>

     
      <div
        className="cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      ></div>
    </React.Fragment>
  );
};

export default App;
