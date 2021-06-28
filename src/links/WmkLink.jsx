import * as React from "react";
import { Link } from "gatsby";
import { Anchor } from "./Anchor";

export const WmkLink = React.forwardRef(
  ({ to, target, children, mailto, tel, style }, ref) => {
    if (target || mailto || tel) {
      return (
        <Anchor
          style={style}
          ref={ref}
          href={
            mailto
              ? `mailto:${to || children}`
              : tel
              ? `tel:${to || children}`
              : to
          }
          target={target}>
          {children}
        </Anchor>
      );
    } else {
      return (
        <Link ref={ref} to={to} style={style}>
          {children}
        </Link>
      );
    }
  }
);
