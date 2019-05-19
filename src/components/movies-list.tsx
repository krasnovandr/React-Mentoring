import * as React from "react";
import MovieListDetails from "./movie-list-details";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";
import { MoviesResponse } from './../models/MoviesResponse';

const coloredBackground = grey.toString();

const styles = () => createStyles({
  root: {
    flexGrow: 1,
    marginTop: 20,
    backgroundColor: coloredBackground
  },
  centered: {
    textAlign: 'center',
  }
});


interface MovieListProps {
  items: MoviesResponse;
  classes: any;
}

const MoviesList: React.FC<MovieListProps> = (props) => {
  const movies = props.items;

  const { classes } = props;
  if (!movies.data || movies.data.length === 0) {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} className={classes.centered}>
            No Films Found
          </Grid>
        </Grid>
      </div>);
  } else {
    return (
      <div className={classes.root}>
        <Grid container spacing={24} data-testid="movies-list">
          {movies.data.map(movie => (
            <Grid item md={4} key={movie.id}>
              <MovieListDetails movie={movie} ></MovieListDetails>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MoviesList);
