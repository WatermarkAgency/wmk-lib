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
  // prevent scrolling from skipping any slides (ex: you are showing 3 slides at a time, but set slidesToScroll to 4, which would skip a slide every time it's scrolled so safeSlidesToScroll is set to 3 instead of 4)
  const safeSlidesToScroll =
    slidesToShow && slidesToScroll
      ? slidesToScroll <= slidesToShow
        ? slidesToScroll
        : slidesToShow
      : 1;
  const prevNextButtonWidth = 50;
  // detect width of wrap and slider window
  const [wrapWidth, setWrapWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const wrapRef = useRef();
  const windowRef = useRef();
  useEffect(() => {
    const handleResize = () => {
      setWrapWidth(wrapRef.current.getBoundingClientRect().width);
    // setWindowWidth(windowRef.current.getBoundingClientRect().width);
    if (wrapWidth > 0) {
      if (arrows) {
        setWindowWidth(wrapWidth - 2 * prevNextButtonWidth);
      } else {
        setWindowWidth(wrapWidth);
      }
    }}
    handleResize();
    window.addEventListener("resize", handleResize);
    // console.log("wrapWidth: ", wrapWidth);
    // console.log("windowWidth: ", windowWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, wrapWidth]);

  // ===== track and increment current slide index =====
  const [currSlide, setCurrSlide] = useState(0);
  // ===== calculate how far left the slides container should be pulled to show the correct current slide(s) =====
  const slidesValidated =
    slidesDataArray && Array.isArray(slidesDataArray) && slidesDataArray.length;
  const slideWidth = windowWidth / slidesToShow;
  // console.log('slideWidth: ', slideWidth);
  const slideCount = slidesValidated ? slidesDataArray.length : 0;
  // if showing an even number of slides, the current slide will be just left of center
  const evenOffset = slidesToShow / 2 - 1;
  const evenLeft = -((currSlide - evenOffset) * slideWidth);
  // if showing an odd number of slides, the current slide will be centered
  const oddOffset = Math.floor(slidesToShow / 2);
  const oddLeft = -((currSlide - oddOffset) * slideWidth);
  const left = slidesToShow % 2 === 0 ? evenLeft : oddLeft;
  const incrementCurrSlide = (prevNext, safeSlidesToScroll) => {
    if (prevNext === "prev") {
      if (currSlide >= safeSlidesToScroll) {
        setCurrSlide(currSlide - safeSlidesToScroll);
      } else {
        setCurrSlide(0);
      }
    } else {
      if (currSlide <= slideCount - 1 - safeSlidesToScroll) {
        setCurrSlide(currSlide + safeSlidesToScroll);
      } else {
        setCurrSlide(slideCount - 1);
      }
    }
  };

  return (
    <div className="wrap" ref={wrapRef}>
      {arrows && <button
        onClick={() => incrementCurrSlide("prev", safeSlidesToScroll)}
        className="prev prevNext"
        style={{ width: prevNextButtonWidth }}>
        <img src={arrowImageSrc} alt="left arrow" />
      </button>}
      <div className="window" style={{width: windowWidth}} ref={windowRef}>
        <div
          className="slides-container"
          style={{ left: left, width: slideWidth * slideCount, transition: `all ${speed ? speed/1000 : .5}s ease` }}>
          {slidesValidated ? (
            slidesDataArray.map((slide, i) => (
              <div
                className="slide-wrap"
                style={{
                  width: slideWidth,
                  position: "relative",
                  overflow: "hidden"
                }}
                key={`${slide}-${i}`}>
                <SlideComponent slide={slide} width={slideWidth} />
              </div>
            ))
          ) : (
            <p>data for slides needs to be a non-empty array</p>
          )}
        </div>
      </div>
      {arrows && <button
        onClick={() => incrementCurrSlide("next", safeSlidesToScroll)}
        className="next prevNext"
        style={{ width: prevNextButtonWidth }}>
        <img src={arrowImageSrc} alt="right arrow" />
      </button>}
      {dots && <div className="dots">
        {slidesValidated && slidesDataArray.map((s,i) => {
          return <button onClick={() => setCurrSlide(i)} className={`dot ${currSlide === i ? 'active' : null}`} />
        })}
      </div>}
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
        src: "https://via.placeholder.com/600x250",
        title: "placeholder image"
      },
      title: "slide 1",
      copy: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
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
