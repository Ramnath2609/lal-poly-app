import React from "react";
import { Route } from "react-router-dom";
import KodikkalPage from "../KodikkalPage";
import EvolutionOfGod from "../evolution-god/EvolutionOfGod";
import FirstEvolution from "../evolution-god/FirstEvolution";
import SecondEvolution from "../evolution-god/SecondEvolution";
import { FallOfAdam } from "../evolution-god/FallOfAdam";
import { Soliloquay } from "../evolution-god/Soliloquay";
import { KingdomOfGod } from "../evolution-god/KingdomOfGod";
import { IAndThou } from "../evolution-god/IAndThou";
import { Globalization } from "../evolution-god/Globalization";
import { SideNavbar, DropDown, SideNavList, LinkHolder, StyledLink, DropDownContent, Anchor, DropDownLink } from "./styles";

export const SideBar = () => {
  return (
    <>
      <SideNavbar>
        <SideNavList>

          <DropDown>
            <LinkHolder>
              <StyledLink>Events</StyledLink>
            </LinkHolder>
            <DropDownContent>
              <Anchor href="#" rel="Politics">Politics</Anchor>
              <Anchor href="#" rel="History">History</Anchor>
              <Anchor href="#" rel="Economics">Economics</Anchor>
              <Anchor href="#" rel="Science">Science</Anchor>
            </DropDownContent>
          </DropDown>

          <DropDown>
            <LinkHolder>
              <StyledLink>Personalities</StyledLink>
            </LinkHolder>
            <DropDownContent>
              <Anchor href="#" rel="History">History</Anchor>
              <Anchor href="#" rel="Religion">Religion</Anchor>
              <Anchor href="#" rel="Economics">Economics</Anchor>
              <Anchor href="#" rel="Literature">Literature</Anchor>
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
              <DropDownLink to="/fall-of-adam">Fall of Adam</DropDownLink>
              <DropDownLink to="/soliloquay">Soliloquay</DropDownLink>
              <DropDownLink to="/kingdom-of-god">Kingdom of God</DropDownLink>
              <DropDownLink to="/i-and-thou">I and Thou</DropDownLink>
              <DropDownLink to="/globalilzation">Globalilzation</DropDownLink>
            </DropDownContent>
          </DropDown>

        </SideNavList>

      </SideNavbar>

      <Route path="/kodikkal-page" component={KodikkalPage} />
      <Route path="/evolution-of-god" component={EvolutionOfGod} />
      <Route path="/first-evolution-of-god" component={FirstEvolution} />
      <Route path="/second-evolution-of-god" component={SecondEvolution} />
      <Route path="/fall-of-adam" component={FallOfAdam} />
      <Route path="/soliloquay" component={Soliloquay} />
      <Route path="/kingdom-of-god" component={KingdomOfGod} />
      <Route path="/i-and-thou" component={IAndThou} />
      <Route path="/globalilzation" component={Globalization} />
    </>
  );
};
