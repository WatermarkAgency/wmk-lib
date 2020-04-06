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

const SocialMediaIcons = ({ query, platforms, className }) => {
  const getPlatform = (platform, platforms) => {
    let socialPlatform = null;
    platforms.forEach((p) => {
      if (platform.toLowerCase().indexOf(p.name) !== -1) {
        socialPlatform = p;
      }
    });
    return socialPlatform
  };
  return (
    <>
      {query.map((icon) => {
        const { title, url, target } = icon;
        const platform = getPlatform(title, platforms);
        return (
          <SocialMediaIcon
            platform={platform}
            url={url}
            target={target}
            className={className}
            key={platform.name + "-icon"}
          />
        );
      })}
    </>
  );
};

export default SocialMediaIcons;

SocialMediaIcons.propTypes = {
  query: PropTypes.array.isRequired,
  platforms: PropTypes.array,
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
};
