import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import KodikkalPage from "../components/KodikkalPage";
import EvolutionOfGod from "../components/evolution-god/EvolutionOfGod";
import FirstEvolution from "../components/evolution-god/FirstEvolution";
import SecondEvolution from "../components/evolution-god/SecondEvolution";
import ThirdEvolution from "../components/evolution-god/ThirdEvolution";
import FourthEvolution from "../components/evolution-god/FourthEvolution";
import FifthEvolution from "../components/evolution-god/FifthEvolution";
import SixthEvolution from "../components/evolution-god/SixthEvolution";
import SeventhEvolution from "../components/evolution-god/SeventhEvolution";

const SideNavbar = styled.div`
  width: 170px;
  min-width: 110px;
  height: 100vh;
  position: fixed;
  box-shadow: -1px 0px 4px;
  top: 138px;
  left: 0;
  z-index: 0;
  background-color: #f1f1f1;
`;

const SideNavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkHolder = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 0.3s ease;

  &:hover {
    background-color: #ddd;

    .lal-StyledLink {
      color: #0077D9;
    }
  }
`;

const StyledLink = styled(Link).attrs({
  className: String('lal-StyledLink')
})`
  text-decoration: none;
  color: black;
  padding: 10px;
  font-family: RobotoBold;
  font-size: 18px;
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

const DropDownContent = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: 0.3s ease;
  margin-left: 171px;
  top: 0px;
`;

const DropDown = styled.div`
  position: relative;
  display: inline;
  width: 100%;

  &:hover ${DropDownContent} {
    visibility: visible;
    opacity: 1;
  }

  &:hover ${DropDownButton} {
    transform: translateY(-5px);
  }
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

const SideBar = () => {
  return (
    <>
      <SideNavbar>
        <SideNavList>

          <DropDown>
            <LinkHolder>
              <StyledLink>Events</StyledLink>
            </LinkHolder>
            <DropDownContent>
              <Anchor href="#" target="_blank" rel="Politics">Politics</Anchor>
              <Anchor href="#" target="_blank" rel="History">History</Anchor>
              <Anchor href="#" target="_blank" rel="Economics">Economics</Anchor>
              <Anchor href="#" target="_blank" rel="Science">Science</Anchor>
            </DropDownContent>
          </DropDown>

          <DropDown>
            <LinkHolder>
              <StyledLink>Personalities</StyledLink>
            </LinkHolder>
            <DropDownContent>
              <Anchor href="#" target="_blank" rel="History">History</Anchor>
              <Anchor href="#" target="_blank" rel="Religion">Religion</Anchor>
              <Anchor href="#" target="_blank" rel="Economics">Economics</Anchor>
              <Anchor href="#" target="_blank" rel="Literature">Literature</Anchor>
            </DropDownContent>
          </DropDown>

          <LinkHolder>
            <StyledLink to="/kodikkal-page">Kodikkal Pages</StyledLink>
          </LinkHolder>

          <DropDown>
            <LinkHolder>
              <StyledLink>Dialogues</StyledLink>
            </LinkHolder>
            <DropDownContent>
              <DropDownLink to="/evolution-of-god">Evolution of God</DropDownLink>
              <DropDownLink to="/first-evolution-of-god">First Evolution of God</DropDownLink>
              <DropDownLink to="/second-evolution-of-god">Second Evolution of God</DropDownLink>
              <DropDownLink to="/third-evolution-of-god">Third Evolution of God</DropDownLink>
              <DropDownLink to="/fourth-evolution-of-god">Fourth Evolution of God</DropDownLink>
              <DropDownLink to="/fifth-evolution-of-god">Fifth Evolution of God</DropDownLink>
              <DropDownLink to="/sixth-evolution-of-god">Sixth Evolution of God</DropDownLink>
              <DropDownLink to="/seventh-evolution-of-god">Seventh Evolution of God</DropDownLink>
            </DropDownContent>
          </DropDown>

        </SideNavList>

      </SideNavbar>

      <Route path="/kodikkal-page" component={KodikkalPage} />
      <Route path="/evolution-of-god" component={EvolutionOfGod} />
      <Route path="/first-evolution-of-god" component={FirstEvolution} />
      <Route path="/second-evolution-of-god" component={SecondEvolution} />
      <Route path="/third-evolution-of-god" component={ThirdEvolution} />
      <Route path="/fourth-evolution-of-god" component={FourthEvolution} />
      <Route path="/fifth-evolution-of-god" component={FifthEvolution} />
      <Route path="/sixth-evolution-of-god" component={SixthEvolution} />
      <Route path="/seventh-evolution-of-god" component={SeventhEvolution} />
    </>
  );
};

export default SideBar;