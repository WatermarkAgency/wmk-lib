import React, { useState, useRef, useEffect } from 'react';
import { StyledHeading } from '../StyledHeading';
import ProgressBar from './Progress/ProgressBar';
import SliderNav from './SliderNav';
import Slides from './Slides';
import { StyledSlider, StyledSlideWrapper } from './Styled';

/**
 * @type {React.Component}
 *
 * @description Create a Slider/Carousel using modern react. It's up to you to add styles.
 * Sass is available, but feel free to use any styling solution you. CSS-in-JS, CSS, etc.
 * This component needs to be reusable and customizable. Multiple instances of this component
 * should be able to exist in the same view.
 *
 * The Slider should:
 * a. Allow for variable slide intervals, but default to 4 seconds
 * b. Should pause when a user is interacting with the component
 * c. The Slider should be able to take different types of slides. For example,
 * it could be a single image or a set of tiles. Reference Beatport.com for an example
 */
const Slider = ({ slides, title }) => {
    const [activeSlide, setActiveSlide] = useState(0); //eslint-disable-line
    const [slideWidth, setSlideWidth] = useState(0);
    const [isOnSlider, setIsOnSlider] = useState(false); //eslint-disable-line
    const sliderRef = useRef();
    useEffect(() => {
        const handleResize = () => {
            sliderRef.current.querySelector('img').onload = function () {
                setSlideWidth(this.width);
            };
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    const handleEnterSlider = () => {
        setIsOnSlider(!isOnSlider);
    };
    const handleIndicator = (index) => {
        setActiveSlide(index);
    };
    const handleNavigate = (dir) => {
        if (dir === 'next') {
            if (activeSlide < slides.length - 1) {
                setActiveSlide(activeSlide + 1);
            } else { // eslint-disable-line
                setActiveSlide(0);
            }
        }
        if (dir === 'prev') {
            if (activeSlide > 0) {
                setActiveSlide(activeSlide - 1);
            } else { // eslint-disable-line
                setActiveSlide(slides.length - 1);
            }
        }
    };
    return (
        <StyledSlider className="slider" slideMax={slideWidth}>
            <StyledHeading>{title}</StyledHeading>
            <StyledSlideWrapper
                slideMax={slideWidth}
                total={slides.length}
                activeSlide={activeSlide}
                onMouseEnter={handleEnterSlider}
                onMouseLeave={handleEnterSlider}
            >
                <SliderNav
                    dir="prev"
                    isOnSlider={isOnSlider}
                    click={handleNavigate}
                />
                <Slides
                    slides={slides}
                    sliderRef={sliderRef}
                    advance={handleNavigate}
                    isOnSlider={isOnSlider}
                    active={activeSlide}
                />
                <SliderNav
                    dir="next"
                    isOnSlider={isOnSlider}
                    click={handleNavigate}
                />
            </StyledSlideWrapper>
            <ProgressBar
                slides={slides}
                activeSlide={activeSlide}
                click={handleIndicator}
            />
        </StyledSlider>
    );
};

export default Slider;
