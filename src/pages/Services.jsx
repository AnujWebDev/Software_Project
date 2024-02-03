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
import ret from "../assets/ret.png";
import main from "../assets/main.jpeg";

const servicesData = [
  {
    id: 1,
    image: app,
    title: "App Development",
    description:
      "Leverage our tried-and-true custom mobile app development services to kickstart or enhance your project. Our experts offer full-cycle services for developing mobile applications, which include business research, UX/UI design, and developing your app from the ground up to release. We utilizea combination of cutting-edge technologies and tried-and-true processes to design mobile applications for several platforms.",
  },
  {
    id: 2,
    image: web,
    title: "Web Development",
    description:
      "Our website builder helps you realize your unique idea. With the aid of our approachable website creation services, you can build your brand, look professional, and climb the search engine rankings.Design and simplicity are the cornerstones of our website builder. On your own, you may easily create, modify, and promote a visually appealing, search engine optimized website.",
  },
  {
    id: 3,
    image: mob,
    title: "Branding App Design",
    description:
      "We are here to bring your ideas to life as a comprehensive branding and design firm. Our extensive range of creative services is tailored to meet your current and future business requirements. From web to print, we have the capabilities to fulfill all your needs. Schedule a meeting with our branding specialists to discuss your unique requirements for brand identity and design",
  },
  {
    id: 4,
    image: app,
    title: "Consultation",
    description:
      "Empower Your Digital Ventures with Strategic Insights and Tailored Advice In today's digital age, having a strong online presence is essential for any business looking to succeed in the market. However, navigating the complex landscape of digital marketing and technology can be overwhelming, especially for those without technical expertise. That's where our team of experts comes in. ",
  },
  {
    id: 5,
    image: dm,
    title: "Digital Marketing",
    description:
      "We understand the significance of DevOps in modern IT operations. Our experienced DevOps consultants specialize in streamlining your software development and delivery processes, ensuring efficient collaboration between development and operations teams. Harness the power of automation, continuous integration, and continuous delivery to enhance your software development lifecycle and speed up time-to-market",
  },
  {
    id: 6,
    image: dev,
    title: "DevOps Services",
    description:
      "A visually appealing and user-friendly website is crucial for establishing your online presence. Our expert web development team crafts stunning, responsive websites customized to your requirements. We ensure that your website not only represents your brand effectively but also offers a seamless user experience across devices. Additionally, we provide ongoing website maintenance services to keep your website updated, secure, and performing optimally.",
  },
  {
    id: 7,
    image: ret,
    title: "Retainers",
    description:
      "Ensure the continuous availability and performance of your IT infrastructure with our tailored IT solutions retainers. Our dedicated team of experts provides regular support, monitoring, and maintenance to prevent issues before they impact your business. With our retainer services, you can focus on core business activities, knowing that your IT systems are in safe hands.",
  },
  {
    id: 8,
    image: main,
    title: "Maintenance",
    description:
      "A visually appealing and user-friendly website is crucial for establishing your online presence. Our expert web development team crafts stunning, responsive websites customized to your requirements. We ensure that your website not only represents your brand effectively but also offers a seamless user experience across devices. Additionally, we provide ongoing website maintenance services to keep your website updated, secure, and performing optimally.",
  },
];

const Services = () => {
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
            className=" my-10 lg:mt-60 text-center w-full text-white font-bold text-4xl"
          >
            What are you trying to find?
          </h1>
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
            spaceBetween={50}
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
                slidesPerView: 2.5,
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
                <div className="flex justify-center pb-2 mb-5" style={{ height: '600px',boxSizing:'border-box' }}>
                  <div className="max-w-md card bg-white p-8 rounded-xl shadow-md relative">
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
                      className="text-center text text-black mt-3 text-2xl"
                    >
                      {service.title}
                    </p>
                    <p className="text text-black mt-2">{service.description}</p>
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

export default Services;
