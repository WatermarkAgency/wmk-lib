import React from "react";
import { Link } from "gatsby";
import { Anchor, Tel, MailTo } from "wmk-lib";
import PropTypes from "prop-types";

const WMKLink = ({ children, to, target, className, id, mailto, tel }) => {
  let JSX = null;
  switch (true) {
    case mailto:
      JSX = ({children}) => <MailTo>{children}</MailTo>;
      break;
    case tel:
      JSX = ({children}) => <Tel>{children}</Tel>;
      break;
    case target:
      JSX = ({ to, target, children }) => (
        <Anchor to={to} target={target}>
          {children}
        </Anchor>
      );
      break;
    default:
      JSX = ({ to, children }) => <Link to={to}>{children}</Link>;
  }
  return <JSX>{children}</JSX>;
};

export default WMKLink;

WMKLink.defaultProps = {
  tel: false,
  mailto: false,
  id: "",
  target: "internal",
  className: ""
};

WMKLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  mailto: PropTypes.bool,
  tel: PropTypes.bool
};
