import React from "react";
import DefaultMenu from "./Components/DefaultMenu";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <>
    <Router>
       <DefaultMenu/>
       <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
