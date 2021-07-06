import React from "react";
import chess4math from '../img/chess4math-book.jpg';
import {Slide} from "react-awesome-reveal";

const PrevBook = () => {
  return (
    <main id="prev-book" className="container">
      <div className="row">
        <div className="col book-container py-5">
          <Slide>
            <img
              src={chess4math}
              className="book-img"
              alt="chess 4 math book"
            />
          </Slide>
        </div>
        <div className="w-100"></div>

        <Slide direction="right" className="col">
          <p className="book-info">
            I have played chess since the age of seven, and have had countless
            years competing at the professional level, as well as coaching. I
            graduated in Physical Education, in 2010, and I have an
            international title in Chess (FIDE Master). I had the opportunity to
            teach students from different countries and all levels, in
            Academies, Chess Clubs, regular classrooms, which has given me the
            experience to work with kids and parents with different approaches
            and interest about chess.
            <br /> Working in a Kindergarten class as a bilingual instructor was
            a fantastic experience, and as a chess master it is evident that I
            tried to teach them chess too. The idea of using chess to teach
            mathematics came to me one day when I was participating in a math
            curriculum training. Knowing that the chess pieces have a numerical
            value, I thought that it was possible to create math exercises that
            involve the chess pieces (representing the numbers). Then, I started
            a conscientious study of the Common Core Mathematical Standards and
            the Standards for Mathematical Practice, and I found the pedagogical
            foundation of the idea in the 2nd Standard for Mathematical
            Practice: “Thinking Abstractly and Quantitatively.” <br />
            The standard states that students need to think abstractly for a
            given situation, represent it symbolically, and manipulate the
            representing symbols as if they have a life of their own. Then I
            realized that the chess pieces could be the abstract representation
            of the numbers and the symbols that students can manipulate during
            the activities. From there, I started the design of math exercises
            with the chess pieces instead of numbers, and with a bit of
            surprise, the students understood the idea pretty quickly and even
            showed enthusiasm in seeing more activities. They fell in love with
            the chess pieces. So, I decided to continue testing the concept and
            wrote a book for Kindergarteners and 1st graders. But designing a
            textbook and getting it ready for high-quality printing was more
            difficult than I thought.
          </p>
        </Slide>
      </div>
      <button className="book-btn btn btn-primary">click me</button>
    </main>
  );
};

export default PrevBook;
