import React from "react";
import { wmkClass, Copyright } from "wmk-lib";

const Footer = ({ children, className, id }) => {
  return (
    <footer class={wmkClass("footer", "layout", className)} id={id}>
      {children}
      <Copyright>Copyright goes here.</Copyright>
    </footer>
  );
};

export default Footer;
