/**
 *
 * @param {Array} arr
 * @param {number} per - an interger representing max items per page
 * @returns {Object} - an array of arrays representing each page
 */
const paginateArray = (arr, per = 20) => {
  if (Array.isArray(arr)) {
    const totalPages = Math.ceil(arr.length / per);
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages[i] = arr.slice(i * per, i * per + per);
    }
    return pages;
  } else {
    return [];
  }
};

/**
 * Class that represets paginated items
 */
export class Pagination {
  /**
   * Declare pagination
   * @param {Array} arr - an interger representing max items per page
   * @param {number} per - an array of arrays representing each page
   */
  constructor(arr, per = 20) {
    const pages = paginateArray(arr, per);
    this.pages = pages;
    this.perPage = per;
    this.length = pages.length;
    this.total = Array.isArray(arr) ? arr.length : 0;
  }
}
