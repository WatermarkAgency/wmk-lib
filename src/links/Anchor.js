import React from "react";
import PropTypes from "prop-types";
import { wmkClass } from "wmk-lib";

const Anchor = ({ to, id, className, target, children }) => {
  return (
    <a
      href={to}
      id={id}
      className={wmkClass('anchor','link',className)}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : false}
    >
      {children}
    </a>
  );
};

export default Anchor;

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  target: PropTypes.string
};

Anchor.defaultProps = {
  target: "_self",
  id: "",
  className: ""
};
