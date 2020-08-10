import React from "react";
import { Row, Col } from "react-bootstrap";
import {WMKLink} from "../../links/WMKLink";
import PropTypes from "prop-types";

export const MenuItems = ({ Header, header, menus, Menu }) => {
  return (
    <Row className="flex-column">
      <Header>{header}</Header>
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

MenuItems.defaultProps = {
  Header: ({ children }) => <Col>{children}</Col>,
  Menu: ({ to, target, children }) => (
    <Col>
      <WMKLink to={to} target={target}>
        {children}
      </WMKLink>
    </Col>
  ),
  menus: []
};

MenuItems.propTypes = {
  Header: PropTypes.func,
  Menu: PropTypes.func,
  menus: PropTypes.array,
  header: PropTypes.node
};
