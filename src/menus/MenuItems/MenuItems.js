import React from "react";
import { Row, Col } from "react-bootstrap";
import WMKLink from "../../links/WMKLink";
import PropTypes from "prop-types";

const DefaultHeader = ({ children }) => <Col>{children}</Col>;
const DefaultMenu = ({ to, target, children }) => (
  <Col>
    <WMKLink to={to} target={target}>
      {children}
    </WMKLink>
  </Col>
);

MenuItems.defaultProps = {
  Header: DefaultHeader,
  Menu: DefaultMenu
};

MenuItems.propTypes = {
  Header: PropTypes.func,
  Menu: PropTypes.func,
  menus: PropTypes.array.isRequired
};

const MenuItems = ({ Header, menus, Menu }) => {
  return (
    <Row className="flex-column">
      <Header />
      {menus &&
        menus.map((item, i) => {
          const { title, target, to } = item;
          return (
            <Menu key={title + i} to={to} target={target}>
              {title}
            </Menu>
          );
        })}
    </Row>
  );
};

export default MenuItems;
