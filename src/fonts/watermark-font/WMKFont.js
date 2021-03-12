import React from "react";
import PropTypes from "prop-types";

import "./css/watermark-font.css";

const WMKFont = ({ icon, prefix }) => {
  return <i className={`${prefix}-${icon}`} aria-hidden="true" />;
};

// export default WMKFont

WMKFont.propTypes = {
  icon: PropTypes.string.isRequired,
  prefix: PropTypes.string,
};

WMKFont.defaultProps = {
  prefix: "wmk",
};

export const WMKIconArrow = () => <WMKFont icon={"arrow"} />;
export const WMKIconBack = () => <WMKFont icon={"back"} />;
export const WMKIconBranding = () => <WMKFont icon={"branding"} />;
export const WMKIconCaptivate = () => <WMKFont icon={"captivate"} />;
export const WMKIconCareers = () => <WMKFont icon={"careers"} />;
export const WMKIconCollaborate = () => <WMKFont icon={"collaborate"} />;
export const WMKIconConstruct = () => <WMKFont icon={"construct"} />;
export const WMKIconDigital = () => <WMKFont icon={"digital"} />;
export const WMKIconFacebook = () => <WMKFont icon={"facebook"} />;
export const WMKIconHelp = () => <WMKFont icon={"help"} />;
export const WMKIconInbound = () => <WMKFont icon={"inbound"} />;
export const WMKIconInstagram = () => <WMKFont icon={"instagram"} />;
export const WMKIconLinkedIn = () => <WMKFont icon={"linkedin"} />;
export const WMKIconOutbound = () => <WMKFont icon={"outbound"} />;
export const WMKIconPinterest = () => <WMKFont icon={"pinterest"} />;
export const WMKIconSales = () => <WMKFont icon={"sales"} />;
export const WMKIconTwitter = () => <WMKFont icon={"twitter"} />;
export const WMKIconWatermark = () => <WMKFont icon={"watermark"} />;
export const WMKIconYouTube = () => <WMKFont icon={"youtube"} />;
