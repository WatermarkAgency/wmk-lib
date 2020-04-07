import React from "react";
import { Row, Col } from "react-bootstrap";
import WMKLink from "../../links/WMKLink";
import PropTypes from "prop-types";

// MenuItems.defaultProps = {
//   header=
// }

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

MenuItems.propTypes = {
  Header: props => <Col>{props.children}</Col>,
  Menu: props => (
    <Col>
      <WMKLink to={props.to} target={props.target}>
        {props.children}
      </WMKLink>
    </Col>
  )
};
