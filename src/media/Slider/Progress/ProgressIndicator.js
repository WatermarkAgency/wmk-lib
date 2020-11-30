import React from 'react';
import styled from 'styled-components';

const Indicator = styled.div`
    width: 9%;
    height: 5px;
    margin: 0.75rem 0.5%;
    background: ${({ isActive }) =>
        isActive ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)'};
    :hover {
        cursor: pointer;
    }
    transition: all .3s ease;
`;

const ProgressIndicator = ({ index, isActive, click }) => {
    return (
        <Indicator
            aria-label={'slide number ' + (index + 1)}
            isActive={isActive}
            onClick={() => click(index)}
        />
    );
};

export default ProgressIndicator;
