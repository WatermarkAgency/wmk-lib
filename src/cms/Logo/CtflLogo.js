import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { wmkClass, Anchor } from "wmk-lib";

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
  return target === "internal" ? (
    <Internal to={to}>
      <JSX src={url} alt={alt} fixed={isFixed} fluid={isFluid} />
    </Internal>
  ) : (
    <External to={to} target={target}>
      <JSX src={url} alt={alt} fixed={isFixed} fluid={isFluid} />
    </External>
  );
};

export default CtflLogo;

const Internal = ({ to, children }) => <Link to={to}>{children}</Link>;

const External = ({ to, target, children }) => (
  <Anchor to={to} target={target}>
    {children}
  </Anchor>
);

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
