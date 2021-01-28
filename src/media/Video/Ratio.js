import React from "react";

export default ({ width, height }) => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox={`0 0 ${width} ${height}`}
    style={{ enableBackground: `new 0 0 ${width} ${height}` }}
  ></svg>
);
