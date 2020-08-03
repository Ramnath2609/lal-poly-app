import React from "react";
import { createGlobalStyle } from "styled-components";
import Appbar from "./components/Appbar";
import SideBar from "./components/SideBar";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
  
  
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0px;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Appbar />
      <SideBar />
    </div>
  );
}

export default App;
