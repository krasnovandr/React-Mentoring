import React, { useState, useEffect } from 'react';
import MoviesList from "../components/movies-list";
import SearchToolbox from "../components/search-toolbox";
import SortingPanel from "../components/sorting-panel";
import { ErrorMessage } from "../shared-components/error-message";
import { connect } from "react-redux";
import { loadMoviesRequest, queryChanged, orderByChanged, orderChanged, searchByChanged } from '../actions';
import queryString from 'query-string'


class Movies extends React.Component {
  componentDidMount() {
    const searchQuery = queryString.parse(this.props.location.search);
    this.props.dispatch(loadMoviesRequest(searchQuery.query));
  }

  componentDidUpdate(prevProps) {
    if (this.props.order !== prevProps.order
      || this.props.orderBy !== prevProps.orderBy) {
      this.props.dispatch(loadMoviesRequest());
    }
  }

  render() {
    if (this.props.error) {
      return <ErrorMessage></ErrorMessage>;
    }

    return (
      <div>
        <SearchToolbox
          onSearchTriggered={(newCriteria) => this.props.dispatch(loadMoviesRequest())}
          onSearchChanged={(newQuery) => this.props.dispatch(queryChanged(newQuery))}
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
function mapStateToProps(state) {
  return {
    orderBy: state.order.orderBy,
    order: state.order.order,
    moviesList: state.movies.moviesList,
    searchCriteria: {
      query: state.filter.query,
      searchBy: state.filter.searchBy
    },
    error: state.movies.errorMoviesLoading
  }
}

export default connect(mapStateToProps, null)(Movies);
