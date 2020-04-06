import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { wmkClass, WMKLink } from "wmk-lib";

const CtflLogo = ({
  fluid,
  fixed,
  contentType,
  url,
  id,
  className,
  to,
  alt,
  target
}) => {
  const isFixed = fixed && !fixed.notAProp ? fixed : false;
  const isFluid = fluid && !fluid.notAProp ? fluid : false;
  let JSX = null;
  switch (true) {
    case contentType.indexOf("svg") !== -1:
      JSX = ({ src, alt, className, id }) => (
        <img
          className={wmkClass("logo", "ctfl", className)}
          id={id}
          src={src}
          alt={alt}
        />
      );
      break;
    case isFixed !== false:
      JSX = ({ fixed, alt, id, className }) => (
        <Img
          className={wmkClass("logo", "ctfl", className)}
          id={id}
          fixed={fixed}
          alt={alt}
        />
      );
      break;
    case isFluid !== false:
      JSX = ({ fluid, alt, id, className }) => (
        <Img
          className={wmkClass("logo", "ctfl", className)}
          id={id}
          fluid={fluid}
          alt={alt}
        />
      );
      break;
    default:
      JSX = () => <div>Contentful Image Error</div>;
  }
  return target === "internal" ? (
    <WMKLink to={to}>
      <JSX
        src={url}
        alt={alt}
        fixed={isFixed}
        fluid={isFluid}
        className={className}
        id={id}
      />
    </WMKLink>
  ) : (
    <WMKLink to={to} target={target}>
      <JSX
        src={url}
        alt={alt}
        fixed={isFixed}
        fluid={isFluid}
        className={className}
        id={id}
      />
    </WMKLink>
  );
};

export default CtflLogo;

CtflLogo.propTypes = {
  fluid: PropTypes.object,
  fixed: PropTypes.object,
  alt: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  url: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string
};

CtflLogo.defaultProps = {
  fluid: { notAProp: true },
  fixed: { notAProp: true },
  url: "",
  id: "",
  className: "",
  to: "/",
  target: "internal"
};
