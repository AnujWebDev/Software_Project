import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa6";
import { ImHtmlFive } from "react-icons/im";
import { FaAndroid } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { TfiLinkedin } from "react-icons/tfi";
import { SiTypescript } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiApachecordova } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { IoDiamond } from "react-icons/io5";
const Technologies = () => {
  return (
    <div className=" overflow-hidden">
      <div className=" container overflow-hidden ml-5 lg:mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {" "}
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <FaReact className="text-[#61DBFB] text-6xl hover:rotate-90 transition ease-in-out duration-[0.3s] hover:text-gray-500" />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <ImHtmlFive className="text-[#e34c26] text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-gray-500" />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <FaAndroid className="text-green-500 text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-gray-500" />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <FaAngular className="text-[#c3002f] text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-gray-500" />
        </div>
        <div className="group rounded-full p-2 border w-28 h-28 flex justify-center items-center mx-5 bg-black">
          <svg
            className='w-16 h-16  hover:rotate-45 transition ease-in-out duration-[0.3s] hover:bg-gray-500"'
            viewBox="-50 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <style>
              {`
            .st0{fill:#0acf83}
            .st1{fill:#a259ff}
            .st2{fill:#f24e1e}
            .st3{fill:#ff7262}
            .st4{fill:#1abcfe}
          `}
            </style>
            <path
              className="st0"
              d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
            />
            <path
              className="st1"
              d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
            />
            <path
              className="st2"
              d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
            />
            <path
              className="st3"
              d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
            />
            <path
              className="st4"
              d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
            />
          </svg>
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <IoLogoJavascript className=" bg-yellow-400 text-black  text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-white " />
        </div>
      </div>

      <div className="container  ml-0 lg:ml-10  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="rounded-full p-2 border w-28 h-28 flex justify-center mx-auto mt-5 align-center bg-black">
          <TfiLinkedin className="bg-red-500 text-white rounded-2xl p-2 mt-5 text-6xl hover:rotate-45 transition ease-in-out duration-300 hover:bg-gray-500" />
        </div>
        <div className="rounded-full p-2 border w-28 h-28 flex justify-center mx-auto mt-5 align-center bg-black">
          <SiTypescript className="bg-blue-500 text-white rounded-2xl p-2 mt-5 text-6xl hover:rotate-45 transition ease-in-out duration-300 hover:bg-gray-500" />
        </div>
        <div className="rounded-full p-2 border w-28 h-28 flex justify-center mx-auto mt-5 align-center bg-black">
          <FaPhp className="bg-blue-400 text-black  p-2 mt-5 rounded-full text-6xl hover:rotate-45 transition ease-in-out duration-300 hover:bg-gray-500 hover:text-white" />
        </div>
        <div className="rounded-full p-2 border w-28 h-28 flex justify-center mx-auto mt-5 align-center bg-black">
          <FaJava className="bg-blue-400 text-black rounded-2xl p-2 mt-5 text-6xl hover:rotate-45 transition ease-in-out duration-300 hover:bg-gray-500 hover:text-white" />
        </div>
      </div>
      <div className="  flex justify-center">
          <p
            style={{
              fontFamily: "PT Sans, sans-serif",
              fontSize: "3rem",
              fontWeight: "bolder",
              lineHeight: "3rem",
              textAlign:'center'
            }}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="text-black mr:0 lg:mr-28 text font-bold"
          >
            Technologies
            <br /> we use
          </p>
        </div>

      <div className="container ml-4 lg:ml-36 md:ml-28  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5" >
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <SiApachecordova className="text-white text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-gray-500" />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <SiNextui className="bg-blue-400 rounded-3xl text-white text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-gray-500" />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <SiCplusplus className="bg-blue-500 rounded-3xl text-white text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-gray-500" />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <FaAws className="bg-gray-500 text-yellow-500 rounded-full p-3 text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-white" />
        </div>
        </div>
        <div className=" container ml-4 lg:mx-auto overflow-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <SiRubyonrails className="bg-[#c3002f] rounded-3xl text-white text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-white hover:bg-gray-500" />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <TbBrandAzure className=" bg-blue-500 text-white rounded-3xl text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-white  hover:bg-gray-500" />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <SiDotnet className=" bg-purple-500 rounded-full  text-white text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:bg-gray-500 hover:text-white " />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <SiTypescript className=" bg-blue-500 rounded-3xl  text-white text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:bg-gray-500 " />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <IoDiamond className=" text-yellow-500  text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s]  hover:text-gray-500" />
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
          <FaJava className=" bg-blue-400 rounded-3xl  text-black  text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:bg-gray-500  hover:text-white" />
        </div>
        </div>
    </div>
  );
};

export default Technologies;
