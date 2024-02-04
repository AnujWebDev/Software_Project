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
    title: "Web design & development	 ",
    description:
      "Our expert team brings ideas to life by creating attractive user interface website to build the value of your brand in the market. Contact us now to discuss your custom website project",
  },
  {
    id: 2,
    image: web,
    title: "Media and marketing	",
    description:
      "With an effective social media content marketing strategy, we generate more engagements and social signals, such as likes and shares, that allow you to interact with a broader online community.",
  },
  {
    id: 3,
    image: mob,
    title: "Application development ",
    description:
      " The more complex the task is the better is unleashed out of our mobile app developers. Backend is a no lesser job than creating an android or IOS mobile app. We have the capability to deliver the best mobile app reporting engine and mobile app backend system.",
  },
  {
    id: 4,
    image: app,
    title: "Branding & outreach",
    description:
      "We boost your lead generation by collaborating with influencers and brands with a similar target audience to yours, you get to tap into a relevant traffic source.",
  },
  {
    id: 5,
    image: dm,
    title: "Tech support ",
    description:
      "Your hybrid workforce is at the core of our solution with modernized support services that deliver a high-grade consumer-like support experience. Our solutions are omni-channel by design and powered by analytics, cognitive technologies, and automation to enhance productivity and employee experience. ",
  },
  {
    id: 6,
    image: dev,
    title: "Inbound marketing",
    description:
      "We help you grow your organization by building meaningful, lasting relationships with consumers, prospects, and customers. It’s about valuing and empowering these people to reach their goals at any stage in their journey with you.",
  },
  
];

const ConsultationService = () => {
  return (
    <>
      <div className="service overflow-hidden flex flex-col  lg:flex-row p-5 my-20">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="w-full  lg:w-1/2 lg:pl-10"
        >
          <h1
            style={{
              fontFamily: "PT Sans, sans-serif",
              letterSpacing: "1px",
            }}
            className=" lg:mt-28 font-bodyFont text-white font-bold text-4xl"
          >
            OUR CONSULTATION SERVICES
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
           See deep technological expertise join with best-in-class consultancy solutions that are universal, people-centric, and result-oriented to match your business need. 
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

export default ConsultationService;
