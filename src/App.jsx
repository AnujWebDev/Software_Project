import React from "react";
import Home from "./pages/Home";
import DefaultNavbar from "./Components/DefaultNavbar";
import DefaultMenu from "./Components/DefaultMenu";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Far from "./pages/Far";

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
          <Far/>
        </div>
      </div>
    </>
  );
}

export default App;
