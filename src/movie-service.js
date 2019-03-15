export class MovieService {
  constructor() {
    this.baseUrl = "http://react-cdp-api.herokuapp.com/movies";
  }

  searchMovie(
    searchBy,
    search,
    sortBy = "",
    order = "",
    offset = 0,
    limit = 20
  ) {
    let buildedUrl = this.baseUrl;
    buildedUrl += "?"
    if (searchBy) {
      buildedUrl += `&searchBy=${searchBy}`;
    }
    if (search) {
      buildedUrl += `&search=${search}`;
    }
    if (sortBy) {
      buildedUrl += `&sortBy=${sortBy}`;
      if (order) {
        buildedUrl += `&sortOrder=${order}`;
      }
    }
    if (offset) {
      buildedUrl += `&offset=${offset}`;
    }
    if (limit) {
      buildedUrl += `&limit=${limit}`;
    }

    return fetch(buildedUrl).then(response => response.json());
  }

  getMovie(id) {
    let buildedUrl = `${this.baseUrl}/${id}`;
    return fetch(buildedUrl).then(response => response.json());
  }
}
