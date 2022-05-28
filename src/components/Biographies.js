import React from 'react';
import styled from 'styled-components';
import Cover from '../icons/Non-fiction/KODIKKAL_COVER_PHOTO.jpg';

const Wrapper = styled.div.attrs({
    className: String('lal-FictionWrapper')
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Anchor = styled.a.attrs({
    className: String('lal-Anchor')
})`
    cursor: pointer;
    text-decoration: none;
    display: block;
    color: black;
    padding: 10px;
    height: 413px;
    margin-right: 5px;
    margin-left: 5px;
    background-color: #f1f2f4;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 400px;
`;

export function Biographies() {
    return (
        <Wrapper>
            <Anchor href="https://lal-poly.s3.amazonaws.com/Kodikkal+Biography.pdf" target="_blank" rel="Kodikal Biography" title="Kodikal Biography">
                <img src={Cover} alt="kodikal biography" style={{ width: "85%" }} />
            </Anchor>
        </Wrapper>
    )
}