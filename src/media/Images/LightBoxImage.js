import React, { useState } from "react";
//import { IoIosClose } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export const LightBoxImage = ({ url, alt, caption, fluid, prefix }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <React.Fragment>
      <figure className={`${prefix}-wrap`}>
        <button
          aria-label={`Expand ${alt} image`}
          style={{ border: "none", appearance: "none" }}
          onClick={handleExpand}
        >
          <img className={prefix} src={url} alt={alt} />
        </button>
        {caption && (
          <figcaption className={`${prefix}-caption`}>{caption}</figcaption>
        )}
      </figure>
      {isExpanded ? (
        <Container
          fluid
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,.75)",
            zIndex: 11111,
            padding: 0
          }}
        >
          <Row className="flex-column" style={{ width: "100%" }}>
            {/* <Col
              style={{
                display: "flex",
                justifyContent: "flex-end",
                WebkitFlex: "initial",
              }}
            >
              <button
                aria-label="Close lightbox"
                onClick={handleExpand}
                style={{
                  margin: "3vh 3vh 0 3vh",
                  background: "none",
                  color: "white",
                  appearance: "none",
                  border: "none",
                  fontSize: "4rem",
                  lineHeight: 0,
                  padding: 0,
                }}
              >
                <IoIosClose />
              </button>
            </Col> */}
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                WebkitFlex: "initial",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                alignItems: "center"
              }}
            >
              <button
                aria-label="Close lightbox"
                onClick={handleExpand}
                style={{
                  position: "absolute",
                  background: "transparent",
                  width: "100%",
                  height: "100%",
                  zIndex: 1
                }}
              >
                Close
              </button>
              <img
                className={`${prefix}-lightbox`}
                src={url}
                alt={alt}
                style={{
                  width: fluid ? "100%" : "auto",
                  maxWidth: "80vw",
                  //maxWidth: fluid ? "none" : "100%",
                  maxHeight: fluid ? "80vh" : "none",
                  objectFit: "contain",
                  zIndex: 2
                }}
              />
            </Col>
            {caption && (
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  WebkitFlex: "initial"
                }}
              >
                <figcaption
                  className={`${prefix}-lightbox-caption`}
                  style={{ color: "white", padding: ".5rem" }}
                >
                  {caption}
                </figcaption>
              </Col>
            )}
          </Row>
        </Container>
      ) : null}
    </React.Fragment>
  );
};

LightBoxImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  fluid: PropTypes.bool,
  prefix: PropTypes.string
};

LightBoxImage.defaultProps = {
  alt: "",
  fluid: false,
  prefix: "embedded-image"
};
