import React from "react";
import {Row, Col} from 'react-bootstrap'

const MenuList = ({ header, menu }) => {
  return (
    <Row className="flex-column">
      <Col>
        <FooterHeader>{title.split("Footer: ")[1]}</FooterHeader>
      </Col>
      {menuItems &&
        menuItems.map(item => {
          const { title, slug } = item;
          const path =
            item.__typename.search(/Page/) > 0
              ? "/"
              : Theme.paths.communities + "/";
          return (
            <Col key={slug}>
              <Link to={path + slug}>{title}</Link>
            </Col>
          );
        })}
    </Row>
  );
};

export default MenuList