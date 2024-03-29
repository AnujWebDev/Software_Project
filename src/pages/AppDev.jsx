import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import s from "../assets/8.png"
import s1 from "../assets/s11.png"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AppDev = () => {
  const servicesData = [
    {
      id: 1,
      title: "Development ",
      description:
        "Software & design experts work closely an idea into a prototype that is fully functional and reliable."    
      },
    {
      id: 2,

      title: "Testing and launch ",
      description:
        "Quality assurance testing and the final reveal of your presence online - a creative, technologically advanced, and user-friendly application. " 
        },
    {
      id: 3,
      title: "Envision ",
      description:
        "A clear idea of what your app will look like in the future and the customer base it serves."
      },
    {
      id: 4,

      title: "Customize ",
      description:
        "Analyze your business, niche, competitors, and technical specifications."
          },
    {
      id: 5,
      title: "Design",
      description:
        "Build your app from scratch and deliver a simple, creative, and visually appealing application in your budget." 
         },
  ];
  return (
    <div className=" overflow-hidden">
      <div
        
        className="container p-5 mx-auto sm:pt-20"
      >
        <p
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
          style={{
            letterSpacing: "3px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
          className="py-14 font-bodyFont  lg:py-6 ml-0 lg:ml-20 flex italic text-xl"
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
                fontSize: "50px",
                fontWeight: "bold",
                lineHeight: "60px",
              }}
              className="text-2xl font-bodyFont mt-4 lg:mt-20 ml-0 lg:ml-20 font-bold"
            >
              App Development
            </h1>
            <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
              className="py-6 ml-0 font-bodyFont lg:ml-20 text-2xl"
            >
              Modernize your operations, defeat challenges, and boost productivity
              by enriching customer experiences.
            </p>
          </div>
          <div className="w-full sm:w-1/2  p-2 flex justify-center">
            <div data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine" 
            >
            <img id="img11" src={s1} className="rotate-infinite mt-10 w-40 h-40" alt="services"></img>
            <img id="img22" src={s} className="rotate-infinite mt-10 hidden" alt="services"></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row container mt-20 mx-auto">
          <div className="w-full sm:w-1/2 flex justify-center">
            <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
              className="py-6 ml-0 my-12 font-bodyFont mb-20 lg:ml-20 text-2xl"
            >
              Your brand's credibility and recognition can soar with the right
              team. Get in touch with leading experts in SEO, app design, web
              development, social media marketing, and other fields. When it
              comes to value and results, Cypher Squad always excels. Take out
              the bad and emphasize the good.
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
              className="text-2xl font-bodyFont mt-16 font-extrabold"
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
          className="w-full lg:w-[1200px] container mx-auto"
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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="flex justify-center rounded-xl box mb-5" style={{ height: '400px',boxSizing:'border-box' }}>
                  <div className="max-w-md  rounded-xl relative">
                    <div className="text-xl text font-bold font-bodyFont text-white absolute top-4 left-4">
                      {String(service.id).padStart(2, "0")}
                    </div>
                    <div style={{clipPath: "polygon(0 23%, 100% 43%, 100% 100%, 0% 100%)",boxSizing:'border-box'}} className=" hover:bg-teal-950 transition duration-[0.3s] ease-in-out rounded-xl h-full">
                    <p
                      style={{
                        fontFamily: "PT Sans, sans-serif",
                        letterSpacing: "1px",
                      }}
                      className=" text text-white pt-36 font-bodyFont p-5 text-2xl"
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

export default AppDev;
