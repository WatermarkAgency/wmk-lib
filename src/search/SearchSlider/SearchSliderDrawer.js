import React, { useState } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { IoIosClose } from "react-icons/io";
import PropTypes from "prop-types";
import { WMKLink } from "wmk-lib";
import {wmkClass} from '../../logic'

const SearchSliderDrawer = ({
  isSearchOpen,
  setIsSearchOpen,
  query,
  Result,
  Close,
  className
}) => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const getSearchIndex = query => {
    const searchIndices = Object.keys(query).map(key => {
      // gets each array of objects
      const data = query[key].edges.map(edge => {
        edge.node["nodeType"] = key;
        return edge.node;
      });
      // pushes each individual object

      const all = data.map(datum => datum);
      return all;
    });

    const searchIndex = [].concat
      .apply([], searchIndices)
      .sort((a, b) => (a.title > b.title ? 1 : -1));
    return searchIndex;
  };

  const searchIndex = getSearchIndex(query);

  const handleSearch = e => {
    let search = searchIndex.filter(item => {
      const lower = item.title.toLowerCase();
      return lower.includes(e.target.value.toLowerCase());
    });
    setSearchKey(e.target.value);
    setSearchResults(search);
  };
  const handleClose = () => {
    setIsSearchOpen(false);
  };
  const handleSumbit = e => {
    e.preventDefault();
  };
  const _className = [];
  _className.push(isSearchOpen ? "search-open" : "search-closed");
  _className.push(className);
  return (
    <div
      style={{
        position: isSearchOpen ? "fixed" : "absolute",
        zIndex: !isSearchOpen ? -1 : 20000,
        width: isSearchOpen ? "100%" : "1px",
        minHeight: isSearchOpen ? "100%" : "none",
        height: isSearchOpen ? "auto" : "1px",
        transition: "all 0.3s ease",
        right: 0,
        top: 0,
        overflow: isSearchOpen ? "scroll" : "hidden"
      }}
      className={wmkClass('drawer','search',_className.join(" "))}
    >
      <Row className="flex-column" style={{ width: "100%" }}>
        <Col
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            padding: "2vh 3vw",
            minHeight: "5rem"
          }}
        >
          <button
            onClick={handleClose}
            aria-label="Close Search"
            className="close"
          >
            <Close />
          </button>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            minHeight: "5rem"
          }}
        >
          <Form
            style={{ width: "80%" }}
            onSubmit={handleSumbit}
            className="search-form"
          >
            <Form.Control
              placeholder="Enter Search..."
              onChange={handleSearch}
            />
          </Form>
        </Col>
        <Col className="results">
          <Container>
            <Row
              style={{ maxWidth: "80%", margin: "auto" }}
              className="flex-column"
            >
              {searchResults && searchResults.length && searchKey !== "" ? (
                searchResults.map((result, i) => {
                  return (
                    <Col key={result.title + i}>
                      <Result result={result} />
                    </Col>
                  );
                })
              ) : searchResults && !searchResults.length && searchKey !== "" ? (
                <Col>
                  <em>
                    No results matching <strong>{searchKey}</strong>.
                  </em>
                  <p>
                    <sub>Please try another search.</sub>
                  </p>
                </Col>
              ) : null}
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default SearchSliderDrawer;

SearchSliderDrawer.propTypes = {
  isSearchOpen: PropTypes.bool.isRequired,
  setIsSearchOpen: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired,
  Result: PropTypes.func,
  Close: PropTypes.func
};

SearchSliderDrawer.defaultProps = {
  Result: ({ result }) => <WMKLink to={result.slug}>{result.title}</WMKLink>,
  Close: () => <IoIosClose />
};
