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
    title: "AWS Cloud Solutions",
    description:
      "Our managed AWS cloud hosting platform allows developers, agencies & E - commerce businesses to build & scale their web applications with complete peace of mind.",
  },
  {
    id: 2,
    image: web,
    title: "VPS Hosting with dedicated IP",
    description:
      "Cost-effective web hosting service model to meet rising market and end-user demands. It is a securely managed environment that provides greater flexibility and focuses on the privacy of your critical data and applications at no big cost.",
  },
  {
    id: 3,
    image: mob,
    title: "Shared Hosting ",
    description:
      "We strive to provide outstanding, brisk and steadfast hosting services which is backed by our technical experts round the clock.",
  },
  {
    id: 4,
    image: app,
    title: "WordPress Hosting ",
    description:
      "Managed WordPress Hosting powered by AWS Infinitely scalable hosting, Low-latency CDN, and state-of-the-art security tailored to your WordPress websites.",
  },
  {
    id: 5,
    image: dm,
    title: "Reseller Hosting ",
    description:
      "We help you sell web hosting without the burden of dealing with server management responsibilities or owning a hardware and data center.",
  },
  
];

const DevopsService = () => {
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
            className=" lg:mt-40 text-white font-bold text-4xl"
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
              Look no further than our collaborative DevOps services to keep your website at pace with your business. 
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

export default DevopsService;
