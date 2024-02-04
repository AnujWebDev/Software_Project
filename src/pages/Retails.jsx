import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import s1 from "../assets/s1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Retails = () => {
  const servicesData = [
    {
      id: 1,
      title: "Monitor",
      description: "Set up regular communication channels to achive retainers.",
    },
    {
      id: 2,

      title: "Report",
      description:
        "Update the business benefits of our retainer service. ",
    },
    {
      id: 3,
      title: "Examine ",
      description: "Monitor and list your service request to build a business case.",
    },
    {
      id: 4,

      title: "Structure",
      description: "Align your brand interest with your business needs and plan our structures.",
    },
    {
        id: 5,
  
        title: "Plan",
        description: "Define timeframes and delivery for all services with full planning.",
      },
  ];
  return (
    <div className=" overflow-hidden">
      <div className="container p-5 mx-auto sm:pt-20">
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
          className="py-14 lg:py-6 ml-0 lg:ml-20 font-bodyFont flex italic text-xl"
        >
          Service <BsArrow90DegRight className="ml-2 rotate-90 mt-2" />
        </p>
        <div className="container mx-auto flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              style={{
                fontSize: "45px",
                fontWeight: "bold",
                lineHeight: "60px",
              }}
              className="text-2xl font-bodyFont mt-20 ml-0 lg:ml-20 font-bold"
            >
              Retainers
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              style={{
                fontFamily: "PT Sans, sans-serif",
              }}
              className="py-6 ml-0 lg:ml-20 font-bodyFont text-2xl"
            >
              Tap into better value for your business by locking in your brand identity in a one-time contract.
            </p>
          </div>
          <div className="w-full sm:w-1/2 bg-white p-2 flex justify-center">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img src={s1} className="rotate-infinite" alt="services"></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row container mt-20 mx-auto">
          <div className="w-full sm:w-1/2 flex justify-center">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="py-6 ml-0 font-bodyFont mb-20 lg:ml-20 text-2xl"
            >
              Together, we build your brand, focusing on uninterrupted assistance and ongoing, continuous improvements.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center">
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              style={{
                fontSize: "45px",
                fontWeight: "bold",
                lineHeight: "60px",
              }}
              className="text-2xl font-bodyFont mt-10 font-bold"
            >
              HOW WE WORK
            </h1>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        className="w-full lg:w-[1200px] mx-auto"
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
              slidesPerView: 4,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <div
                className="flex justify-center rounded-xl box mb-5"
                style={{ height: "400px", boxSizing: "border-box" }}
              >
                <div className="max-w-md  rounded-xl relative">
                  <div className="text-xl font-bodyFont text font-bold text-white absolute top-4 left-4">
                    {String(service.id).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      clipPath: "polygon(0 23%, 100% 43%, 100% 100%, 0% 100%)",
                      boxSizing: "border-box",
                    }}
                    className=" hover:bg-teal-950 transition duration-[0.3s] ease-in-out rounded-xl h-full"
                  >
                    <p
                      style={{
                        letterSpacing: "1px",
                      }}
                      className=" text text-white font-bodyFont pt-40 p-5 text-2xl"
                    >
                      {service.title}
                    </p>
                    <p className="text text-white font-bodyFont p-5">{service.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Retails;
