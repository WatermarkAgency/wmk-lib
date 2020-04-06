import React from "react";
import { wmkClass } from "wmk-lib";

const Footer = ({ children, className, id }) => {
  return (
    <footer class={wmkClass("footer", "layout", className)} id={id}>
      {children}
    </footer>
  );
};

export default Footer;
