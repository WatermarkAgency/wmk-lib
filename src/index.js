import React from "react";
import LinkMailTo from "./links/MailTo";
import LinkTel from "./links/Tel";
import LinkAnchor from "./links/Anchor";
import LinkSocialMediaIcons from "./links/SocialMediaIcons/SocialMediaIcons";
import LinkWMKLink from "./links/WMKLink"

import LayoutCopyright from "./layout/Footer/Copyright";
import LayoutFlexSpacer from "./layout/FlexSpacer/FlexSpacer";
import LayoutFooter from './layout/Footer'
import LayoutMainLayout from "./layout/MainLayout";

import MediaVideo from "./media/Video/Video";

import ContentfulLogo from "./cms/Logo/CtflLogo";


/* Layout Components */
export const Copyright = LayoutCopyright;
export const MainLayout = LayoutMainLayout;
export const FlexSpacer = LayoutFlexSpacer;
export const Footer = LayoutFooter;


/* Link Components */
export const MailTo = LinkMailTo;
export const Tel = LinkTel;
export const Anchor = LinkAnchor;
export const SocialMediaIcons = LinkSocialMediaIcons;
export const WMKLink = LinkWMKLink

/* Media Components */
export const Video = MediaVideo;

export const CtflLogo = ContentfulLogo;

export default () => <h1>Components Library</h1>;
