import React from "react";
import LinkAnchor from "./links/Anchor";
import LinkSocialMediaIcons from "./links/SocialMediaIcons/SocialMediaIcons";
import LinkWMKLink from "./links/WMKLink";

import SearchSearchSliderOpen from './search/SearchSlider/SearchSliderOpen'
import SearchSearchSliderDrawer from './search/SearchSlider/SearchSliderDrawer'

import LayoutCopyright from "./layout/Footer/Copyright";
import LayoutFlexSpacer from "./layout/FlexSpacer/FlexSpacer";
import LayoutFooter from "./layout/Footer/Footer";
import LayoutMainLayout from "./layout/MainLayout";
import LayoutSticky from "./layout/Sticky/Sticky";
import LayoutHeader from "./layout/Header/Header";
import LayoutListItemColumns from "./layout/Columns/ListItemColumns";

import MediaVideo from "./media/Video/Video";
import MediaLightBoxImage from "./media/Images/LightBoxImage";

import MenusMenuItems from "./menus/MenuItems/MenuItems";

import CtflLogo from "./cms/Contentful/CtflLogo";

import SEOMeta from "./seo/SEOMeta";

/* Layout Components */
export const Copyright = LayoutCopyright;
export const MainLayout = LayoutMainLayout;
export const FlexSpacer = LayoutFlexSpacer;
export const Footer = LayoutFooter;
export const Header = LayoutHeader;
export const ListItemColumns = LayoutListItemColumns;
export const Sticky = LayoutSticky;

/* Link Components */
export const Anchor = LinkAnchor;
export const SocialMediaIcons = LinkSocialMediaIcons;
export const WMKLink = LinkWMKLink;

/*Search Components */
export const SearchSliderOpen = SearchSearchSliderOpen;
export const SearchSliderDrawer = SearchSearchSliderDrawer;

/* Media Components */
export const Video = MediaVideo;
export const LightBoxImage = MediaLightBoxImage;

/* Menus */
export const MenuItems = MenusMenuItems;

/* CMS Specific */
export const ContentfulLogo = CtflLogo;

/* SEO Components */
export const Meta = SEOMeta;

export default () => <h1>Components Library</h1>;
