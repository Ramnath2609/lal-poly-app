import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div.attrs({
    className: 'header',
    })`
    display: flex;
    width: 100%;
    grid-area: header;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #182c61;
  `;
  
  export const DownIcon = styled.img`
    width: 8px;
    padding-left: 2px;
  `;
  
  export const Title = styled.div`
    width: 35%;
    /* height: 50px; */
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  export const TitleBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    margin-left: 20px;
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
  
  export const StyledLink = styled(Link)`
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
  
  export const DropDownContent = styled.div`
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
  
  export const DropDownContentArticle = styled(DropDownContent).attrs({
    className: String('lal-book-dropDownContentArticle')
  })`
    min-width: 180px;
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
  
  export const DropDown = styled.div`
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
  
  export const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  `;