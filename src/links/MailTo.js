import React from "react";
import PropTypes from "prop-types";

const MailTo = ({ className, id, children }) => {
  const classes = ["wmk-link"];
  classes.push("wmk-link-mailto");
  classes.push(className);
  return (
    <a className={classes.join(" ")} id={id} href={"mailto:" + children}>
      {children}
    </a>
  );
};

export default MailTo;

MailTo.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

MailTo.defaultTypes = {
  id: "",
  className: ""
};
