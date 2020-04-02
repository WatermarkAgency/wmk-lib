import React from "react";
import PropTypes from "prop-types";

const Tel = ({ className, id, children }) => {
  const classes = ["wmk-link"];
  classes.push("wmk-link-tel");
  classes.push(className);
  return (
    <a
      className={classes.join(" ").trim()}
      id={id}
      href={"tel:" + children.replace(/\D/g, "")}
    >
      {children}
    </a>
  );
};

export default Tel;

Tel.propTypes = {
  classes: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Tel.defaultTypes = {
  id: "",
  className: ""
};
