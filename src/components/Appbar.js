import React from "react";
import styled from "styled-components";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Icon from "../icons/down-arrow.png";
import ContactUs from "../components/ContactUs";
import LogoTitle from "../icons/Title Logo.png";
import LogoBook from "../icons/Book Logo.png";
import Home from "./Home";
import Fiction from "../components/Fiction";
import BookReviews from "../components/BookReviews";
import WriterCorner from "../components/WriterCorner";

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

const Title = styled.div`
  width: 35%;
  /* height: 50px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const Anchor = styled.a`
  text-decoration: none;
  display: block;
  color: black;
  padding: 10px;
  min-width: 180px;

  &:hover {
    color: #0077D9;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  margin: 10px;
  letter-spacing: 2px;
  transition: 0.3s ease;
  font-family: RobotoBold;
  font-size: 18px;

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
  margin-left: 9px;
`;

const DropDownContentArticle = styled(DropDownContent).attrs({
  className: String('lal-book-dropDownContentArticle')
})`
  min-width: 180px;
`;

const DropDownLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: black;
  padding: 10px;
  min-width: 180px;

  &:hover {
    color: #0077D9;
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
  font-family: RoboroBold;
  font-size: 18px;
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

const ImageHolder = styled.div`
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
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
          <ImageHolder>
            <img src={LogoBook} alt="logo" style={{ width: "100%" }} />
          </ImageHolder>
          <Title>
            <img src={LogoTitle} alt="logo" style={{ width: "100%" }} />
          </Title>
        </TitleBar>

        <NavLinks>
          <StyledLink to="/">Home</StyledLink>

          <DropDown>
            <DropDownButton>
              Short Stories
              <DownIcon src={Icon} />
            </DropDownButton>
            <DropDownContent>
               <Anchor href="https://lalopoly.s3.amazonaws.com/Crucifixtion+of+darling.pdf" target="_blank" rel="Crucifixtion of darling">Crucifixion of darling</Anchor>
               <Anchor href="https://lalopoly.s3.amazonaws.com/The+Visitor+to+Alanchy.pdf" target="_blank" rel="The Visitor to Alanchy">The Visitor to Alanchy</Anchor>
            </DropDownContent>
          </DropDown>

          <DropDown>
            <DropDownButton>
              Fiction
              <DownIcon src={Icon} />
            </DropDownButton>
            <DropDownContent>
              <DropDownLink  to="/fiction">Novels</DropDownLink>
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

          <DropDown>
            <DropDownButton>
              Article
              <DownIcon src={Icon} />
            </DropDownButton>
            <DropDownContentArticle>
                <Anchor href="https://lalopoly.s3.amazonaws.com/EI+document.pdf" target="_blank" rel="EIDocument">Emotional Intelligence</Anchor>
            </DropDownContentArticle>
          </DropDown>

          <StyledLink to="/book-reviews">Book Reviews</StyledLink>
          <StyledLink to="/writers-corner">Writer's Corner</StyledLink>
          <StyledLink to="/contact-us">Contact Us</StyledLink>
        </NavLinks>
      </NavBar>

      <Route exact path="/" component={Home} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/fiction" component={Fiction} />
      <Route path="/book-reviews" component={BookReviews} />
      <Route path="/writers-corner" component={WriterCorner} />
    </BrowserRouter>
  );
};

export default Appbar;
