import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { orderByChanged, orderChanged } from "../actions";
const styles = theme => ({
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

class SortingPanel extends React.Component {
  state = { orderBy: "", order: "" };

  handleChangeSortingBy = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.onOrderByChanged(e.target.value);
  };

  handleChangeSortingOrder = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.onOrderChanged(e.target.value);
  };
  render() {
    const { classes } = this.props;
    const movies = this.props.moviesList;
    let averageMovieRating = 0;
    if (movies.data && movies.data.length > 0) {
      const ratings = movies.data.map(movie => movie.vote_average);
      averageMovieRating = (ratings.reduce((a, b) => a + b) / movies.data.length).toFixed(2);
    }
    return (
      <div>
        <Grid container spacing={16} className={classes.root} direction="row" justify="space-between" >

          {(movies && movies.data && averageMovieRating > 0)
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
                value={this.state.orderBy}
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
                value={this.state.order}
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
function mapStateToProps(state) {
  // const { moviesList } = state
  return { moviesList: state.moviesList }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    onOrderByChanged: (newOrderBy) => dispatch(orderByChanged(newOrderBy)),
    onOrderChanged: (newOrder) => dispatch(orderChanged(newOrder)),
    // reset: () => dispatch({ type: 'RESET' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SortingPanel));
