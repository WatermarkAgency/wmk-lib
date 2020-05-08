import React, { useState, useRef, useEffect } from "react";
import { wmkClass } from "../../logic";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const StickyHeader = ({
  Alert,
  className,
  children,
  absolute,
  style,
  zIndex,
  width
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
  return (
    <React.Fragment>
      <div
        className={wmkClass("sticky-header", "layout", className)}
        style={{
          ...style,
          position: scrollPos > headerHeight ? "fixed" : domPosition,
          zIndex,
          width
        }}
      >
        {Alert}
        <Header ref={headerRef}>{children}</Header>
      </div>
      {scrollPos > headerHeight && <div style={{ height: headerHeight }} />}
    </React.Fragment>
  );
};

export default StickyHeader;

StickyHeader.propTypes = {
  Alert: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  absolute: PropTypes.bool,
  zIndex: PropTypes.number,
  width: PropTypes.string
};

StickyHeader.defaultProps = {
  Alert: <React.Fragment />,
  className: "",
  absolute: false,
  zIndex: 1000,
  width: "100%"
};
