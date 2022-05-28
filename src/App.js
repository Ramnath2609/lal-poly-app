import React from "react";
import ReactGA from 'react-ga';
import Appbar from "./components/Appbar";
import SideBar from "./components/SideBar";
import { BrowserRouter } from "react-router-dom";
import { GridLayout, AppLayout } from "./AppStyles";


const TRACKING_ID = "G-2RTBBYYLL9"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

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
