import * as React from 'react';
import MoviesList from "../components/movies-list";
import SearchToolbox from "../components/search-toolbox";
import SortingPanel from "../components/sorting-panel";
import { ErrorMessage } from "../shared-components/error-message";
import { connect } from "react-redux";
import { loadMoviesRequest, orderByChanged, orderChanged, searchByChanged } from '../actions';
import * as queryString from 'query-string'
import { getCurrentOrder, getCurrentOrderBy, getLoadedMovies, getCurrentFilter, AppState } from '../reducers/root-reducer';
import { MoviesResponse } from '../models/MoviesResponse';

interface MoviesProps {
  dispatch(func: any): any;
  location: any;
  order: string;
  orderBy: string;
  history: any;
  error: boolean;
  moviesList: MoviesResponse;
  searchCriteria:SearchCriteria

}

export interface SearchCriteria {
  searchBy: string;
}

class Movies extends React.Component<MoviesProps> {

  componentWillMount() {
    const searchQuery= queryString.parse(this.props.location.search);
    this.props.dispatch(loadMoviesRequest(searchQuery.query));
  }

  componentDidUpdate(prevProps: MoviesProps) {
    if (this.props.order !== prevProps.order
      || this.props.orderBy !== prevProps.orderBy) {
      const searchQuery = queryString.parse(this.props.location.search);
      this.props.dispatch(loadMoviesRequest(searchQuery.query));
    }
  }

  onSearchTriggered = (newQuery: string) => {
    this.props.history.replace({ search: `query=${newQuery}` });
    this.props.dispatch(loadMoviesRequest(newQuery));
  };

  render() {
    if (this.props.error) {
      return <ErrorMessage></ErrorMessage>;
    }

    return (
      <div>
        <SearchToolbox
          onSearchTriggered={(newQuery) => this.onSearchTriggered(newQuery)}
          onSearchByChanged={(newSearchBy) => this.props.dispatch(searchByChanged(newSearchBy))}
          searchCriteria={this.props.searchCriteria}
        />
        <SortingPanel
          moviesList={this.props.moviesList}
          onOrderByChanged={(newOrderBy) => this.props.dispatch(orderByChanged(newOrderBy))}
          onOrderChanged={(newOrder) => this.props.dispatch(orderChanged(newOrder))}
          order={this.props.order}
          orderBy={this.props.orderBy}
        />
        <MoviesList items={this.props.moviesList} />
      </div >
    );
  }
}
function mapStateToProps(state: AppState) {
  return {
    orderBy: getCurrentOrderBy(state),
    order: getCurrentOrder(state),
    moviesList: getLoadedMovies(state).moviesList,
    searchCriteria: {
      searchBy: getCurrentFilter(state).searchBy
    },
    error: getLoadedMovies(state).errorMoviesLoading
  }
}

export default connect(mapStateToProps, null)(Movies);
