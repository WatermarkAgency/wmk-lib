import React from "react";
import { Anchor, wmkClass } from "wmk-lib";
import PropTypes from "prop-types";

const SocialMediaIcon = ({ platform, url, target, className }) => {
  const {Icon, name} = platform
  return (
    <Anchor
      key={name}
      to={url}
      target={target}
      className={wmkClass(name, "social-icon", className)}
    >
      <Icon />
      <span className="sr-only sr-only-focusable">
        {"Open " + name + " page"}
      </span>
    </Anchor>
  );
};

export default SocialMediaIcon;

SocialMediaIcon.propTypes = {
  platform: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string
};

SocialMediaIcon.defaultProps = {
  target: "_blank"
};
