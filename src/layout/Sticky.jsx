import * as React from "react";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { wmkClass } from "../logic";
import { Header } from "./Header";

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
  const [headerRect, setHeaderRect] = useState({ y: 0, height: 0, width: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const [location, setLocation] = useState();

  const headerRef = useRef();

  useEffect(() => {
    setLocation(window.location.href);
    const handleResize = () => {
      setHeaderRect(headerRef.current.getBoundingClientRect());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location]);

  useScrollPosition(({ currPos }) => {
    setScrollPos(currPos.y * -1);
  });
  const classes = [className];
  const triggerHeight =
    !Alert && !headerRect.y
      ? trigger >= 0
        ? trigger
        : headerRect.height
      : headerRect.y;
  const isTriggered = scrollPos > triggerHeight;
  if (isTriggered) classes.push("stuck");
  return (
    <React.Fragment>
      <div
        className={wmkClass("sticky-header", "layout", classes.join(" "))}
        style={{
          ...style,
          position: isTriggered ? "fixed" : domPosition,
          zIndex,
          width
        }}>
        {!isTriggered ? Alert : null}
        <Header ref={headerRef}>{children}</Header>
      </div>
      {Alert && isTriggered ? <div style={{ height: headerRect.y }} /> : null}
      {isTriggered && <div style={{ height: headerRect.height }} />}
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
