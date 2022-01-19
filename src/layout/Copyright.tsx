import * as React from "react";
import { wmkClass } from "../logic";

export interface CssStyles {
  StandardLonghandProperties: string | number | {};
}

type copyrightProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: CssStyles;
};

export const Copyright = React.forwardRef(
  ({ children, className, id }: copyrightProps, ref) => {
    const year = new Date().getFullYear();
    return (
      <div
        id={id}
        className={wmkClass("copyright", "layout", className)}
        ref={ref}>
        © {year} {children}
      </div>
    );
  }
);
