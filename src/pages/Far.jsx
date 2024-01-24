import React from "react";
import { ImMail3 } from "react-icons/im";
import { VscCallIncoming } from "react-icons/vsc";
import lets from "../assets/lets.png";

const Far = () => {
  return (
    <div className="flex flex-col overflow-hidden md:flex-row mt-10 md:mt-20 container mx-auto">
      <div className="md:w-1/2 my-10 p-5 md:my-20">
        <h1 data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine" className="text-4xl md:text-5xl lg:text-6xl font-bold py-6">
          You've made it this far......
        </h1>
        <p data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine" className="text-base md:text-xl py-6">
          “As a provider of tech-enabled digital marketing solutions, Cypher
          Squad develops unique plans for each of its clients in accordance with
          their requirements and objectives. Our passions are the web and
          assisting companies in achieving their objectives. As a result, if you
          choose us as your digital marketing firm, you won't get a pre-made
          approach; instead, you'll get a unique strategy that is tailored to
          your business, your needs, and your objectives.
        </p>
        <div className="flex flex-col md:flex-row">
          <p data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine" className="flex items-center text-base md:text-2xl">
            <ImMail3 className="text-4xl md:text-6xl  mx-2 md:mx-5" />
            info@cypher-squad.com
          </p>
          <p data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine" className="flex items-center text-base md:text-2xl mt-4 md:mt-0 md:ml-6">
            <VscCallIncoming className="text-4xl md:text-6xl  mx-2 md:mx-5" />
            +91-880-021-3778
          </p>
        </div>
      </div>
      <div className="md:w-1/2 bg-white my-20 flex justify-center">
        <div data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine" >
        <img
          src={lets}
          className="rotate-infinite my-10 md:my-20"
          alt="circle"
        />
      </div>
      </div>
    </div>
  );
};

export default Far;
