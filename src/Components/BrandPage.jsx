import React, { useEffect } from "react";
import DefaultNavbar from "./DefaultNavbar";
import Far from "../pages/Far";
import Brand from "../pages/Brand";
import BrandService from "../pages/BrandServices";
import Footer from "../pages/Footer";

const AppDevPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div id="outer-container">
      <div id="page-wrap">
        <DefaultNavbar />
        <Brand />
        <BrandService/>
        <Far />
        <Footer/>
      </div>
    </div>
  );
};

export default AppDevPage;
