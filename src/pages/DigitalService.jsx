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
    title: "Branding ",
    description:
      "Our branding services utilize technology to fine-tune your company image. You can create a company culture from the inside that resonates with those on the outside.",
  },
  {
    id: 2,
    image: web,
    title: "Social media marketing ",
    description:
      "We are opening new windows of social media marketing services across the globe, that's for every business, irrespective of volume.",
  },
  {
    id: 3,
    image: mob,
    title: "Search engine optimisation ",
    description:
      "All SEO campaigns are assigned a Dedicated Project Coordinator who will communicate with the Managed SEO customer on campaign, performance and outcomes.",
  },
  {
    id: 4,
    image: app,
    title: "Email marketing ",
    description:
      "We help you target your audience and customers through email. It helps you boost conversions and revenue by providing subscribers and customers with valuable information to help achieve their goals.",
  },
  {
    id: 5,
    image: dm,
    title: "Content marketing ",
    description:
      "Content Marketing services refer to different pieces of content you can offer a business to boost their results. We’re talking about blog posts, ebooks, infographics and other formats that respond well to a buyer persona's needs.",
  },
  {
    id: 6,
    image: dev,
    title: "Consulting and audit",
    description:
      "Analyse & improve your digital marketing strategy.We’re talking about blog posts, ebooks, infographics and other formats that respond well to a buyer persona's needs.",
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
              Leverage targeted marketing efforts that deliver profitable results for market dominance. 
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
                <div className="flex justify-center font-bodyFont pb-2 mb-5" style={{ height: '400px',boxSizing:'border-box' }}>
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

export default AppService;
