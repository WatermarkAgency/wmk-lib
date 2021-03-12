import * as React from "react";
import PropTypes from "prop-types";
import { wmkClass } from "../logic";

export const Anchor = React.forwardRef(
  (
    { onClick, to, id, className, target, children, style, speed, mailto, tel, animate, rel, label },
    ref
  ) => {
    const _style = animate
      ? { ...style, transition: `all ${speed}s ease` }
      : style;
    const _target = target ? "_" + target.replace("_", "") : null;
    const _rel = _target === "_blank" ? "noopener noreferrer" : rel;
    const prefix = tel ? "tel:" : mailto ? "mailto:" : "";
    const _to = tel ? to.replace(/\D/g, "") : to;
    const _link = tel ? "tel" : mailto ? "mailto" : "anchor";
    return (
      <a
        href={prefix + _to}
        id={id ? id : undefined}
        className={wmkClass(_link, "link", className)}
        target={_target}
        rel={_rel}
        ref={ref}
        style={_style}
        aria-label={label}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
);

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  target: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  id: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  speed: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  mailto: PropTypes.bool,
  tel: PropTypes.bool,
  animate: PropTypes.bool,
  rel: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
};

Anchor.defaultProps = {
  target: false,
  id: false,
  className: "",
  speed: ".3",
  mailto: false,
  tel: false,
  animate: false
};
