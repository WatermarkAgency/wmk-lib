export class UrlPaths {
  constructor(baseUrl, parents) {
    this.baseUrl = baseUrl
    this.parents = parents.reduce((a, b) => {
      const { path, subs, name } = b
      a[name] = { path, subs }
      return a
    }, {})
  }
  url(name, str) {
    const _str = str ? '/' + str : ''
    return name
      ? '//' + this.baseUrl + this._getParentPath(name) + _str
      : '//' + this.baseUrl + _str
  }
  rel(name, str) {
    const _str = str ? '/' + str : ''
    return name ? this._getParentPath(name) + _str : _str
  }
  _getParentPath(parent) {
    const { path } = this.parents[parent]
      ? this.parents[parent]
      : { path: '', subs: {} }
    return '/' + path
  }
}
