import * as React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./slider.css";

export const Slider = ({ settings, SlideComponent, slidesDataArray }) => {
  const { dots, infinite, speed, slidesToShow, slidesToScroll } = settings;

  const [currSlide, setCurrSlide] = useState(0);
  // detect width of slider
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef();
  useEffect(() => {
    const handleResize = () =>
      setSliderWidth(sliderRef.current.getBoundingClientRect().width);
    handleResize();
    window.addEventListener("resize", handleResize);
    console.log("sliderWidth: ", sliderWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, [sliderWidth]);
  // calculate how far left the slides container should be pulled to show the correct current slide(s)
  const slidesValidated =
    slidesDataArray && Array.isArray(slidesDataArray) && slidesDataArray.length;
  const slideWidth = sliderWidth / slidesToShow;
  const slideCount = slidesValidated ? slidesDataArray.length : 0;
  // If showing an even number of slides, the current slide will be the left slide of the middle two slides.
  const evenOffset = (slidesToShow / 2) - 1;
  const evenLeft = -((currSlide - evenOffset) * slideWidth);
  // If showing an odd number of slides, the current slide will be centered
  const oddOffset = Math.floor(slidesToShow / 2);
  const oddLeft = -((currSlide - oddOffset) * slideWidth);
  const left = slidesToShow % 2 === 0 ? evenLeft : oddLeft;
  return (
    <div className="window" ref={sliderRef}>
      <div className="slides-container" style={{ left: left }}>
        {slidesValidated ? (
          slidesDataArray.map((slide, i) => (
            <div className="slide-wrap" style={{ position: 'relative', width: `${slideWidth} !important` }}>
              <SlideComponent                
                slide={slide}
                width={slideWidth}
                key={`${slide}-${i}`}
              />
            </div>
          ))
        ) : (
          <p>data for slides needs to be a non-empty array</p>
        )}
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
  SlideComponent: ({ slide, width }) => {
    const { img, title, copy } = slide;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: width
        }}>
        <img src={img.src} alt={img.title} />
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    );
  },
  slidesDataArray: [
    {
      img: {
        src: "https://via.placeholder.com/400x250",
        title: "placeholder image"
      },
      title: "slide 1",
      copy: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
    },
    {
      img: {
        src: "https://via.placeholder.com/400x250",
        title: "placeholder image"
      },
      title: "slide 2",
      copy: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
    },
    {
      img: {
        src: "https://via.placeholder.com/400x250",
        title: "placeholder image"
      },
      title: "slide 3",
      copy: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
    }
  ]
};
