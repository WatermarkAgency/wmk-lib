import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const FlexWrap = styled.div`
.flex-spacer {
  margin: auto;
}
`
const Layout = ({ children }) => {
  return (
    <FlexWrap>
      <Header />
      <main>{children}</main>
      <div className="flex-spacer"/>
      <Footer />
      <Stripe />
    </FlexWrap>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
