import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa6";
import { ImHtmlFive } from "react-icons/im";
import { FaAndroid } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
const Technologies = () => {
    

  return (
    <div>
      <Marquee>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
            <FaReact className="text-[#61DBFB] text-6xl hover:rotate-90 transition ease-in-out duration-[0.3s] hover:text-gray-500"/>
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
            <ImHtmlFive className="text-[#e34c26] text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-gray-500"/>
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
            <FaAndroid className="text-green-500 text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-gray-500"/>
        </div>
        <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
            <FaAngular className="text-[#c3002f] text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-gray-500"/>
        </div>
        <div
      className='group rounded-full p-2 border w-28 h-28 flex justify-center items-center mx-5 bg-black'
    >
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
        <path className="st0" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" />
        <path className="st1" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" />
        <path className="st2" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" />
        <path className="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" />
        <path className="st4" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" />
      </svg>
    </div>
    <div className=" rounded-full p-2 border w-28 h-28 flex justify-center mx-5 align-center pt-6 bg-black">
            <IoLogoJavascript className=" bg-yellow-400 text-black  text-6xl hover:rotate-45 transition ease-in-out duration-[0.3s] hover:text-white "/>
        </div>
      </Marquee>
    </div>
  );
};

export default Technologies;
