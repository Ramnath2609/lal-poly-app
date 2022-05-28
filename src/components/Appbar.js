import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Icon from "../icons/down-arrow.png";
import ContactUs from "../components/ContactUs";
import LogoTitle from "../icons/Title Logo.png";
import Home from "./Home";
import Fiction from "../components/Fiction";
import BookReviews from "../components/BookReviews";
import { Biographies } from "./Biographies";
import WriterCorner from "../components/WriterCorner";

const NavBar = styled.div.attrs({
  className: 'header',
  })`
  display: flex;
  width: 100%;
  grid-area: header;
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
  margin-left: 20px;
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
    transition: all 0.3s ease 0s;

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
    transition: all 0.3s ease 0s;
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
    <>
      <NavBar>
        <TitleBar>
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
              <Anchor href="https://lal-poly.s3.amazonaws.com/Crucifixtion+of++darling.pdf" target="_blank" rel="Crucifixtion of darling">Crucifixion of Dingu</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/The+Visitor+to+Alanchy.pdf" target="_blank" rel="The Visitor to Alanchy">The Visitor to Alanchy</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/Ghost+of+Vijayalakshmi.pdf" target="_blank" rel="Ghost of Vijayalakshmi">Ghost of Vijayalakshmi</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/Love+of+two+farmers.docx" target="_blank" rel="Love of two farmers">Love of two farmers</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/Judas.docx" target="_blank" rel="Judas">Judas</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/Why+Jesus+was+born.docx" target="_blank" rel="Why Jesus was born?">Why Jesus was born?</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/The+Funeral.docx" target="_blank" rel="The Funeral">The Funeral</Anchor>
            </DropDownContent>
          </DropDown>

          <DropDown>
            <DropDownButton>
              Fiction
              <DownIcon src={Icon} />
            </DropDownButton>
            <DropDownContent>
              <DropDownLink to="/fiction">Novels</DropDownLink>
            </DropDownContent>
          </DropDown>

          <DropDown>
            <DropDownButton>
              Non-fiction
              <DownIcon src={Icon} />
            </DropDownButton>
            <DropDownContent>
              <DropDownLink to="/biographies">Biographies</DropDownLink>
              <DropDownLink>Studies on issues</DropDownLink>
            </DropDownContent>
          </DropDown>

          <DropDown>
            <DropDownButton>
              Article
              <DownIcon src={Icon} />
            </DropDownButton>
            <DropDownContentArticle>
              <Anchor href="https://lal-poly.s3.amazonaws.com/EI+document.pdf" target="_blank" rel="EIDocument">Emotional Intelligence</Anchor>
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
      <Route path="/biographies" component={Biographies} />
      <Route path="/book-reviews" component={BookReviews} />
      <Route path="/writers-corner" component={WriterCorner} />
    </>
  );
};

export default Appbar;
