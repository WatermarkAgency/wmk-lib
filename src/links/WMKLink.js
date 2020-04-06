import React from "react";
import { Link } from "gatsby";
import { Anchor, Tel, MailTo, wmkClass } from "../";
import PropTypes from "prop-types";

const WMKLink = props => {
  const { children, target, mailto, tel } = props;
  let JSX = null;
  switch (true) {
    case mailto:
      JSX = ({ children, className, id }) => (
        <MailTo className={className} id={id}>
          {children}
        </MailTo>
      );
      break;
    case tel:
      JSX = ({ children, className, id }) => (
        <Tel className={className} id={id}>
          {children}
        </Tel>
      );
      break;
    case target && target !== "internal":
      JSX = ({ to, target, children, className, id }) => (
        <Anchor to={to} target={target} className={className} id={id}>
          {children}
        </Anchor>
      );
      break;
    default:
      JSX = ({ to, children, className, id }) => (
        <Link to={to} className={wmkClass("gatsby", "link", className)} id={id}>
          {children}
        </Link>
      );
  }
  return <JSX {...props}>{children}</JSX>;
};

export default WMKLink;

WMKLink.defaultProps = {
  tel: false,
  mailto: false,
  id: "",
  target: "internal",
  className: "",
  to: '/'
};

WMKLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  mailto: PropTypes.bool,
  tel: PropTypes.bool
};
