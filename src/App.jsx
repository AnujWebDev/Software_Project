import React from "react";
import DefaultMenu from "./Components/DefaultMenu";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AboutPage from "./Components/AboutPage";
import AppDevPage from "./Components/AppDevPage";
import WebDevPage from "./Components/WebDevPage";
import BrandPage from "./Components/BrandPage"
import ConsultrationPage from "./Components/ConsultrationPage";
import DigitalPage from "./Components/DigitalPage";
import DevopsPage from "./Components/DevopsPage";
import RetainersPage from "./Components/RetainersPage";
import MainTenancePage from "./Components/MainTenancePage";
import Portfolio from "./Components/Portfolio";
import PortfolioPage from "./Components/PortfolioPage";
import Contact from "./pages/Contact";
import ContactPage from "./Components/ContactPage";

function App() {
  return (
    <>
    <Router>
       <DefaultMenu/>
       <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/appdev" element={<AppDevPage/>}></Route>
        <Route path="/webdev" element={<WebDevPage/>}></Route>
        <Route path="/brand" element={<BrandPage/>}></Route>
        <Route path="/consultation" element={<ConsultrationPage/>}></Route>
        <Route path="/digital" element={<DigitalPage/>}></Route>
        <Route path="/devops" element={<DevopsPage/>}></Route>
        <Route path="/retainers" element={<RetainersPage/>}></Route>
        <Route path="/maintenance" element={<MainTenancePage/>}></Route>
        <Route path="/portofolio" element={<PortfolioPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
