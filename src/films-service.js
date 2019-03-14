export class FilsmService {
  constructor() {
    this.baseUrl = "http://react-cdp-api.herokuapp.com/movies?";
  }

  getFilms(
    searchBy,
    search,
    sortBy = "",
    order = "",
    offset = 0,
    limit = 20
  ) {
    let buildedUrl = this.baseUrl;
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
}
