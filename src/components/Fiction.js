import React from "react";
import styled from "styled-components";
import Final from "../icons/Fiction/Final 1.jpg";
import fINAL from "../icons/Fiction/fINAL.jpg";

const Wrapper = styled.div.attrs({
    className: String('lal-FictionWrapper')
})`
  margin-left: 190px;
  margin-top: 12%;
  display: flex;
  justify-content: space-evenly;
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

const Fiction = () => {
    return (
        <Wrapper>
            <Anchor href="https://lal-poly.s3.amazonaws.com/Death+and+Ressurection++AMAZON+NOVEL+3+-+Copy.pdf" target="_blank" rel="Death and Ressurection" title="Death and Ressurection of Lazar">
                <img src={Final} alt="logo" style={{ width: "65%" }} />
            </Anchor>

            <Anchor href="https://lal-poly.s3.amazonaws.com/FINAL+SOLUTION+REVISED.pdf" target="_blank" rel="Final Solution" title="Final Solution">
                <img src={fINAL} alt="logo" style={{ width: "65%" }} />
            </Anchor>
        </Wrapper>
    );
};

export default Fiction;
