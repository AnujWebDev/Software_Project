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
    title: "Brand identity & strategy ",
    description:
      "We develop the unique brand identity that cleverly represents your brand across all touch-points and makes you standout. Crafting the brand identity, that works for your business to get more customers.",
  },
  {
    id: 2,
    image: web,
    title: "Graphic design  ",
    description:
      "Our graphic designs can develop a great impression on your prospect’s mind. With a complete mixture of professionalism and stunning creativity skills, our expert designers can establish a bright profile for your business in the online world.",
  },
  {
    id: 3,
    image: mob,
    title: "Icons & infographics ",
    description:
      "Visuals to communicate information clearly, engage the audience, and increase customer retention.",
  },
  {
    id: 4,
    image: app,
    title: "Emailer design  ",
    description:
      " Email design can help you effectively reach your target audience, boost conversions, and build long-term relationships with prospects and customers.",
  },
  {
    id: 5,
    image: dm,
    title: "Packaging design ",
    description:
      "Product packaging design refers to the creation of the exterior of a product. That includes choices in material and form as well as graphics, colors and fonts that are used on wrapping, a box, a can, a bottle or any kind of container.",
  },
  {
    id: 6,
    image: dev,
    title: "Marketing collaterals ",
    description:
      "Using the right type of marketing collateral with tailored messaging to new and existing fans will save you from the backlash",
  },
  
];

const BrandService = () => {
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
            className="mt-4 lg:mt-48 text-white font-bold text-4xl"
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
            Communicate your company's purpose, vision, and values and develop a plan that helps meet your business goals.
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

export default BrandService;
