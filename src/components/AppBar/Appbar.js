import React from "react";
import { Route } from "react-router-dom";
import Icon from "../../icons/down-arrow.png";
import ContactUs from "../ContactUs";
import LogoTitle from "../../icons/Title Logo.png";
import Home from "../Home";
import Fiction from "../Fiction";
import BookReviews from "../BookReviews";
import { Biographies } from "../Biographies";
import WriterCorner from "../WriterCorner";
import { NavBar, TitleBar, NavLinks, DropDown, Title, DropDownButton, StyledLink, DropDownContent, Anchor, DownIcon, DropDownLink, DropDownContentArticle } from "./styles";


export const Appbar = () => {
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

          {/* <DropDown>
            <DropDownButton>
              Short Stories
              <DownIcon src={Icon} />
            </DropDownButton>
            <DropDownContent>
              <Anchor href="https://lal-poly.s3.amazonaws.com/Crucifixtion+of++darling.pdf" target="_blank" rel="Crucifixtion of darling">Crucifixion of Dingu</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/The+Visitor+to+Alanchy.pdf" target="_blank" rel="The Visitor to Alanchy">The Visitor to Alanchy</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/Ghost+of+Vijayalakshmi.pdf" target="_blank" rel="Ghost of Vijayalakshmi">Ghost of Vijayalakshmi</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/Love+of+two+farmers.pdf" target="_blank" rel="Love of two farmers">Love of two farmers</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/Judas.pdf" target="_blank" rel="Judas">Judas</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/Why+Jesus+was+born.docx" target="_blank" rel="Why Jesus was born?">Why Jesus was born?</Anchor>
              <Anchor href="https://lal-poly.s3.amazonaws.com/The+Funeral.pdf" target="_blank" rel="The Funeral">The Funeral</Anchor>
            </DropDownContent>
          </DropDown> */}

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
