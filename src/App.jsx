import React from "react";
import Home from "./pages/Home";
import DefaultNavbar from "./Components/DefaultNavbar";
import DefaultMenu from "./Components/DefaultMenu";

function App() {
  return (
    <>
       <DefaultNavbar/>
       <DefaultMenu/>
      <div id="outer-container">
        <div id="page-wrap">
          <Home/>
        </div>
      </div>
    </>
  );
}

export default App;
