import React from "react";
import PropTypes from "prop-types";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYelp,
} from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";
import {wmkClass} from '../../logic'

const SocialMediaIcons = ({ query, platforms, className, id }) => {
  const getPlatform = (platform, platforms) => {
    let socialPlatform = null;
    platforms.forEach((p) => {
      if (platform.toLowerCase().indexOf(p.name) !== -1) {
        socialPlatform = p;
      }
    });
    return socialPlatform
  };
  const _className = wmkClass('socials','link',className)
  return (
    <React.Fragment>
      {query.map((icon) => {
        const { title, url, target } = icon;
        const platform = getPlatform(title, platforms);
        return (
          <SocialMediaIcon
            platform={platform}
            url={url}
            target={target}
            className={_className}
            key={platform.name + "-icon"}
            id={id}
          />
        );
      })}
    </React.Fragment>
  );
};

export default SocialMediaIcons;

SocialMediaIcons.propTypes = {
  query: PropTypes.array.isRequired,
  platforms: PropTypes.array,
  className: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.bool,
    propTypes.string
  ])
};

SocialMediaIcons.defaultProps = {
  platforms: [
    { name: "facebook", Icon: FaFacebookF },
    { name: "twitter", Icon: FaTwitter },
    { name: "linkedin", Icon: FaLinkedinIn },
    { name: "youtube", Icon: FaYoutube },
    { name: "instagram", Icon: FaInstagram },
    { name: "pinterest", Icon: FaPinterestP },
    { name: "yelp", Icon: FaYelp },
  ],
  id: false,
  className: ''
};
