import React from "react";
import LinkMailTo from "./links/MailTo";
import LinkTel from "./links/Tel";
import LinkAnchor from "./links/Anchor";
import LinkSocialMediaIcons from "./links/SocialMediaIcons/SocialMediaIcons";
import LinkWMKLink from "./links/WMKLink";

import LayoutCopyright from "./layout/Footer/Copyright";
import LayoutFlexSpacer from "./layout/FlexSpacer/FlexSpacer";
import LayoutFooter from "./layout/Footer";
import LayoutMainLayout from "./layout/MainLayout";
import LayoutSticky from "./layout/Sticky/Sticky";
import LayoutHeader from "./layout/Header/Header";

import MediaVideo from "./media/Video/Video";

import MenusMenuItems from "./menus/MenuItems/MenuItems";

import ContentfulLogo from "./cms/Logo/CtflLogo";

/* Layout Components */
export const Copyright = LayoutCopyright;
export const MainLayout = LayoutMainLayout;
export const FlexSpacer = LayoutFlexSpacer;
export const Footer = LayoutFooter;
export const Header = LayoutHeader;
export const Sticky = LayoutSticky;

/* Link Components */
export const MailTo = LinkMailTo;
export const Tel = LinkTel;
export const Anchor = LinkAnchor;
export const SocialMediaIcons = LinkSocialMediaIcons;
export const WMKLink = LinkWMKLink;

/* Media Components */
export const Video = MediaVideo;

/* Menus */
export const MenuItems = MenusMenuItems;

export const CtflLogo = ContentfulLogo;

export default () => <h1>Components Library</h1>;
