import React from "react";
import { wmkClass } from "../../logic";

const Header = React.forwardRef(({ children, className, style }, ref) => {
  //   style["top"] = offset ? offset : 0;
  return (
    <header
      className={wmkClass("header", "layout", className)}
      style={style}
      ref={ref}
    >
      {children}
    </header>
  );
});

export default Header;
