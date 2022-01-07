import * as React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./slider.css";

export const Slider = ({ settings }) => {
  const { dots, infinite, speed, slidesToShow, slidesToScroll } = settings;

  const [ sliderWidth, setSliderWidth ] = useState(0);
  const sliderRef = useRef();
  useEffect(() => {
  const handleResize = () =>
  setSliderWidth(sliderRef.current.getBoundingClientRect().width);
  handleResize();
  window.addEventListener('resize', handleResize);
  console.log('sliderWidth: ', sliderWidth);
  return () => window.removeEventListener('resize', handleResize);
  }, [sliderWidth]);

  return (
    <div className="wrap" ref={sliderRef}>
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