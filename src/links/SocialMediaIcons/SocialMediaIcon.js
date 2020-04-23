import React from "react";
import Anchor from "../Anchor";
import PropTypes from "prop-types";

const SocialMediaIcon = React.forwardRef(
  ({ platform, url, target, className, id }, ref) => {
    const { Icon, name } = platform;
    const _className = name + (className !== "" ? " " + className : "");
    const _id = id ? id + "-" + name : false;
    return (
      <Anchor
        key={name}
        to={url}
        target={target}
        className={_className}
        ref={ref}
        id={_id}
      >
        <Icon />
        <span className="sr-only sr-only-focusable">
          {"Open " + name + " page"}
        </span>
      </Anchor>
    );
  }
);

export default SocialMediaIcon;

SocialMediaIcon.propTypes = {
  platform: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string
};

SocialMediaIcon.defaultProps = {
  target: "_blank",
  id: false,
  className: ""
};
