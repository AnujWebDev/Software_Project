import React from "react";
import { TypeAnimation } from "react-type-animation";
import { TiArrowForward } from "react-icons/ti";
import "react-multi-carousel/lib/styles.css";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <>
      <div className="hero1 overflow-hidden min-h-screen container mx-auto pt-20">
        <div className="p-0 ml-10 flex flex-col md:flex-row">
          <div className="hero-content w-full lg:w-3/4 pt-20 md:pt-0 text-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <p className=" text-left italic text-2xl">
                Enhancing the potential of next-generation technology by offering
                solutions that align with your business objectives.
              </p>
              <h1 className="text-4xl md:text-6xl text-left">
                We are passionate about
                <br />
                <span className="mt-20 font-extrabold text-4xl">
                  <TypeAnimation
                    sequence={[
                      "Fostering creativity.",
                      1000,
                      "Creating solutions for your business",
                      1000,
                    ]}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              <div className="flex mt-10 md:justify-start">
                <button className="flex border hover:scale-105 hover:bg-primary px-6 md:px-10 hover:text-white transition ease-in-out duration-[#0.3s] rounded-full p-2 justify-center">
                  Lets Discuss <TiArrowForward className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 md:mt-0 hidden lg:flex justify-center">
            <img src={logo} alt="logo" className="w-full md:w-3/4" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="container mt-20 mx-auto"
        >
          <p className="text-4xl text-center font-bold">
            Design, build and maintain products
          </p>

          <p className="text-xl text-center mt-10">
            We assist clients who are just getting started. We are committed to
            creating work that moves people emotionally, stimulates the
            intellect, and generates revenue. Through recommendations,
            word-of-mouth, and years of collaborative work with our clients, we
            have naturally grown our business.
          </p>
          <p className="text-xl text-center mt-5">
            Everything we produce is intended to provide your company a unique
            advantage in your industry, from creative executions and digital
            experiences to brand and marketing strategies.
          </p>
          <p className="text-xl text-center py-10">
            Considering that the most unfair commercial advantage is inventiveness.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
