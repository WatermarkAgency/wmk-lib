import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FlexSpacer from "./FlexSpacer";
import { wmkClass } from "wmk-lib";

const FlexWrap = styled.div`
  .flex-spacer {
    margin: auto;
  }
`;
const MainLayout = ({ children, Header, Footer, className }) => {
  return (
    <FlexWrap>
      <Header />
      <main className={wmkClass("main", "layout",className)}>{children}</main>
      <FlexSpacer />
      <Footer />
    </FlexWrap>
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
