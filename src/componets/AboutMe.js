import React from "react";
import author from "../img/RLP.jpg";
import { Slide, Fade } from "react-awesome-reveal";



const AboutMe = () => {
    return (
      <div id="about" className="container p-5 d-flex justify-content-center w-100">
        <div className="row">
          <div className="col-md-12 about-column">
            <div className="clearfix">
              <Fade triggerOnce>
                <img
                  src={author}
                  alt="author"
                  className="col-md-6 float-md-end mb-3 ms-md-3 author-img"
                />
              </Fade>
              <Slide>
                <h1 className="about-heading">About me</h1>
                <p className="author-info">
                  Ramón Lorente is a FIDE Master (FM) from Cuba with more than
                  20 years’ experience playing and teaching chess. He has
                  coached championship-winning teams in his own country,
                  Portugal, and the United States. In the USA, he has taught
                  chess in public and private schools in Texas, Kentucky,
                  Florida and New York. With a degree in Physical Education,
                  Ramon has teaching experience as a bilingual instructor and
                  ESL teacher assistant in Kentucky and Texas. He wrote a book
                  about chess and math for early learners called “Chess 4 Math,”
                  and he worked for two years in a kindergarten classroom where
                  he had the opportunity to successfully implement his material.
                  Ramon joined the NSCF team in 2018, working first in Florida
                  for “The Sunrise Center for Excellence in chess” and Franklin
                  Academy Charter school. In 2019 he moved to New York to become
                  a master instructor with the NSCF. He is the founder of Chess
                  4 Mind LLC, providing services in Fairfield County, CT and
                  Westchester, NY.
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;
