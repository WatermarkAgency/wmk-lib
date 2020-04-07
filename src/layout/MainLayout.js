import React from "react";
import PropTypes from "prop-types";
import { wmkClass, FlexSpacer } from 'wmk-lib';

const MainLayout = ({ children, Header, Footer, className }) => {
  const HeaderJSX = Header
  const FooterJSX = Footer
  return (
    <div className={wmkClass("wrap","layout")}>
      <HeaderJSX />
      <main className={wmkClass("main", "layout",className)}>{children}</main>
      <FlexSpacer />
      <FooterJSX />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  Header: PropTypes.func,
  Footer: PropTypes.func
};

MainLayout.defaultProps = {
  Header: () => <div>Pass Header JSX</div>,
  Footer: () => <div>Pass Footer JSX</div>
};

export default MainLayout;
