import React from "react";
import MovieListDetails from "./movie-list-details";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";
import {connect} from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    backgroundColor: grey
  },
  centered: {
    textAlign: 'center',
  }
});

function MoviesList(props) {
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

function mapStateToProps(state) {
  // const { moviesList } = state
  return { items: state.moviesList }
}

export default connect(mapStateToProps)(withStyles(styles)(MoviesList));

// export default withStyles(styles)(MoviesList);
