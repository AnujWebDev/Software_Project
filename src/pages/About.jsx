import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import ab from "../assets/ab.png";
import ab2 from "../assets/ab2.png";
import ab3 from "../assets/ab3.png";
import ab4 from "../assets/ab4.png";
import ab5 from "../assets/ab5.png";
import ab6 from "../assets/ab6.png";
import Far from "./Far";

const About = () => {
  return (
    <div className=" overflow-hidden">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        className=" container p-5 mx-auto pt-20"
      >
        <p
          style={{
            fontFamily: "PT Sans, sans-serif",
            letterSpacing: "3px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
          className="py-6  flex italic text-xl"
        >
          About <BsArrow90DegRight className="ml-2 rotate-90 mt-2" />
        </p>
        <h1
          style={{
            fontSize: "45px",
            fontWeight: "bold",
            lineHeight: "60px",
          }}
          className="text-2xl font-bold"
        >
          We Help You Achieve Your
          <br /> Digital Business Goals
        </h1>
        <div className=" container mt-20 w-full lg:w-[1200px] mx-auto">
          <p
            style={{
              fontFamily: "PT Sans, sans-serif",
            }}
            className="py-6 text-2xl"
          >
            Elevate your brand's credibility and recognition with our expert
            team. Connect with industry-leading professionals in SEO, app
            design, web development, social media marketing, and more. When it
            comes to delivering value and achieving results, We are unmatched.
            We eliminate the negatives and emphasize the positives.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-4xl text-center font-extrabold">OUR CORE VALUES</h1>
      </div>
      <div className="lg:w-full mx-auto hover:bg-gradient-to-r from-teal-800 to-orange-600 hover:text-white">
        <div className="flex flex-col lg:flex-row container p-10 my-10">
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img src={ab} className="rotate-infinite" alt="ab"></img>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              style={{
                fontFamily: "PT Sans, sans-serif",
              }}
              className="p-6 mt-12 text-2xl"
            >
              Our core values revolve around creating innovative and bespoke
              strategies for our clients that drive tangible results. By
              leveraging our unique talents and creativity, we enable our
              clients to reach new levels of success and unlock opportunities
              for business growth.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-full mx-auto hover:bg-gradient-to-r from-teal-800 to-orange-500 hover:text-white">
        <div className="flex  lg:flex-row flex-col-reverse container p-10 my-10">
          <div className="w-full lg:w-1/2">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              style={{
                fontFamily: "PT Sans, sans-serif",
              }}
              className="p-6 mt-12 text-2xl"
            >
              We consistently uphold the highest standards of originality in
              everything we do. Continually pushing ourselves to improve and
              strive for the next big thing drives our progress.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img src={ab2} className="rotate-infinite" alt="ab"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-full mx-auto hover:bg-gradient-to-r from-teal-800 to-orange-600 hover:text-white">
        <div className="flex flex-col lg:flex-row container p-10 my-10">
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img src={ab3} className="rotate-infinite" alt="ab"></img>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              style={{
                fontFamily: "PT Sans, sans-serif",
              }}
              className="p-6 mt-12 text-2xl"
            >
              We strike a careful balance between planning and execution. Our
              team combines meticulous preparation with creative flair, ensuring
              that we not only maintain equilibrium but also act in the best
              interest of our clients and their businesses.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-full mx-auto hover:bg-gradient-to-r from-teal-800 to-orange-500 hover:text-white">
        <div className="flex  lg:flex-row flex-col-reverse container p-10 my-10">
          <div className="w-full lg:w-1/2">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              style={{
                fontFamily: "PT Sans, sans-serif",
              }}
              className="p-6 mt-12 text-2xl"
            >
              We have a proactive approach to embracing new technologies and
              methodologies. By constantly seeking fresh possibilities, we have
              helped our clients surpass their competition and achieve results
              that exceed their initial goals.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img src={ab4} className="rotate-infinite" alt="ab"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-full mx-auto hover:bg-gradient-to-r from-teal-800 to-orange-600 hover:text-white">
        <div className="flex flex-col lg:flex-row container p-10 my-10">
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img src={ab5} className="rotate-infinite" alt="ab"></img>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              style={{
                fontFamily: "PT Sans, sans-serif",
              }}
              className="p-6 mt-12 text-2xl"
            >
              “Innovation is the relentless drive to challenge the status quo
              and pioneer new paths where few have ventured before." We create
              solutions that empower business growth.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-full mx-auto hover:bg-gradient-to-r from-teal-800 to-orange-500 hover:text-white">
        <div className="flex lg:flex-row flex-col-reverse container p-10 my-10">
          <div className="w-full lg:w-1/2">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              style={{
                fontFamily: "PT Sans, sans-serif",
              }}
              className="p-6 mt-12 text-2xl"
            >
              We understand that challenges are inevitable for everyone,
              including businesses. However, we embrace a growth mindset and a
              commitment to turning difficulties into opportunities for
              advancement. In every situation, we choose a constructive
              response.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img src={ab6} className="rotate-infinite" alt="ab"></img>
            </div>
          </div>
        </div>
      </div>
      <Far />
    </div>
  );
};

export default About;
