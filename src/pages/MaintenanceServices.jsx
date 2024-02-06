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
import dev from "../assets/do.jpeg";

const servicesData = [
  {
    id: 1,
    image: app,
    title: "Hosting maintenance",
    description:
      "As a full-service digital agency, we will impact your business or organization through strategy consulting, website design and development, integrated marketing, and hosting and maintenance services",
  },
  {
    id: 2,
    image: web,
    title: "Content management",
    description:
      "We offer you application that allows users to build and manage a website without having to code it from scratch, or know how to code at all.",
  },
  {
    id: 3,
    image: mob,
    title: "Traffic monitoring",
    description:
      " We keep a track what devices are connected to a network, what kinds of data the devices are accessing, and how much bandwidth each device is using.",
  },
  {
    id: 4,
    image: app,
    title: "Technical maintenance	",
    description:
      " Web application maintenance is a critical aspect that can help businesses to keep their application modernized and updated. We provide corrective activities like technical upgrades, debugging, patch updates and functional optimization as per the modern web trends.",
  },
  {
    id: 5,
    image: dm,
    title: "Security management",
    description:
      "We tend to take the measure to protect a website or web application from external attacks that could result in data loss, denial of service, or privacy violation, among other things.",
  },
  {
    id: 6 ,
    image: dm,
    title: "Strategic web support",
    description:
      "We design the fusion of your organizational goals with every aspect of your design process.",
  },
  
];

const MaintenanceService = () => {
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
            className=" lg:mt-40 font-bodyFont text-white font-bold text-4xl"
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
              Focus on growing your business, without having to worry about digital threats with best-in-class maintenance solutions to fit your budget and needs. 
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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="flex justify-center pb-2 mb-5" style={{ height: '500px',boxSizing:'border-box' }}>
                  <div className="max-w-md card bg-white p-8  shadow-md relative">
                    <div className="text-xl font-bodyFont text font-bold text-black absolute top-4 left-4">
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
                        letterSpacing: "1px",
                      }}
                      className="text-center font-bodyFont text text-black mt-5 text-2xl"
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

export default MaintenanceService;
