import React from "react";
import { wmkClass } from '../../logic';

export const Footer = React.forwardRef(({ children, className, id },ref) => {
  return (
    <footer className={wmkClass("footer", "layout", className)} id={id} ref={ref}>
      {children}
    </footer>
  );
});
