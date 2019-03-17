import React from "react";
import MoviesList from "../components/movies-list";
import { MovieService } from "../movie-service";
import SearchToolbox from "../components/search-toolbox";
import SortingPanel from "../components/sorting-panel";

export class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      searchBy: "title",
      query: "",
      orderBy: "release_date",
      order: "asc"
    };
    this.movieService = new MovieService();
  }

  componentDidMount() {
    this.updateMoviesList(
      this.state.searchBy,
      this.state.query,
      this.state.orderBy,
      this.state.order
    );
  }
  handleSearchTriggered = e => {
    this.setState({ query: e.query, searchBy: e.searchBy });
    this.updateMoviesList(
      e.searchBy,
      e.query,
      this.state.orderBy,
      this.state.order
    );
  };

  handleChangeSortingBy = orderBy => {
    this.setState({ orderBy: orderBy });
    this.updateMoviesList(
      this.state.searchBy,
      this.state.query,
      orderBy,
      this.state.order
    );
  };

  handleChangeSortingOrder = order => {
    this.setState({ order: order });
    this.updateMoviesList(
      this.state.searchBy,
      this.state.query,
      this.state.orderBy,
      order
    );
  };

  updateMoviesList(searchBy, query, orderby, order) {
    this.movieService.searchMovie(searchBy, query, orderby, order).then(data => {
      return this.setState({ moviesList: data });
    });
  }

  render() {
    return (
      <div>
        <SearchToolbox
          searchBy={this.state.searchBy}
          onSearchTriggered={this.handleSearchTriggered}
        />
        <SortingPanel
          moviesList={this.state.moviesList}
          onOrderByChanged={this.handleChangeSortingBy}
          onOrderChanged={this.handleChangeSortingOrder}
        />
        <MoviesList items={this.state.moviesList} />
      </div>
    );
  }
}
