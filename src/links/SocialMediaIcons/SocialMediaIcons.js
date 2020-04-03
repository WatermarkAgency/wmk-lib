import React from "react";
import PropTypes from "prop-types";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";

const getPlatform = (platform, platforms) => {
  let socialPlatform = null;
  platforms.forEach((p) => {
    if (platform.toLowerCase().indexOf(p) !== -1) {
      socialPlatform = p;
    }
  });
  return socialPlatform;
};

const SocialMediaIcons = ({ icons, platforms, className }) => {
  return (
    <>
      {icons.map((icon) => {
        const { title, url, target } = icon;
        const platform = getPlatform(title, platforms);
        let JSX = null;
        switch (platform) {
          case "facebook":
            JSX = FaFacebookF;
            break;
          case "twitter":
            JSX = FaTwitter;
            break;
          case "youtube":
            JSX = FaYoutube;
            break;
          case "linkedin":
            JSX = FaLinkedinIn;
            break;
          case "instagram":
            JSX = FaInstagram;
            break;
          case "pinterest":
            JSX = FaPinterestP;
            break;
          default:
            JSX = () => <div>Error: No Icon Import for {platform}</div>;
        }
        return (
          <SocialMediaIcon
            platform={getPlatform(title, platforms)}
            url={url}
            target={target}
            className={className}
            Icon={() => <JSX />}
            key={platform + "-icon"}
          />
        );
      })}
    </>
  );
};

export default SocialMediaIcons;

SocialMediaIcons.propTypes = {
  icons: PropTypes.array.isRequired,
  platforms: PropTypes.array,
};

SocialMediaIcons.defaultProps = {
  platforms: [
    "facebook",
    "twitter",
    "linkedin",
    "youtube",
    "instagram",
    "pinterest",
    "yelp",
  ],
};
