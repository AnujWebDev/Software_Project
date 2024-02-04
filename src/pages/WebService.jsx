import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import app from "../assets/app.png";
import web from "../assets/web.jpg";
import mob from "../assets/mob.avif";
import dm from "../assets/dm.png";
import dev from "../assets/do.jpeg"

const servicesData = [
  {
    id: 1,
    image: app,
    title: "Full-Stack Development ",
    description:
      "Full-stack engineers have the expertise required to develop both the front and back end of web applications using the most effective programming languages and technologies for each case. ",
  },
  {
    id: 2,
    image: web,
    title: "Ecommerce Application  ",
    description:
      "Highly scalable, secure, and super fast E- commerce solutions that provide your customer with immersive and frictionless.",
  },
  {
    id: 3,
    image: mob,
    title: "Custom Web Application ",
    description:
      "Custom web applications are easier to mold to the project’s requirements since they don’t have to deal with all the compatibility issues of mobile app development.",
  },
  {
    id: 4,
    image: app,
    title: "Content Management System ",
    description:
      "A Content Management System makes your website’s content easier to manage. This is one of the most requested web development services because of how relevant high-quality content has become",
  },
  {
    id: 5,
    image: dm,
    title: "QA & Testing ",
    description:
      "Delivering real world success by testing with real time scenarios on all platforms.",
  },
  {
    id: 6,
    image: dev,
    title: "Web Support And Maintenance ",
    description:
      "We offers complete infrastructure management from problem resolution to daily maintenance delivering the complete function of a dedicated web operations team.",
  },
  
];

const WebService = () => {
  return (
    <>
      <div className="service overflow-hidden flex flex-col  lg:flex-row p-5 my-20">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="w-full lg:w-1/2 lg:pl-10"
        >
          <h1
            style={{
              fontFamily: "PT Sans, sans-serif",
              letterSpacing: "1px",
            }}
            className=" lg:mt-48 font-bodyFont text-white font-bold text-4xl"
          >
            OUR SERVICES
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
              style={{
                fontFamily: "PT Sans, sans-serif",
              }}
              className=" text-white font-bodyFont text-2xl"
            >
              Engage customers and expand your customer base online to meet your business goals.
            </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="w-full lg:w-2/3"
        >
          <Swiper
            className="p-4"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 2,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="flex justify-center pb-2 mb-5" style={{ height: '400px',boxSizing:'border-box' }}>
                  <div className="max-w-md card bg-white p-8  shadow-md relative">
                    <div className="text-xl text font-bodyFont font-bold text-black absolute top-4 left-4">
                      {String(service.id).padStart(2, "0")}
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={service.image}
                        alt="Image"
                        className="rounded-full w-24 h-24"
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        letterSpacing: "1px",
                      }}
                      className="text-center text font-bodyFont text-black mt-5 text-2xl"
                    >
                      {service.title}
                    </p>
                    <p className="text font-bodyFont text-black mt-4">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default WebService;
