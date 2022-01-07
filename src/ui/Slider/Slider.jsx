import * as React from "react";
import PropTypes from "prop-types";
import "./slider.css";

export const Slider = ({ settings }) => {
  const { dots, infinite, speed, slidesToShow, slidesToScroll } = settings;

  return (
    <div className="wrap">
      slider
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  settings: PropTypes.object,
};

Slider.defaultProps = {
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
};