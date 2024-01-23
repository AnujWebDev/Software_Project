import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className="hero z-0 min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-2xl font-bold">We are passionate about<br/>
              <span className="mt-20 text-5xl">
              <TypeAnimation
                sequence={["conversion rate optimization.", 1000, "digital marketing.", 1000, "establishing brand presence.", 1000,"custom software development.",1000,"thought leadership.",1000,"fostering creativity.",1000]}
                repeat={Infinity}
              />
              </span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
