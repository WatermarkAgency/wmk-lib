import React from "react";
import styled from "styled-components";
import { wmkClass } from "wmk-lib";
import PropTypes from 'prop-types'

const SpacerWrap = styled.div`
  .flex-spacer {
    margin: auto;
  }
`;

const FlexSpacer = ({ className, id }) => {
  return <SpacerWrap className={wmkClass('flex-spacer','layout','flex-spacer'+" "+className)} id={id} />;
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

