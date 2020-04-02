import React from "react";
import PropTypes from "prop-types";

const Tel = ({ className, id, children }) => {
  const classes = [className];
  classes.push("wmk-link");
  classes.push("wmk-link-tel");
  return (
    <a
      className={className}
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
