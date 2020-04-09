import React from "react";
import { wmkClass } from "../../logic";
import PropTypes from "prop-types";
import Header from '../Header/Header'

const StickyHeader = ({ Alert, offset, className, children }) => {
  return (
    <div className={wmkClass("sticky-header", "layout", className)}>
      {Alert}
      <Header offset={offset}>{children}</Header>
    </div>
  );
};

export default StickyHeader;

StickyHeader.propTypes = {
  Alert: PropTypes.node,
  offset: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

StickyHeader.defaultProps = {
  Alert: <React.Fragment />,
  offset: 0,
  className: ""
};
