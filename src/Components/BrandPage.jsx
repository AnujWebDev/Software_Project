import React, { useEffect } from "react";
import DefaultNavbar from "./DefaultNavbar";
import Far from "../pages/Far";
import Brand from "../pages/Brand";
import BrandService from "../pages/BrandServices";

const AppDevPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div id="outer-container">
      <div id="page-wrap" className=" border">
        <DefaultNavbar />
        <Brand />
        <BrandService/>
        <Far />
      </div>
    </div>
  );
};

export default AppDevPage;
