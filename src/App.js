import React from "react";
import Appbar from "./components/Appbar";
import SideBar from "./components/SideBar";
import { BrowserRouter } from "react-router-dom";
import { GridLayout, AppLayout } from "./AppStyles";

function App() {
  return (
    <AppLayout className="App">
      <BrowserRouter>
      <GridLayout>
        <Appbar className="header" />
        <SideBar className="sidenav" />
      </GridLayout>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
