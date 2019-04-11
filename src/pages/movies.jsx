import React, { useState, useEffect } from 'react';
import MoviesList from "../components/movies-list";
import SearchToolbox from "../components/search-toolbox";
import SortingPanel from "../components/sorting-panel";
import { ErrorMessage } from "../shared-components/error-message";
import { connect } from "react-redux";
import { loadMoviesRequest, queryChanged, orderByChanged, orderChanged, searchByChanged } from '../actions';

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(loadMoviesRequest());
  }

  componentDidUpdate(prevProps) {
    if (this.props.order !== prevProps.order || this.props.orderBy !== prevProps.orderBy) {
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
    orderBy: state.orderBy,
    order: state.order,
    moviesList: state.moviesList,
    searchCriteria: {
      query: state.searchCriteria.query,
      searchBy: state.searchCriteria.searchBy
    },
    error: state.errorMoviesLoading
  }
}

export default connect(mapStateToProps, null)(Movies);
