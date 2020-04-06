import React from "react";
import { wmkClass } from 'wmk-lib';
import PropTypes from 'prop-types'
import "./FlexSpacer.css"

const FlexSpacer = ({ className, id }) => {
  return <div className={wmkClass('flex-spacer','layout',className)} id={id} />;
};

export default FlexSpacer

FlexSpacer.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

FlexSpacer.defaultProps = {
  id: "",
  className: ""
};

