import React from "react";
import { TypeAnimation } from "react-type-animation";
import logo from "../assets/logo.png";
import { TiArrowForward } from "react-icons/ti";

const Home = () => {
  return (
    <>
      <div className="hero1 container mx-auto pt-20">
        <div className=" pt-20 flex flex-col md:flex-row">
          <div className="hero-content w-full md:w-1/2 pt-20 md:pt-40 text-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <h1 className="text-2xl font-bold">
                We are passionate about
                <br />
                <span style={{ fontFamily: "PT Sans, sans-serif",letterSpacing:'3px' }} className="mt-20 text-5xl">
                  <TypeAnimation
                    sequence={[
                      "conversion rate optimization.",
                      1000,
                      "digital marketing.",
                      1000,
                      "establishing brand presence.",
                      1000,
                      "custom software development.",
                      1000,
                      "thought leadership.",
                      1000,
                      "fostering creativity.",
                      1000,
                    ]}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p style={{ fontFamily: "PT Sans, sans-serif",letterSpacing:'3px' }} className="py-6 italic text-xl">
                Creating new dimensions in next-gen technologies by providing
                solutions that match your Business Goals.
              </p>
              <div className="flex justify-center">
                <button style={{ fontFamily: "PT Sans, sans-serif",letterSpacing:'1px' }} className="flex border hover:scale-105 hover:bg-primary hover:text-white transition ease-in-out duration-[#0.3s] rounded-full p-2 justify-center">
                  Lets Discuss <TiArrowForward className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-20 md:mt-0 hidden md:flex justify-center">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className=" container mx-auto"
        >
          <p
            style={{ fontFamily: "PT Sans, sans-serif" }}
            className="text-4xl text-center font-bold"
          >
            Design, build and maintain products
          </p>

          <p style={{ fontFamily: "PT Sans, sans-serif" }} className="text-xl text-center mt-10">
            We work with clients starting out and starting over. We believe in
            producing creative that captures hearts, inspires minds and delivers
            business results. We’ve built our business organically – through
            recommendations, word of mouth and working in partnership with our
            clients over the years.
          </p>
          <p style={{ fontFamily: "PT Sans, sans-serif" }} className="text-xl text-center mt-5">
            Everything we create – from brand and marketing strategy to creative
            executions and digital experiences –<br /> is designed to give your
            brand a distinctive edge in your market.
          </p>
          <p style={{ fontFamily: "PT Sans, sans-serif" }} className="text-xl text-center py-10">
            Because creativity is the most unfair commercial advantage.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
