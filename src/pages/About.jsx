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
          We Assist You In Achieving
          <br />
          Your Digital Business Objectives
        </h1>
        <div className=" container mt-20 w-full lg:w-[1200px] mx-auto">
          <p
            style={{
              fontFamily: "PT Sans, sans-serif",
            }}
            className="py-6 text-2xl"
          >
            Your brand's credibility and recognition can soar with the right
            team. Get in touch with leading experts in SEO, app design, web
            development, social media marketing, and other fields. When it comes
            to value and results, Cypher Squad always excels. Take out the bad
            and emphasize the good.
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
              To create creative and original strategies for our clients that
              produce results, we draw on our special talents and creativity. As
              a result, our clients reach new levels of achievement and success,
              opening up opportunities for them to enhance their enterprises.
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
              In everything we do, we try to uphold the highest standards of
              originality. We always push ourselves to do better and make
              progress as we strive to move forward to the next big thing.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine">
            <img src={ab2} className="rotate-infinite" alt="ab"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-full mx-auto hover:bg-gradient-to-r from-teal-800 to-orange-600 hover:text-white">
        <div className="flex flex-col lg:flex-row container p-10 my-10">
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine">
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
              We carefully strike a balance between preparation and execution.
              Planning and creativity are all balanced by our team's
              perseverance. We not only maintain balance but also act correctly
              and effectively for the benefit of our clients and business.
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
              We take a proactive stance when it comes to new technologies and
              methods. Looking for every window of fresh possibility, we've
              helped clients surpass the competition and create outcomes that
              exceeded their initial goals.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine" >
            <img src={ab4} className="rotate-infinite" alt="ab"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-full mx-auto hover:bg-gradient-to-r from-teal-800 to-orange-600 hover:text-white">
        <div className="flex flex-col lg:flex-row container p-10 my-10">
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine">
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
              “Innovation is the unrelenting drive to break the status quo and
              develop anew where few have dared to go.“ We create solutions to
              empower business growth.
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
              We are aware that nobody, not even businesses, escapes difficulty
              in life. But because we're dedicated to having a growth and
              commitment mentality, we see these difficulties as an opportunity
              to advance. We select a constructive answer in every circumstance.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex bg-white justify-center items-center">
            <div data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine" >
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
