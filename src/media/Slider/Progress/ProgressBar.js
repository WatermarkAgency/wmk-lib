import React from "react";
import styled from "styled-components";
import ProgressIndicator from "./ProgressIndicator";

const ProgressBar = ({ slides, activeSlide, click }) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      {slides && slides.length
        ? slides.map((slide, i) => (
            <ProgressIndicator
              key={"slideProgress" + i}
              isActive={activeSlide === i}
              index={i}
              click={click}
            />
          ))
        : null}
    </div>
  );
};

export default ProgressBar;
