import get from "lodash/get";

export class MediaQueries {
  constructor(breakpoints, _units) {
    const units = _units ? _units : "px";
    this.breakpoints = breakpoints
      ? { ...breakpoints }
      : {
          xs: { amount: 576, units },
          sm: { amount: 768, units },
          md: { amount: 992, units },
          lg: { amount: 1200, units }
        };
  }
  _bp(size) {
    return get(this, `breakpoints.${size}`, {
      amount: "error",
      units: "error"
    });
  }
  addSize(size, amount, units) {
    this.breakpoints[size] = { amount, units };
  }
  max(size, css, mediaType) {
    const type = mediaType ? mediaType : { type: "screen", qualifier: "only" };
    return this.query(type, [{ feature: "max-width", break: size }], css);
  }
  min(size, css, mediaType) {
    const type = mediaType ? mediaType : { type: "screen", qualifier: "only" };
    return this.query(type, [{ feature: "min-width", break: size }], css);
  }
  only(css, _type) {
    const type = _type ? _type : "screen";
    return this.query({ type, qualifier: "only" }, [], css);
  }
  _mediaFeature(feature, breakpoint) {
    const featStr =
      get(breakpoint, "amount", "") + get(breakpoint, "units", "");
    return `and (${feature}: ${featStr})`;
  }
  _mediaType(type, qualifier) {
    const _t = type ? type : "all";
    const _q =
      qualifier === "only" ? " only " : qualifier === "not" ? " not " : " ";
    return `@media${_q}${_t}`;
  }
  query(typeObj, features, css) {
    const feats = features.map(feat => {
      const bp = this._bp(feat.break);
      return this._mediaFeature(feat.feature, bp);
    });
    return `${this._mediaType(typeObj.type, typeObj.qualifier)} ${feats.join(
      " "
    )}{${css}}`;
  }
}
