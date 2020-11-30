import React from 'react';

const SliderNav = ({ dir, isOnSlider, click, children }) => {
    return (
        <div
            dir={dir}
            isOnSlider={isOnSlider}
            onClick={() => click(dir)}
        >
            {children}
        </div>
    );
};

export default SliderNav;
