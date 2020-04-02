import React from "react";
import PropTypes from "prop-types";

const Anchor = ({ to, id, className, target, children }) => {
  const classes = ["wmk-link"];
  classes.push("wmk-link-anchor");
  classes.push(className);
  return (
    <a
      href={to}
      id={id}
      className={classes.join(" ").trim()}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : false}
    >
      {children}
    </a>
  );
};

export default Anchor;

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  target: PropTypes.string
};

ExternalLink.defaultProps = {
  target: "_self",
  id: "",
  className: ""
};
