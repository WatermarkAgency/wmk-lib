import get from "lodash.get";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const Slide = props => {
  const delay = get(props, `delay`);
  const { isOnSlider, advance, active, children } = props;
  const [currTimeout, setCurrTimeout] = useState();
  useEffect(() => {
    if (index === active) {
      if (isOnSlider) {
        clearTimeout(currTimeout);
      } else {
        //eslint-disable-line
        const timeout = setTimeout(() => {
          advance("next");
        }, delay);
        setCurrTimeout(timeout);
      }
    }

    return () => clearTimeout(currTimeout);
  }, [active, isOnSlider]);
  return (
    <StyledSlide href={url}>
      <StyledSlideImage src={cover} alt="" />
      {tile && <Tile tile={tile} isOnSlider={isOnSlider} />}
    </StyledSlide>
  );
};

export default Slide;

Slide.propTypes = {
  delay: PropTypes.number
};

Slide.defaultProps = {
  delay: 4000
};
