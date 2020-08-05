import React from "react";
import styled from "styled-components";
import { Link, BrowserRouter } from "react-router-dom";

const SideNavbar = styled.div`
  width: 170px;
  min-width: 110px;
  height: 100vh;
  position: fixed;
  box-shadow: -1px 0px 4px;
  top: 95px;
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
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px;
`;

const SideBar = () => {
  return (
    <BrowserRouter>
      <SideNavbar>
        <SideNavList>
          <LinkHolder>
            <StyledLink>Events</StyledLink>
          </LinkHolder>
          <LinkHolder>
            <StyledLink>Politics</StyledLink>
          </LinkHolder>
          <LinkHolder>
            <StyledLink>Economics</StyledLink>
          </LinkHolder>
          <LinkHolder>
            <StyledLink>Social</StyledLink>
          </LinkHolder>
        </SideNavList>
      </SideNavbar>
    </BrowserRouter>
  );
};

export default SideBar;
