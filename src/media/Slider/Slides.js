import React from "react";
import Slide from "./Slide";

const Slides = ({ slides, sliderRef, advance, isOnSlider, active }) => {
  return (
    <div className="slides" ref={sliderRef}>
      <div className="track">
        {slides && slides.length
          ? slides.map((slide, i) => {
              const { cover, url, tile } = slide;
              return children;
            })
          : null}
      </div>
    </div>
  );
};

export default Slides;
