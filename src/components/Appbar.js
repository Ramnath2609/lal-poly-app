import React from "react";
import styled from "styled-components";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Icon from "../icons/down-arrow.png";
import Content from "./Content";

const NavBar = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #182c61;
`;

const DownIcon = styled.img`
  width: 8px;
  padding-left: 2px;
`;

const Title = styled.h2`
  margin: 10px;
  color: white;
  font-weight: 300;
  letter-spacing: 3px;
  text-shadow: 0px 0px 3px;
  text-transform: uppercase;
  font-size: 30px;
`;

const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const StyledLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  margin: 10px;
  letter-spacing: 2px;
  transition: 0.3s ease;

  &::before {
    position: absolute;
    content: "";
    top: 110%;
    background-color: white;
    left: 0;
    height: 2px;
    width: 0;
    transition: 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);

    ::before {
      width: 100%;
    }
  }
`;

const DropDownContent = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: 0.3s ease;
`;

const DropDownLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: black;
  padding: 10px;

  &:hover {
    background: #ddd;
  }
`;

const DropDownButton = styled.button`
  border: none;
  outline: none;
  background: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 2px;
  transition: 0.3s ease;
`;

const DropDown = styled.div`
  position: relative;
  display: inline;

  &:hover ${DropDownContent} {
    visibility: visible;
    opacity: 1;
  }

  &:hover ${DropDownButton} {
    transform: translateY(-5px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Appbar = () => {
  return (
    <BrowserRouter>
      <NavBar>
        <TitleBar>
          <Title>Lal Poly Bureau Publishing Ltd</Title>
        </TitleBar>
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about-us">About Us</StyledLink>
          <DropDown>
            <DropDownButton>
              Fiction
              <DownIcon src={Icon} />
            </DropDownButton>
            <DropDownContent>
              <DropDownLink>Novels</DropDownLink>
              <DropDownLink>Non fiction</DropDownLink>
            </DropDownContent>
          </DropDown>
          <DropDown>
            <DropDownButton>
              Non-fiction
              <DownIcon src={Icon} />
            </DropDownButton>
            <DropDownContent>
              <DropDownLink>Biographies</DropDownLink>
              <DropDownLink>Studies on issues</DropDownLink>
            </DropDownContent>
          </DropDown>
          <StyledLink to="/book-reviews">Book Reviews</StyledLink>
          <StyledLink to="/writers-corner">Writer's Corner</StyledLink>
          <StyledLink to="/contact-us">Contact Us</StyledLink>
        </NavLinks>
      </NavBar>

      <Route path="/" component={Content} />
    </BrowserRouter>
  );
};

export default Appbar;
