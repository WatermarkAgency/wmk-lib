/**
 *
 */
const paginateArray = (arr: {}[], per = 20) => {
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
  pages: {}[][];
  perPage: number;
  length: number;
  total: number;
  constructor(arr: {}[][], per = 20) {
    const pages = paginateArray(arr, per);
    this.pages = pages;
    this.perPage = per;
    this.length = pages.length;
    this.total = Array.isArray(arr) ? arr.length : 0;
  }
}

export class HashTable {
  table: { [key: string]: any };
  constructor(arr: { [key: string]: any }[], key: string) {
    const hash = arr.reduce((hash, i) => {
      return hash;
    }, {});
    this.table = hash;
  }
  row(str: string) {
    const ret = this.table[str];
    return ret ? ret : undefined;
  }
}
