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
      "Start or accelerate your project with time-tested custom mobile app development services. Our professionals offer full-cycle mobile app development services, including business analysis, UX/UI design, and development of your mobile application from conception to launch. We create mobile applications for many platforms by integrating cutting-edge technologies and tried-and-true methodologies.",
  },
  {
    id: 2,
    image: web,
    title: "Web Development",
    description:
      "Our website builder assists in fulfilling your distinct vision. Using our user-friendly website development services, we help you construct your brand, look like a pro, and move up the search engine results pages. Our website builder is built on the principles of simplicity and design. You can quickly design, tweak, and publicize an eye-catching, search-engine-optimized website on your own.",
  },
  {
    id: 3,
    image: mob,
    title: "Branding App Design",
    description:
      "We assist you in putting your ideas into action as a full-service branding and design firm. Cypher Squad provides a wide range of creative services that are suited to your current and future business needs. We can fulfill all your needs, from the web to print. Meet with our branding specialists to go over your needs for brand identity and design.",
  },
  {
    id: 4,
    image: app,
    title: "Consultation",
    description:
      "In a market with intense competition, you need more than just a terrific website that attracts users to succeed. For ventures to get off the ground and become successful and interesting, consulting services are crucial. Your company will improve and expand healthily by working with us, and you will also save money and time.",
  },
  {
    id: 5,
    image: dm,
    title: "Digital Marketing",
    description:
      "With our digital marketing services, you can increase organic website traffic to your website. Get more relevant traffic for the search terms that are most important to your company. We focus on every factor that affects SERPs in order to produce quantifiable outcomes. Count on our successful track record to increase your internet presence. Prepare your company for long-term prosperity.",
  },
  {
    id: 6,
    image: dev,
    title: "DevOps Services",
    description:
      "We encourage businesses to adopt automated, cooperative, and agile working practices in order to improve the software they develop. Our DevOps consulting services will improve the responsiveness, dependability, and productivity of your business. Let us improve your infrastructure automation, integration, and continuous delivery skills so you can grow more quickly and consistently.",
  },
  {
    id: 7,
    image: ret,
    title: "Retainers",
    description:
      "Our web development retainers serve as a comprehensive service, taking care of upgrades, bug fixes, management, and technical assistance. You may take advantage of a special, customer-focused website that enables your company to reach more customers, increase sales, and raise brand awareness when you sign up for our website retainer package.",
  },
  {
    id: 8,
    image: main,
    title: "Maintenance",
    description:
      "In order to assist your organization in delivering a quick, safe, and flawless online experience, Cypher Squad offers a comprehensive and individually tailored website maintenance plan. Additionally, we provide customized solutions for enhancing the efficiency of your website as a full-service digital marketing firm.",
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
            className=" my-10 lg:mt-48 text-center w-full text-white font-bold text-4xl"
          >
            What are you looking for?
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
                <div className="flex justify-center pb-2 mb-5" style={{ height: '550px',boxSizing:'border-box' }}>
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
