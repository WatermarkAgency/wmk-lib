import React from "react";
import PropTypes from "prop-types";
import { wmkClass } from '../logic';

const Anchor = ({ to, id, className, target, children }) => {
  const rel =
    target === "_blank" || target === "blank" ? "noopener noreferrer" : target;
  return (
    <a
      href={to}
      id={id}
      className={wmkClass("anchor", "link", className)}
      target={target}
      rel={rel}
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
