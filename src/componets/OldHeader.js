import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 100
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
  
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}


const Header = (props) => {
  return (
    <React.Fragment>
      <section id="back-to-top-anchor" className="header-wraper">
        <div className="main-info">
          <Fade cascade>
            <h1>
              full stack web developer <span>&&</span> chess master
            </h1>
            <Typed
              className="typed-text"
              strings={[
                "Web Design",
                "Web Development",
                "Facebook Ads SMM",
                "Google Ads",
                "Chess lessons",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
            <Link
              smooth={true}
              to="contact"
              offset={-100}
              duration={500}
              href="#"
              className="btn-main"
            >
              contact me
            </Link>
          </Fade>
        </div>
      </section>
      <ScrollTop {...props}>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Header;
