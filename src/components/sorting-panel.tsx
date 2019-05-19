import * as React from "react";
import { SyntheticEvent } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MoviesResponse } from "../models/MoviesResponse";

const styles = (theme: any) => createStyles({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  item: {
    textAlign: 'center',
  },
});

interface SortingPanelProps {
  onOrderByChanged(query: string): void;
  onOrderChanged(searchBy: string): void;
  classes: any;
  moviesList: MoviesResponse;
  orderBy: string;
  order: string;
}


class SortingPanel extends React.Component<SortingPanelProps> {
  constructor(props: SortingPanelProps) {
    super(props);
  }
  handleChangeSortingBy = (e: SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    this.props.onOrderByChanged(target.value);
  };

  handleChangeSortingOrder = (e: SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    this.props.onOrderChanged(target.value);
  };
  render() {
    const { classes } = this.props;
    const movies = this.props.moviesList;
    let averageMovieRating: string = '';
    if (movies.data && movies.data.length > 0) {
      const ratings: number[] = movies.data.map(movie => movie.vote_average);
      averageMovieRating = (ratings.reduce((a, b) => a + b) / movies.data.length).toFixed(2);
    }
    return (
      <div>
        <Grid container spacing={16} className={classes.root} direction="row" justify="space-between" >

          {(movies && movies.data && averageMovieRating !== '')
            &&
            <Grid item md={4} className={classes.item}>
              <FormControl >
                <div>
                  <div>Movies Found {movies.data.length}</div>
                  <div>Average Rating {averageMovieRating}</div>
                </div>
              </FormControl>
            </Grid>
          }

          <Grid item md={4} className={classes.item}>
            <FormControl>
              <Select
                native
                data-testid="orderby-dropdown"
                value={this.props.orderBy}
                onChange={this.handleChangeSortingBy}
                inputProps={{
                  name: "orderBy",
                  id: "sort-by"
                }}
              >
                <option value="release_date">Release Date</option>
                <option value="title">Title</option>
                <option value="vote_average">Vote Average</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} className={classes.item}>
            <FormControl>
              <Select
                data-testid="order-dropdown"
                native
                value={this.props.order}
                onChange={this.handleChangeSortingOrder}
                inputProps={{
                  name: "order",
                  id: "order-id"
                }}
              >
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SortingPanel);
