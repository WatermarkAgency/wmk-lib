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
    const startBreaks = this._bp(start);
    const endBreaks = this._bp(end);
    const minFirst =
      get(startBreaks, "amount", NaN) < get(endBreaks, "amount", NaN);
    return this.query(
      typeObj,
      [
        {
          feature: minFirst ? "min-width" : "max-width",
          break: {
            amount: get(startBreaks, "amount") + (minFirst ? 0.1 : -0.1),
            units: get(startBreaks, "units")
          }
        },
        {
          feature: minFirst ? "max-width" : "min-width",
          break: {
            amount: get(endBreaks, "amount") + (minFirst ? -0.1 : 0.1),
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
    return this.query(
      type,
      [{ feature: "max-width", break: this._bp(size) }],
      css
    );
  }
  min(size, css, mediaType) {
    const type = mediaType ? mediaType : { type: "screen", qualifier: "only" };
    return this.query(
      type,
      [{ feature: "min-width", break: this._bp(size) }],
      css
    );
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
      return this._mediaFeature(feat.feature, feat.break);
    });

    return `${this._mediaType(
      get(typeObj, `type`),
      get(typeObj, `qualifier`)
    )} ${feats.join(" ")}{${css}}`;
  }
}
