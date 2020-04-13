import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ListItemColumn from "./ListItemColumn";
import {wmkClass} from '../../logic'

const ListItemColumns = ({ list, cols, JSX, className }) => {
  const sortList = list;
  const total = sortList.length;
  const per = Math.floor(total / cols);
  const rem = total % cols;
  const columns = [];
  for (let i = 0; i < cols; i++) {
    const retVal = i < cols - 1 ? per : per + rem;
    const column = [];
    for (let j = 0; j < retVal; j++) {
      column.push(sortList.shift());
    }
    columns.push(column);
  }
  return columns && columns.length ? (
    <Row className={wmkClass('list-item-columns','layout',className)}>
      {columns.map((col, i) => {
        const randomString =
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15);
        return (
          <Col
            key={col + "-" + randomString + "-" + i}
            xs={12}
            sm={12}
            md={6}
            lg={4}
          >
            <ListItemColumn list={col} JSX={JSX} />
          </Col>
        );
      })}
    </Row>
  ) : null;
};

export default ListItemColumns;

ListItemColumns.propTypes = {
  list: PropTypes.array.isRequired,
  cols: PropTypes.number,
  JSX: PropTypes.func,
  className: PropTypes.string
};

ListItemColumns.defaultProps = {
  cols: 3,
  JSX: ({ li }) => <Col>{console.log(li)} List Item Data</Col>,
  className: ""
};
