import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import marvel from "../../img/marvel.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: "66rem",
  },
  media: {
    height: "40rem",
  },
  button: {
    fontSize: "2rem",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={marvel} title="Marvel" />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h1" align="center">
            Marvel
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nisi doloribus voluptatum. Aspernatur nihil delectus iure impedit
            reprehenderit provident ad.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" className={classes.button}>
          Share
        </Button>
        <Button size="large" color="primary" className={classes.button}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
