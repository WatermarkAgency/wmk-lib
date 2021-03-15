import React from "react";
import PropTypes from "prop-types";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaLinkedinIn,
//   FaInstagram,
//   FaPinterestP,
//   FaYelp,
// } from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";
import { wmkClass } from "../../logic";

export const SocialMediaIcons = ({ query, platforms, className }) => {
  const getPlatform = (platform, platforms) => {
    let socialPlatform = null;
    platforms.forEach((p) => {
      if (platform.toLowerCase().indexOf(p.name) !== -1) {
        socialPlatform = p;
      }
    });
    return socialPlatform;
  };
  const _className = wmkClass("icon", "social", className);
  return (
    <div>
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
          />
        );
      })}
    </div>
  );
};

SocialMediaIcons.propTypes = {
  query: PropTypes.array.isRequired,
  platforms: PropTypes.arrayOf([PropTypes.object]),
  className: PropTypes.string,
};

SocialMediaIcons.defaultProps = {
  platforms: [
    { name: "facebook", Icon: () => <em>error</em> },
    { name: "twitter", Icon: () => <em>error</em> },
    { name: "linkedin", Icon: () => <em>error</em> },
    { name: "youtube", Icon: () => <em>error</em> },
    { name: "instagram", Icon: () => <em>error</em> },
    { name: "pinterest", Icon: () => <em>error</em> },
    { name: "yelp", Icon: () => <em>error</em> },
  ],
  className: "",
};
