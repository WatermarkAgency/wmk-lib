import React from "react";
import { Anchor, wmkClass } from "wmk-lib";
import PropTypes from "prop-types";

const SocialMediaIcon = ({ platform, url, target, className, Icon }) => {
  return (
    <Anchor
      key={platform}
      to={url}
      target={target}
      className={wmkClass(platform, "social-icon", className)}
    >
      <Icon />
      <span className="sr-only sr-only-focusable">
        {"Open " + platform + " page"}
      </span>
    </Anchor>
  );
};

export default SocialMediaIcon;

SocialMediaIcon.propTypes = {
  platform: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string
};

SocialMediaIcon.defaultProps = {
  target: "_blank"
};
