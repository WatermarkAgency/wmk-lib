import * as React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./slider.css";

export const Slider = ({
  settings,
  SlideComponent,
  slidesDataArray,
  arrowImageSrc
}) => {
  const { arrows, dots, speed, slidesToShow, slidesToScroll } = settings;
  const safeSlidesToScroll =
    slidesToScroll <= slidesToShow ? slidesToScroll : slidesToShow;
  const prevNextButtonWidth = 80;
  // detect width of wrap and slider window
  const [wrapWidth, setWrapWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const wrapRef = useRef();
  const windowRef = useRef();
  useEffect(() => {
    const handleResize = () =>
      setWrapWidth(wrapRef.current.getBoundingClientRect().width);
      // setWindowWidth(windowRef.current.getBoundingClientRect().width);
      if (wrapWidth > 0) {
        setWindowWidth(wrapWidth - 2*prevNextButtonWidth)
      } 
    handleResize();
    window.addEventListener("resize", handleResize);
    console.log("wrapWidth: ", wrapWidth);
    console.log("windowWidth: ", windowWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, wrapWidth]);
  // ===== calculate how far left the slides container should be pulled to show the correct current slide(s) =====
  const slidesValidated =
    slidesDataArray && Array.isArray(slidesDataArray) && slidesDataArray.length;
  const slideWidth = windowWidth / slidesToShow;
  const slideCount = slidesValidated ? slidesDataArray.length : 0;
  // if showing an even number of slides, the current slide will be just left of center
  const evenOffset = slidesToShow / 2 - 1;
  const evenLeft = -((currSlide - evenOffset) * slideWidth);
  // if showing an odd number of slides, the current slide will be centered
  const oddOffset = Math.floor(slidesToShow / 2);
  const oddLeft = -((currSlide - oddOffset) * slideWidth);
  const left = slidesToShow % 2 === 0 ? evenLeft : oddLeft;

  // ===== track and increment current slide index =====
  const [currSlide, setCurrSlide] = useState(1);
  const incrementCurrSlide = ({ prevNext, safeSlidesToScroll }) => {
    let newCurrSlideIndex;
    if (prevNext === "prev") {
      if (currSlide >= safeSlidesToScroll) {
        setCurrSlide(currSlide - safeSlidesToScroll);
      } else {
        setCurrSlide(0);
      }
    } else {
      if (currSlide <= slideCount - safeSlidesToScroll) {
        setCurrSlide(currSlide + safeSlidesToScroll);
      } else {
        setCurrSlide(slideCount - 1);
      }
    }
  };

  return (
    <div className="wrap" ref={wrapRef}>
      <button
        onClick={() => incrementCurrSlide("prev", safeSlidesToScroll)}
        className="prev prevNext"
        style={{ width: prevNextButtonWidth }}>
        <img src={arrowImageSrc} alt="left arrow" />
      </button>
      <div className="window" ref={windowRef}>
        <div className="slides-container" style={{ left: left, width: (slideWidth * slideCount) }}>
          {slidesValidated ? (
            slidesDataArray.map((slide, i) => (
              <div
                className="slide-wrap"
                style={{
                  width: slideWidth,
                  position: "relative",                  
                }}
                key={`${slide}-${i}`}>
                <SlideComponent
                  slide={slide}
                  width={slideWidth}                  
                />
              </div>
            ))
          ) : (
            <p>data for slides needs to be a non-empty array</p>
          )}
        </div>
      </div>
      <button
        onClick={() => incrementCurrSlide("next", safeSlidesToScroll)}
        className="next prevNext"
        style={{ width: prevNextButtonWidth }}>
        <img src={arrowImageSrc} alt="right arrow" />
      </button>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  settings: PropTypes.object,
  SlideComponent: PropTypes.func,
  slidesDataArray: PropTypes.array,
  arrowImageSrc: PropTypes.string
};

Slider.defaultProps = {
  settings: {
    arrows: true,
    dots: true,
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
  ],
  arrowImageSrc:
    "https://images.ctfassets.net/l6o0o2yu98mw/wqq1haDungEQedVzuTubI/38f9d68aa1495acbe74a78cfb09bf490/left_arrow.png?h=250"
};
