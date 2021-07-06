import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import bishop from "../img/bishop.png";
import queen from "../img/black-quen.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: "3rem",
    textAlign: "center",  
  },
  // container: {
  //   height: "100%",
  //   width:"100%",
  // },
  form: {
  padding: "30px",
  border: "2px solid black",
  background: "linear-gradient(to right, #7ed56f, #28b485)",
  marginTop: "20px",
    width: "40%",
    height:"80%",
    
  },

  formControl: {
  fontSize: "2.5rem",
  paddingBottom: "20px",
  width: "100%",
  },
  formInput: {
  fontSize: "2.5rem",
  padding: "6px",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },
 
  button: {
    fontSize: "2.5rem",
    border: "2px solid",
    transition: `all .2s ${theme.transitions.easing.easeInOut}`,
    "&:hover": {
      transform: "scale(.95)",
    },
  },
  successMessage: {
    fontSize: "2rem",
    color: "green",
  },
  errorMessage: {
    fontSize: "2rem",
    color: "red",
  },
 
}));


const Contact = () => {
  const classes = useStyles();
  const [successMessage, setSuccessMessage] = useState("");
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
   

  const serviceID = "service_2009";
  const templateID = "template_2009";
  const userID = "user_OAmhdy0pmIcXNMguqBuvD";

 const onSubmit = (data, r) => {
   sendEmail(
     serviceID,
     templateID,
     {
       name: data.name,
       phone: data.phone,
       email: data.email,
       subject: data.subject,
       message: data.message,
     },
     userID
   );
   r.target.reset();
 };

 const sendEmail = (serviceID, templateID, variables, userID) => {
   emailjs
     .send(serviceID, templateID, variables, userID)
     .then(() => {
       setSuccessMessage(
         "Your message was send successfully!"
       );
     })
     .catch((err) => console.error(`Something went wrong ${err}`));
 };


  return (
    <Grid container direction="column" id="contact" className={classes.root}>
       <Paper className={classes.paper}>
    
        <Grid item container direction="column" >
          <Grid item container direction="column" alignItems="center" sm={12}>
        <form id="form" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
           <Typography
              variant="h1"
              style={{ color: "#000", margin: "1rem 0 1rem 0" }}
            >
              Get in touch!
            </Typography>
          <span className={classes.successMessage}>{successMessage}</span>
          <Grid item className={classes.formControl}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className={classes.formInput}
              placeholder="Enter name"
              onFocus={(e) => e.target.placeholder = ""} 
              name="name"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", {
                required: "Please enter your name",
                maxLength: {
                  value: 15,
                  message: "Please enter a name with fewer than 15 characters",
                },
              })}
            />
            <span className={classes.errorMessage}>
              {errors.name && errors.name.message}
            </span>
          </Grid>
          <Grid item className={classes.formControl}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
                  placeholder="Enter email"
                  onFocus={(e) => e.target.placeholder = ""} 
                name="email"
                className={classes.formInput}
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "Please enter your email",
                  pattern:{value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email.",}
               
              })}
            />
            <span className={classes.errorMessage}>
              {errors.email && errors.email.message}
            </span>
          </Grid>
          <Grid item className={classes.formControl}>
            <label htmlFor="subject">Subject</label>
            <input
              type="subject"
              id="subject"
                  placeholder="Enter the subject"
                  onFocus={(e) => e.target.placeholder = ""} 
               name="subject"
              className={classes.formInput}
              aria-invalid={errors.subject ? "true" : "false"}
              {...register("subject", {
                required: "Please enter a subject",
                maxLength: {
                  value: 20,
                  message:
                    "Please enter a subject with fewer than 20 characters",
                },
              })}
            />
          </Grid>
          <Grid item className={classes.formControl}>
            <label htmlFor="message">Message</label>
            <textarea
              rows="4"
              cols="50"
              className={classes.formInput}
                  placeholder="Enter your message"
                  onFocus={(e) => e.target.placeholder = ""} 
              name="message"
              aria-invalid={errors.message ? "true" : "false"}
              {...register("message", {
                required: "Please type your message...",
              })}
            ></textarea>
          </Grid>
          <Button variant="outlined" color="primary" type="submit" className={classes.button}>Submit</Button>
            </form>
            </Grid>
        </Grid>
        </Paper>
     </Grid>
  );
};

export default Contact;
