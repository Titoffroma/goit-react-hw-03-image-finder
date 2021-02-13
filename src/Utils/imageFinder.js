import { pushError, removeError } from './pnotify';

export default class ImageFinder {
  constructor(key, perPage) {
    this.APIURL = 'https://pixabay.com/api/';
    this.perPage = perPage;
    this.count = 1;
    this.searchQuery = '';
    this.key = key;
  }
  get searchURL() {
    return (
      this.APIURL +
      '?key=' +
      this.key +
      '&image_type=photo&orientation=horizontal&per_page=' +
      this.perPage +
      '&q='
    );
  }
  clearResult() {
    this.count = 1;
    removeError();
  }

  async fetchResult(query) {
    if (!query.length) {
      pushError('Enter the search word');
      return { hits: [] };
    }
    try {
      const response = await fetch(
        this.searchURL + query + '&page=' + this.count,
      );
      const result = await response.json();
      if (response.ok) {
        if (result.hits && !result.hits.length) {
          if (this.count > 1) pushError('No more matches. Try new search');
          pushError('No matches. Try new search');
        }
        this.count += 1;
        return result;
      }
      return pushError(result.message);
    } catch (err) {
      pushError(err.message);
    }
  }
}
