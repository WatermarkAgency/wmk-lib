import React from "react";
import { wmkClass } from "../../logic";
import PropTypes from "prop-types";

export const FlexSpacer = ({ className, id }) => {
  return (
    <div
      className={wmkClass("flex-spacer", "layout", className)}
      id={id}
      style={{ margin: "auto" }}
    />
  );
};

export default FlexSpacer;

FlexSpacer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

FlexSpacer.defaultProps = {
  id: "",
  className: ""
};
