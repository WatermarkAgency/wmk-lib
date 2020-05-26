import React from "react";
import PropTypes from "prop-types";
import { wmkClass } from "../../logic";

const SearchSliderOpen = ({
  isSearchOpen,
  setIsSearchOpen,
  className,
  children,
  style
}) => {
  const handleFocus = () => {
    setIsSearchOpen(true);
  };
  const _className = [];
  _className.push(isSearchOpen ? "search-open" : "search-closed");
  _className.push(className);

  return (
    <button
      className={wmkClass("open", "search", _className.join(" "))}
      onClick={handleFocus}
      style={style ? style : undefined}
    >
      {children}
    </button>
  );
};

export default SearchSliderOpen;

SearchSliderOpen.propTypes = {
  isSearchOpen: PropTypes.bool.isRequired,
  setIsSearchOpen: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

SearchSliderOpen.defaultProps = {
  className: ""
};
