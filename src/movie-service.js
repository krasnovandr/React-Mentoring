import queryString from "query-string"
export class MovieService {
  constructor() {
    this.baseUrl = "http://react-cdp-api.herokuapp.com/movies";
  }

  searchMovie(
    searchBy,
    search,
    sortBy,
    sortOrder,
    offset = 0,
    limit = 18
  ) {

    let params = { searchBy, search, sortBy, sortOrder, offset, limit }

    let queryParams = queryString.stringify(params);
    let buildedUrl = `${this.baseUrl}?${queryParams}`;

    return fetch(buildedUrl)
      .then(response => response.json())

  }

  getMovie(id) {
    let buildedUrl = `${this.baseUrl}/${id}`;
    return fetch(buildedUrl).then(response => response.json());
  }
}
