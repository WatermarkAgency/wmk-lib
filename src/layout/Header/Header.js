import React from "react";
import { wmkClass } from "../../logic";

const Header = ({ children, className, offset, style }) => {
  //   style["top"] = offset ? offset : 0;
  return (
    <header className={wmkClass("header", "layout", className)} style={style}>
      {children}
    </header>
  );
};

export default Header;
