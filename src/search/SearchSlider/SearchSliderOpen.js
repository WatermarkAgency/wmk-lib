import React from "react";
import PropTypes from "prop-types";

const SearchSliderOpen = ({
  isSearchOpen,
  setIsSearchOpen,
  className,
  children
}) => {
  const handleFocus = () => {
    setIsSearchOpen(true);
  };
  const _className = [];
  _className
    .push(isSearchOpen ? "search-open" : "search-closed")
    .push(className);

  return (
    <button
      className={wmkClass("drawer", "search", _className.join(" "))}
      onClick={handleFocus}
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
