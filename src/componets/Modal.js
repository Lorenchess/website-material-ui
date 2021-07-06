import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import ReactDom from "react-dom";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  overlayStyles: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.7)",
    zIndex: "1000",
  },
  modalStyles: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
    zIndex: "10000",
    "& p": {
      fontSize: "2.5rem",
      color:"black",
      margin: "25px 0 0 0",
    }
  },
  closeModalIcon: {
    position: "fixed",
    color:"red",
    top: 30,
    right: 0,
    fontSize: "50px",
    cursor: "pointer",
  }
}));

const Modal = ({ open, children, onClose }) => {
  const classes = useStyles();

  if (!open) return null;

  return ReactDom.createPortal(
    <React.Fragment>
      <div className={classes.overlayStyles} />
      <div className={classes.modalStyles}>
        <CloseIcon onClick={onClose} className={classes.closeModalIcon} />
        {children}
      </div>
    </React.Fragment>,
    document.getElementById("portal")
  );
};

export default Modal;
