import React from "react";
import Appbar from "./components/Appbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Appbar />
      <SideBar />
    </div>
  );
}

// const GlobalStyles = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

//   body {
//     font-family: 'Roboto', sans-serif;
//     margin: 0px;
//   }
// `;

export default App;
