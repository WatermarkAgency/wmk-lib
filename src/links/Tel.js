import React from "react";
import PropTypes from "prop-types";
import { wmkClass } from '../logic';

const Tel = ({ className, id, children }) => {
  return (
    <a
      className={wmkClass('tel','link',className)}
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
  children: PropTypes.node.isRequired
};

Tel.defaultTypes = {
  id: "",
  className: ""
};
