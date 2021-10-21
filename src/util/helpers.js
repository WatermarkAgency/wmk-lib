/**
 *
 * @param {Array} arr
 * @param {number} per - an interger representing max items per page
 * @returns {Array} - an array of arrays representing each page
 */
export const paginateArray = (arr, per = 20) => {
  if (Array.isArray(arr)) {
    const totalPages = Math.ceil(arr.length / per);
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages[i] = arr.slice(i * per, i * per + per);
    }
    return pages;
  } else {
    return [[]];
  }
};
