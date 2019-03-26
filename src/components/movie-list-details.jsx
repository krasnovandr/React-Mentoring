import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "400px"
  }
});

function MovieListDetails(props) {
  const movie = props.movie;
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Grid item xs>
        <img
          className={classes.img}
          alt="complex"
          src={movie.poster_path}
        />
      </Grid>
      <Grid item xs>
        <Typography component="p" variant="subtitle1">
          {movie.title}
        </Typography>
        <Typography component="p" variant="subtitle2">
          {movie.release_date}
        </Typography>
        <Typography component="p" variant="subtitle2">
          {movie.vote_average}
        </Typography>

        {movie.genres.map(genre => {
          return <span key={genre}>{genre} </span>;
        })}
      </Grid>
      <Link to={`/movies/${movie.id}`}>Details</Link>
    </Paper>
  );
}

export default withStyles(styles)(MovieListDetails);