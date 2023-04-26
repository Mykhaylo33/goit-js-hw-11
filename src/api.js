const axios = require('axios').default;

export class SearchImageApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async getImage() {
    const URL = 'https://pixabay.com/api/';
    const searchParams = new URLSearchParams({
      key: '35591917-63dcfa9e69eea21e43d62ef2e',
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: '40',
      page: `${this.page}`,
    });
    const response = await axios.get(`${URL}?${searchParams}`);
    return response;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
