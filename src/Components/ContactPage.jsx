import React, { useEffect } from "react";
import DefaultNavbar from "./DefaultNavbar";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";

const ContactPage = () => {
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
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default ContactPage;
