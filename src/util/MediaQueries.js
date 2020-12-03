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
  range(start, end, css, _typeObj) {
    const typeObj = _typeObj ? _typeObj : { type: "screen", qualifier: "only" };
    const startBreaks = get(this, `breakpoints.${start}`);
    const endBreaks = get(this, `breakpoints.${end}`);
    return this.query(
      typeObj,
      [
        {
          feature: get(start, "feature"),
          breakpoint: {
            amount: get(startBreaks, "amount") + 1,
            units: get(startBreaks, "units")
          }
        },
        {
          feature: get(end, "feature"),
          breakpoint: {
            amount: get(endBreaks, "amount") - 1,
            units: get(endBreaks, "units")
          }
        }
      ],
      css
    );
  }
  addSize(size, amount, _units) {
    const units = _units ? _units : "px";
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
    return `${this._mediaType(
      get(typeObj, `type`),
      get(typeObj, `qualifier`)
    )} ${feats.join(" ")}{${css}}`;
  }
}
