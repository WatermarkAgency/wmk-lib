import * as React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./slider.css";

export const Slider = ({ settings, SlideComponent, slidesDataArray }) => {
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
    <div className="window" ref={sliderRef}>
      <div className="slides-container">
        {slidesDataArray && Array.isArray(slidesDataArray) && slidesDataArray.length 
          ? slidesDataArray.map((slide, i) => <SlideComponent slide={slide} key={`${slide}-${i}`} />)
          : <p>data for slides needs to be a non-empty array</p>
        }
      </div>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  settings: PropTypes.object,
  SlideComponent: PropTypes.func,
  slidesDataArray: PropTypes.array
};

Slider.defaultProps = {
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }, 
  SlideComponent: ({ slide }) => {
    const { img, title, copy } = slide;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src={img.src} alt={img.title} />
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    )
  },
  slidesDataArray: [
    {
      img: {
        src: "https://via.placeholder.com/400x250",
        title: "placeholder image"
      },
      title: "slide 1",
      copy: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      img: {
        src: "https://via.placeholder.com/400x250",
        title: "placeholder image"
      },
      title: "slide 2",
      copy: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      img: {
        src: "https://via.placeholder.com/400x250",
        title: "placeholder image"
      },
      title: "slide 3",
      copy: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
  ]
};