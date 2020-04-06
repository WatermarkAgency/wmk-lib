import React from "react";
import PropTypes from "prop-types";
import { wmkClass, FlexSpacer } from 'wmk-lib';

const MainLayout = ({ children, Header, Footer, className }) => {
  const HeaderJSX = Header
  const FooterJSX = Footer
  return (
    <>
      <HeaderJSX />
      <main className={wmkClass("main", "layout",className)}>{children}</main>
      <FlexSpacer />
      <FooterJSX />
    </>
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
