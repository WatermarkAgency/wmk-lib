import React from "react";
import { wmkClass } from "wmk-lib";
import PropTypes from "prop-types";

const DefaultWrapper = ({ children, path, slug }) => (
  <>
    {children}
    {console.log("pass a Wrapper functional prop", path, slug)}
  </>
);

const MenuItem = ({ children, path, slug, Wrapper, className, id }) => {
  const MenuWrapper = Wrapper ? Wrapper : DefaultWrapper;
  return (
    <div className={wmkClass("menu-item", "menus", className)} id={id}>
      <MenuWrapper path={path} slug={slug}>
        {children}
      </MenuWrapper>
    </div>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.slug,
  slug: PropTypes.slug.isRequired,
  Wrapper: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string
};

MenuItem.defaultProps = {
  path: "",
  Wrapper: DefaultWrapper,
  id: "",
  className: ""
};
