import React from "react";
import { wmkClass } from "../../index";

const Copyright = ({ children, className, id }) => {
  const year = new Date().getFullYear();
  return (
    <div id={id} className={wmkClass("copyright", "layout", className)}>
      © {year} {children}
    </div>
  );
};

export default Copyright;
