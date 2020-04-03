import React from "react";
import LinkMailTo from './links/MailTo'
import LinkTel from './links/Tel'
import LinkAnchor from './links/Anchor'

import LayoutFlexSpacer from './layout/FlexSpacer'
import LayoutMainLayout from './layout/MainLayout'


/* Link Components */
export const MailTo = LinkMailTo
export const Tel = LinkTel
export const Anchor = LinkAnchor
export const MainLayout = LayoutMainLayout

/* Layout Components */
export const FlexSpacer = LayoutFlexSpacer

export const wmkClass = (name, group, append = "", prefix = "wmk") => {
    const classes = [prefix+"-"+group,prefix+"-"+group+'-'+name,append];
    return classes.join(" ").trim();
  };
  

export default () => <h1><MailTo> Components Library</MailTo></h1>