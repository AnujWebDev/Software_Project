import React from "react";
import Home from "./pages/Home";
import DefaultNavbar from "./Components/DefaultNavbar";
import DefaultMenu from "./Components/DefaultMenu";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";

function App() {
  return (
    <>
       <DefaultNavbar/>
       <DefaultMenu/>
      <div id="outer-container">
        <div id="page-wrap">
          <Home/>
          <Services/>
          <Technologies/>
        </div>
      </div>
    </>
  );
}

export default App;
