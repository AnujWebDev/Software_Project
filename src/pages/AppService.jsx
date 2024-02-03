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
    title: "UI/UX Design ",
    description:
      "Creating beautiful and smooth UI/UX designs that provide better user experience by incorporating effective collaboration, streamlined projects which strive for better results.",
  },
  {
    id: 2,
    image: web,
    title: "Web App Development ",
    description:
      "Custom web development projects ranging from web-based apps, e-commerce portals, CMS, B2B & B2C applications, Intranet and Extranet Portals, and more. Veterans of all new technologies and provide the best web application development services.",
  },
  {
    id: 3,
    image: mob,
    title: "Mobile App ",
    description:
      "Building iOS & Android applications that effectively complement or substitute web solutions. Welcoming possibilities to assist in specific development stages as well as to provide full-cycle mobile app implementation.",
  },
  {
    id: 4,
    image: app,
    title: "Single page App ",
    description:
      "Improve speed, flexibility, and functionality while providing a seamless user experience.",
  },
  {
    id: 5,
    image: dm,
    title: "Cross-platform App ",
    description:
      "Get a multi-platform-based experience that matches your users, business, and industry.",
  },
  {
    id: 6,
    image: dev,
    title: "Hybrid App ",
    description:
      "Market on all cross-channel at a time and dwindle your marketing cost with our hybrid mobile app development services as we deliver robust , reliable and highly functional hybrid applications to market faster on major mobile application platform.",
  },
  
];

const AppService = () => {
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
            className=" my-1 lg:mt-48 text-white font-bold text-4xl"
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
              className=" text-white text-2xl"
            >
              Go for result-driven web, desktop, and mobile apps that can take your business to the next level. 
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
                <div className="flex justify-center pb-2 mb-5" style={{ height: '400px',boxSizing:'border-box' }}>
                  <div className="max-w-md card bg-white p-8  shadow-md relative">
                    <div className="text-xl text font-bold text-black absolute top-4 left-4">
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
                      className="text-center text text-black mt-5 text-2xl"
                    >
                      {service.title}
                    </p>
                    <p className="text text-black mt-4">{service.description}</p>
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

export default AppService;
