import get from 'lodash.get';
import React from 'react';
import styled from 'styled-components';
import { StyledMetaText } from '../StyledMetaText';
import { StyledTitle } from '../StyledTitle';
import { StyledPrice } from './Styled';

const StyledTile = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    bottom: ${({ isOnSlider }) => (isOnSlider ? 0 : '-33%')};
    height: 33%;
    transition: all 0.33s ease;
    color: #fefefe;
`;

const Tile = ({ tile, isOnSlider }) => {
    const title = get(tile, 'title', 'Title Missing');
    const artists = get(tile, 'artists', ['Artists Missing']);
    const label = get(tile, 'label', 'Label Missing');
    const price = get(tile, 'price', 'FREE');
    return (
        <StyledTile isOnSlider={isOnSlider}>
            <div style={{ padding: '4vh' }}>
                <StyledTitle>{title}</StyledTitle>
                <div
                    style={{
                        display: 'flex',
                        flex: 'initial',
                        alignItems: 'center',
                    }}
                >
                    <StyledMetaText>{artists.join(', ')}</StyledMetaText>
                    <StyledMetaText pipe muted>
                        |
                    </StyledMetaText>
                    <StyledMetaText muted>{label}</StyledMetaText>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flex: 'initial',
                        alignItems: 'center',
                        padding: '1vh 0',
                    }}
                >
                    play & playlist
                    <StyledPrice>${price}</StyledPrice>
                </div>
            </div>
        </StyledTile>
    );
};

export default Tile;
