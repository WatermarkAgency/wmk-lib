import * as React from "react";
import { Link } from "gatsby";
import { Anchor } from "./Anchor";
import PropTypes from "prop-types";

export const WmkLink = React.forwardRef(
  ({ to, target, children, mailto, tel, style, className, label }, ref) => {
    if (target || mailto || tel) {
      return (
        <Anchor
          style={style}
          ref={ref}
          to={
            mailto
              ? `mailto:${to || children}`
              : tel
              ? `tel:${to || children}`
              : to
          }
          target={target}
          className={className}
          label={label}>
          {children}
        </Anchor>
      );
    } else {
      return (
        <Link
          ref={ref}
          to={to}
          style={style}
          className={className}
          aria-label={label}>
          {children}
        </Link>
      );
    }
  }
);

WmkLink.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
  mailto: PropTypes.bool,
  tel: PropTypes.bool,
  style: PropTypes.object
};
