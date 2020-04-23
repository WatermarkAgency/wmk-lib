import React from "react";
import { Link } from "gatsby";
import { wmkClass } from "../logic";
import Anchor from "./Anchor";
import PropTypes from "prop-types";

const WMKLink = React.forwardRef(
  ({ id, children, target, mailto, tel, style, className, speed }, ref) => {
    const _className = wmkClass("gatsby", "link", className);
    const _target = target ? "_" + target.replace("_", "") : null;
    return _target !== "_internal" && _target !== "_link" ? (
      <Anchor
        to={to}
        mailto={mailto}
        tel={tel}
        target={target}
        className={_className}
        id={id}
        ref={ref}
        style={style}
        speed={speed}
        animate
      >
        {children}
      </Anchor>
    ) : (
      <Link to={to} ref={ref} className={_className} id={id} style={style}>
        {children}
      </Link>
    );
  }
);

export default WMKLink;

WMKLink.defaultProps = {
  tel: false,
  mailto: false,
  id: "",
  target: "internal",
  className: "",
  to: "/"
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
