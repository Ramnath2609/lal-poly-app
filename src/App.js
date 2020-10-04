import React from "react";
import Appbar from "./components/Appbar";
import SideBar from "./components/SideBar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
        <SideBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
