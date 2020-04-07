import React from "react";
import PropTypes from "prop-types";
import { wmkClass } from "../index";

const MailTo = ({ className, id, children }) => {
  return (
    <a className={wmkClass('mailto','link',className)} id={id} href={"mailto:" + children}>
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
