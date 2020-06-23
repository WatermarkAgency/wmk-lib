import React, { useState, useRef, useEffect } from "react";
import { wmkClass } from "../../logic";
import PropTypes from "prop-types";
import {Header} from "../Header/Header";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export const Sticky = ({
  Alert,
  className,
  children,
  absolute,
  style,
  zIndex,
  width,
  trigger
}) => {
  const domPosition = absolute ? "absolute" : "relative";
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  const headerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [headerHeight]);

  useScrollPosition(({ currPos }) => {
    setScrollPos(currPos.y * -1);
  });
  const classes = [className];
  const triggerHeight = trigger > 0 ? trigger : headerHeight
  if (scrollPos > triggerHeight) classes.push("stuck");
  return (
    <React.Fragment>
      <div
        className={wmkClass("sticky-header", "layout", classes.join(" "))}
        style={{
          ...style,
          position: scrollPos > triggerHeight ? "fixed" : domPosition,
          zIndex,
          width
        }}
      >
        {Alert}
        <Header ref={headerRef}>{children}</Header>
      </div>
      {scrollPos > triggerHeight && <div style={{ height: headerHeight }} />}
    </React.Fragment>
  );
};

Sticky.propTypes = {
  Alert: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  absolute: PropTypes.bool,
  zIndex: PropTypes.number,
  width: PropTypes.string,
  trigger: PropTypes.number
};

Sticky.defaultProps = {
  Alert: <React.Fragment />,
  className: "",
  absolute: false,
  zIndex: 1000,
  width: "100%",
  trigger: 0
};
