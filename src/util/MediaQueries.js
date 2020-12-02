import get from "lodash/get";

export class MediaQueries {
  constructor(breakpoints, units) {
    const _units = units ? units : "px";
    this.breakpoints = breakpoints
      ? { ...breakpoints }
      : {
          xs: { amount: 576, units: _units },
          sm: { amount: 768, units: _units },
          md: { amount: 992, units: _units },
          lg: { amount: 1200, units: _units }
        };
  }
  _bp(size) {
    return get(this, `breakpoints.${size}`, {
      amount: "error",
      units: "error"
    });
  }
  max(size, css, mediaType) {
    const _type = mediaType ? mediaType : { type: "screen", qualifier: "only" };
    return this.query(_type, [{ feature: "max-width", break: size }], css);
  }
  min(size, css, mediaType) {
    const _type = mediaType ? mediaType : { type: "screen", qualifier: "only" };
    return this.query(_type, [{ feature: "min-width", break: size }], css);
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
