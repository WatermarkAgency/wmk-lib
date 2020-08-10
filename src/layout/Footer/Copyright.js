import React from "react";
import { wmkClass } from "../../logic";

export const Copyright = React.forwardRef(({ children, className, id },ref) => {
  const year = new Date().getFullYear();
  return (
    <div id={id} className={wmkClass("copyright", "layout", className)} ref={ref}>
      © {year} {children}
    </div>
  );
});
