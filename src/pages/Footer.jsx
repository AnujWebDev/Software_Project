import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaHome,
  FaPhoneSquareAlt,
  FaEnvelopeOpenText,
  FaLinkedin,
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black foot text-white">
      <div className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <div className="flex flex-col lg:flex-row lg:gap-5">
              <Link to={'/about'} className="mb-2 hover:text-primary lg:mb-0">About Us</Link>
              <Link to={'/contact'} className="mb-2 hover:text-primary lg:mb-0">Contact Us</Link>
              <Link to={''} className="mb-2 hover:text-primary lg:mb-0">Join Us</Link>
              <Link to={'/portofolio'} className="mb-2 hover:text-primary lg:mb-0">Portfolio</Link>
              <Link to={''} className="mb-2 hover:text-primary lg:mb-0">Privacy Policy</Link>
              <Link to={''} className="mb-2 hover:text-primary lg:mb-0">Terms</Link>
            </div>
            <p className="mt-4">
              We look at the bigger picture! Having an idea can sometimes be the
              easiest<br/> part of a project. The question is, how can you
              effectively turn your idea<br/> into measurable marketing success?
            </p>
          </div>
          <div className="mb-8 lg:mb-0">
            <img src={logo} alt="logo" className="w-24 lg:w-32" />
          </div>
          <div className="">
            <p className="mb-2 flex text-xl hover:text-red-500 lg:mb-0">
              <FaHome className="text-2xl my-2 mr-2" />
              1/965(A) Vishal Khand 1, Gomti Nagar, Lucknow - 226010
            </p>
            <p className="mb-2 text-2xl my-2 hover:text-red-500 flex  lg:mb-0">
              <FaPhoneSquareAlt className="text-2xl mt-2 mr-2" />
              +91 123 456 7890
            </p>
            <p className="mb-2 my-5 text-2xl flex hover:text-red-500 lg:mb-0">
              <FaEnvelopeOpenText className="text-2xl  mr-2" />
              example@email.com
            </p>
            <div className="flex gap-4 mt-5">
              <Link>
                <FaLinkedin className="text-3xl hover:text-red-500 hover:rotate-45 transition duration-300" />
              </Link>
              <Link>
                <FaFacebook className="text-3xl hover:text-white hover:rotate-45 hover:bg-[#0d6efd] transition duration-300" />
              </Link>
              <Link>
                <FaTwitterSquare className="text-3xl hover:text-white hover:rotate-45 hover:bg-[#0d6efd] transition duration-300" />
              </Link>
              <Link>
                <FaInstagramSquare className="text-3xl hover:text-red-500 hover:rotate-45 transition duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
