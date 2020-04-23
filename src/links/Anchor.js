import React from "react";
import PropTypes from "prop-types";
import { wmkClass } from "../logic";

const Anchor = React.forwardRef(
  (
    { to, id, className, target, children, style, speed, mailto, tel, animate },
    ref
  ) => {
    const _style = animate
      ? { ...style, transition: `all ${speed}s ease` }
      : style;
    const _target = target ? "_" + target.replace("_", "") : null;
    const rel = _target === "_blank" ? "noopener noreferrer" : target;
    const prefix = tel ? "tel:" : mailto ? "mailto:" : "";
    const _to = tel ? to.replace(/\D/g, "") : to;
    const _link = tel ? "tel" : mailto ? "mailto" : "anchor";
    return (
      <a
        href={prefix + _to.toLowerCase()}
        id={id}
        className={wmkClass(_link, "link", className)}
        target={_target}
        rel={rel}
        ref={ref}
        style={_style}
      >
        {children}
      </a>
    );
  }
);

export default Anchor;

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  speed: PropTypes.number,
  mailto: PropTypes.bool,
  tel: PropTypes.bool,
  animate: PropTypes.bool,
  rel: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
};

Anchor.defaultProps = {
  target: "_blank",
  id: "",
  className: "",
  speed: ".3",
  mailto: false,
  tel: false,
  animate: false
};
