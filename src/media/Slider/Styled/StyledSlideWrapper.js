import styled from 'styled-components';

export const StyledSlideWrapper = styled.div`
    position: relative;
    display: flex;
    .slides {
        overflow: hidden;
        width: ${({ slideMax }) => (slideMax ? slideMax + 'px' : '100%')};
        max-width: ${({ slideMax }) => (slideMax ? slideMax + 'px' : '100%')};
    }
    .track {
        position: relative;
        width: ${({ slideMax, total }) =>
        slideMax ? slideMax * total + 'px' : 100 * total + '%'};
        display: flex;
        right: ${({ activeSlide, slideMax }) => activeSlide * slideMax}px;
        transition: all 0.4s ease;
    }
    a {
        display: block;
    }
`;
