import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import cont from "../assets/img1.png";
import cont1 from "../assets/img2.png";
import { TbLocationShare } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { SlCallOut } from "react-icons/sl";
const Contact = () => {
  return (
    <div className="overflow-hidden">
      <div className="container mt-20 p-5 mx-auto sm:pt-20">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mb-10 sm:mb-0">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              style={{
                fontFamily: "PT Sans, sans-serif",
                letterSpacing: "3px",
                fontSize: "30px",
                fontWeight: "bold",
              }}
              className="py-14 lg:py-0 ml-0 mt-10 lg:ml-20 lg:mt-20 font-bodyFont flex italic text-xl"
            >
              Contact <BsArrow90DegRight className="ml-2 rotate-90 mt-2" />
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="py-0 ml-0 font-bodyFont lg:ml-20 text-2xl"
            >
              Let’s work together to create game-changing experiences that will
              take your brand from bland to brilliant.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-2 mt-10 lg:mt-0 flex justify-center">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={cont}
                id="img1"
                style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                className="rotate-infinite "
                alt="services"
              ></img>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={cont1}
                id="img2"
                style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                className="rotate-infinite hidden"
                alt="services"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="mx-auto container rounded-xl w-full md:w-[100%] "
      >
        <div className=" m-8 pb-9">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-4xl mt-0 ml-0 font-bodyFont lg:ml-20 lg:mt-20  text-primary font-bold m-3"
          >
            Let’s Create something Great Together!
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col ml-0 lg:ml-20 md:flex-row"
        >
          <div className="md:w-1/2">
            <div className="">
              <div className="p-4 flex items-center">
                <div className=" mb-2 lg:mb-10 flex pl-0 lg:pl-4">
                  <strong>
                    <IoLocationOutline className="text-4xl  hover:text-primary text-primary mr-5 lg:mr-0 mx-0 lg:mx-5" />
                  </strong>
                  <p className="text-left text-xl font-bodyFont hover:text-primary">
                    {" "}
                    1/965(A) Vishal Khand 1, Gomti Nagar, Lucknow - 226010
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-center">
                <div className=" mb-2 lg:mb-10 flex pl-0 lg:pl-4">
                  <strong>
                    <IoIosMailUnread className="text-4xl font-bodyFont hover:text-primary text-primary mr-5 lg:mr-0  mx-0 lg:mx-5" />
                  </strong>
                  <p className="text-left text-xl font-bodyFont hover:text-primary ">
                    info@cypher-squad.com1
                  </p>
                </div>
              </div>
              <div className="p-4 flex items-center">
                <div className=" mb-2 lg:mb-10 flex pl-0 lg:pl-4">
                  <strong>
                    <SlCallOut className="text-4xl font-bodyFont mr-5 lg:mr-0 mx-0 lg:mx-5 text-primary hover:text-primary " />
                  </strong>
                  <p className="text-left text-xl font-bodyFont hover:text-primary">
                    +91-880-021-3778, +1-445-900-3119
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div class="w-full p-2 col-span-2">
              <form>
                <div class="mb-10 flex flex-col sm:flex-row gap-2 justify-center">
                  <input
                    type="text"
                    class="w-auto lg:w-full p-5 border bg-transparent outline-none"
                    placeholder="Enter name"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  />
                  <input
                    type="email"
                    class="w-auto lg:w-full border p-5 bg-transparent outline-none"
                    placeholder="Enter email"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  />
                </div>
                <div class="mb-10">
                  <input
                    type="text"
                    class="w-full border p-5 bg-transparent outline-none"
                    placeholder="Enter subject"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  />
                </div>
                <div class="mb-4">
                  <textarea
                    class="w-full border p-5 bg-transparent outline-none"
                    placeholder="Enter message"
                    cols="30"
                    rows="4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="bg-primary font-bodyFont p-3 w-40 mb-5  flex justify-center rounded-full hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Submit <TbLocationShare class="text-2xl mx-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
