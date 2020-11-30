import styled from 'styled-components';

export const StyledSlider = styled.div`
    display: block;
    width: ${({ slideMax }) => (slideMax ? slideMax + 'px' : '100%')};
    overflow: hidden;
    max-width: 100%;
`;
