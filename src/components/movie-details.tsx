import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Movie from "../models/Movie";

const styles = (theme: any) => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  image: {
    width: 170,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

interface MovieDetailsProps {
  movie: Movie;
  classes: any;
}
const MovieDetails: React.FC<MovieDetailsProps> = (props) => {
  const movie = props.movie;
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={movie.poster_path} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="row" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" color="primary">
                {movie.title}
              </Typography>
              <Grid item container>
                <Grid item xs>
                  <Typography color="textSecondary" gutterBottom>  {movie.runtime} min</Typography>
                </Grid>
                <Grid item xs>
                  <Typography align="center" color="primary" gutterBottom>  {new Date(movie.release_date).getFullYear()}</Typography>
                </Grid>
              </Grid>
              <Grid item xs >
                <Typography variant="body1" gutterBottom>{movie.overview}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Link to={`/search`} data-testid="search-link" >Search</Link>
            <Typography variant="subtitle1">{movie.vote_average}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(MovieDetails);