import React from "react";
import styled from "styled-components";
import Final from "../icons/Fiction/Final 1.jpg";
import fINAL from "../icons/Fiction/fINAL.jpg";
import Ghost from "../icons/Fiction/Ghost.jpg";

const Wrapper = styled.div.attrs({
    className: String('lal-FictionWrapper')
})`
  margin-left: 190px;
  margin-top: 12%;
  display: flex;
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
`;

const Fiction = () => {
    return (
        <Wrapper>
            <Anchor href="https://lalopoly.s3.amazonaws.com/Death+and+Ressurection+AMAZON+NOVEL+3.pdf" target="_blank" rel="Death and Ressurection">
                <img src={Final} alt="logo" style={{ width: "65%" }} />
            </Anchor>

            <Anchor href="https://lalopoly.s3.amazonaws.com/Final+Solution+AMAZON+NOVEL+1.pdf" target="_blank" rel="Final Solution">
                <img src={fINAL} alt="logo" style={{ width: "65%" }} />
            </Anchor>

            <Anchor href="https://lalopoly.s3.amazonaws.com/Ghost+of+Vijayalakshmi.pdf" target="_blank" rel="Ghost of Vijayalakshmi">
                <img src={Ghost} alt="logo" style={{ width: "65%" }} />
            </Anchor>
        </Wrapper>
    );
};

export default Fiction;
