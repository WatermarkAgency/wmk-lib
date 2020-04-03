import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { wmkClass } from "wmk-lib";

const CtflLogo = ({
  fluid,
  fixed,
  contentType,
  url,
  id,
  className,
  to,
  alt
}) => {
  const isFixed = fixed && !fixed.notAProp ? fixed : false
  const isFluid = fluid && !fluid.notAProp ? fluid : false
  let JSX = null;
  switch (true) {
    case contentType.indexOf('svg') !== -1:
      JSX = ({ src, alt }) => (
        <img
          className={wmkClass("logo", "ctfl", className)}
          id={id}
          src={src}
          alt={alt}
        />
      );
      break;
    case fixed:
      JSX = ({ fixed, alt }) => (
        <Img
          className={wmkClass("logo", "ctfl", className)}
          id={id}
          fixed={fixed}
          alt={alt}
        />
      );
      break;
    case fluid:
      JSX = ({ fluid, alt }) => (
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
  return (
    <Link to={to}>
      <JSX src={url} alt={alt} fixed={isFixed} fluid={isFluid} />
    </Link>
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
  to: PropTypes.string
};

CtflLogo.defaultProps = {
  fluid: { notAProp: true },
  fixed: { notAProp: true },
  url: "",
  id: "",
  className: "",
  to: "/"
};
