import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideNavbar = styled.div.attrs({
    className: 'sidenav',
    })`
    height: 100%;
    grid-area: sidenav;
    box-shadow: -1px 0px 4px;
    background-color: #f1f1f1;
  `;
  
  export const SideNavList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  export const LinkHolder = styled.div`
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
  
  export const StyledLink = styled(Link).attrs({
    className: String('lal-StyledLink')
  })`
    text-decoration: none;
    color: black;
    padding: 10px;
    font-family: RobotoBold;
    font-size: 18px;
  `;
  
  export const DropDownButton = styled.button`
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
  
  export const DropDownContent = styled.div`
    visibility: hidden;
    opacity: 0;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 140px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: 0.3s ease;
    margin-left: 200px;
    top: 0px;
  `;
  
  export const DropDown = styled.div`
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
  
  export const Anchor = styled.a`
    text-decoration: none;
    display: block;
    color: black;
    padding: 10px;
    min-width: 180px;
  
    &:hover {
      color: #0077D9;
    }
  `;
  
  export const DropDownLink = styled(Link)`
    text-decoration: none;
    display: block;
    color: black;
    padding: 10px;
    min-width: 180px;
  
    &:hover {
      color: #0077D9;
    }
  `;
  