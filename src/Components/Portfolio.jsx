import React, { useState } from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg"

const Portfolio = () => {
  const [currentContent, setCurrentContent] = useState([
    {
      title: "QwikiNote",
      description: "Time Management Agency",
      image: p1,
      link: "https://yourlink.com",
      dataAos: "fade-left",
    },
    {
      title: "Card 2 Title",
      description: "Time Management Agency",
      image: p1,
      link: "https://yourlink.com",
      dataAos: "fade-right",
    },
    {
      title: "Card 3 Title",
      description: "Time Management Agency",
      image: p1,
      link: "https://yourlink.com",
      dataAos: "fade-left",
    },
    {
      title: "Card 4 Title",
      description: "Time Management Agency",
      image: p1,
      link: "https://yourlink.com",
      dataAos: "fade-right",
    },
    {
      title: "Card 5 Title",
      description: "Time Management Agency",
      image: p1,
      link: "https://yourlink.com",
      dataAos: "fade-left",
    },
    {
      title: "Card 6 Title",
      description: "Time Management Agency",
      image: p1,
      link: "https://yourlink.com",
      dataAos: "fade-right",
    },
  ]);

  const buttonContentMap = {
    1: [
      {
        title: "QwikiNote",
        description: "Time Management Agency",
        image: p1,
        link: "https://yourlink.com",
        dataAos: "fade-left",
      },
      {
        title: "Card 2 Title",
        description: "Time Management Agency",
        image: p1,
        link: "https://yourlink.com",
        dataAos: "fade-right",
      },
      {
        title: "Card 3 Title",
        description: "Time Management Agency",
        image: p1,
        link: "https://yourlink.com",
        dataAos: "fade-left",
      },
      {
        title: "Card 4 Title",
        description: "Time Management Agency",
        image: p1,
        link: "https://yourlink.com",
        dataAos: "fade-right",
      },
      {
        title: "Card 5 Title",
        description: "Time Management Agency",
        image: p1,
        link: "https://yourlink.com",
        dataAos: "fade-left",
      },
      {
        title: "Card 6 Title",
        description: "Time Management Agency",
        image: p1,
        link: "https://yourlink.com",
        dataAos: "fade-right",
      },
    ],
    2:[
      {
        title: "QwikiNote",
        description: "Time Management Agency",
        image: p2,
        link: "https://yourlink.com",
        dataAos: "fade-left",
      },
      {
        title: "Card 2 Title",
        description: "Time Management Agency",
        image: p2,
        link: "https://yourlink.com",
        dataAos: "fade-right",
      },
      {
        title: "Card 3 Title",
        description: "Time Management Agency",
        image: p2,
        link: "https://yourlink.com",
        dataAos: "fade-left",
      },
      {
        title: "Card 4 Title",
        description: "Time Management Agency",
        image: p2,
        link: "https://yourlink.com",
        dataAos: "fade-right",
      },
      {
        title: "Card 5 Title",
        description: "Time Management Agency",
        image: p2,
        link: "https://yourlink.com",
        dataAos: "fade-left",
      },
      {
        title: "Card 6 Title",
        description: "Time Management Agency",
        image: p2,
        link: "https://yourlink.com",
        dataAos: "fade-right",
      },
    ],
    3: [
      {
        title: "QwikiNote",
        description: "Time Management Agency",
        image: p3,
        link: "https://yourlink.com",
        dataAos: "fade-left",
      },
      {
        title: "Card 2 Title",
        description: "Time Management Agency",
        image: p3,
        link: "https://yourlink.com",
        dataAos: "fade-right",
      },
      {
        title: "Card 3 Title",
        description: "Time Management Agency",
        image: p3,
        link: "https://yourlink.com",
        dataAos: "fade-left",
      },
      {
        title: "Card 4 Title",
        description: "Time Management Agency",
        image: p3,
        link: "https://yourlink.com",
        dataAos: "fade-right",
      },
      {
        title: "Card 5 Title",
        description: "Time Management Agency",
        image: p3,
        link: "https://yourlink.com",
        dataAos: "fade-left",
      },
      {
        title: "Card 6 Title",
        description: "Time Management Agency",
        image: p3,
        link: "https://yourlink.com",
        dataAos: "fade-right",
      },
    ],
  };
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setCurrentContent(buttonContentMap[buttonNumber] || []);
    setActiveButton(buttonNumber);
  };

  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col lg:flex-row container mx-auto overflow-hidden">
        <div className="lg:w-1/2">
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            style={{
              letterSpacing: "3px",
              fontSize: "30px",
              fontWeight: "bold",
            }}
            className="py-14 font-bodyFont lg:py-6 flex italic m-20 text-xl relative"
          >
            Portfolio <BsArrow90DegRight className="ml-2 rotate-90 mt-2" />
          </p>
          <div className="container mx-auto ">
            <div className="w-full">
              <h1
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                style={{
                  fontSize: "60px",
                  fontWeight: "bold",
                  lineHeight: "60px",
                }}
                className="lg:ml-20 font-bodyFont font-bold p-4 rounded-lg text-left"
              >
                Mobile App And Web Development Portfolio
              </h1>

              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                style={{
                  fontFamily: "PT Sans, sans-serif",
                }}
                className="py-6 lg:ml-20 font-bodyFont text-2xl p-4 rounded-lg "
              >
                Get your project done!
                <br />
                Whatever your business need or budget, we'll help get it done.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:ml-20  p-4 text-center">
      <div className="flex mx-auto justify-center">
      <button

        className={`${
          activeButton === 1 ? 'bg-primary text-white' : 'bg-white'
        } w-[150px] p-3 mx-5 hover:bg-primary font-bodyFont rounded-full border hover:text-white text-black transition ease-in-out duration-[0.3s] font-bold py-2 px-4`}
        onClick={() => handleButtonClick(1)}
      >
        Live project
      </button>
      <button
        className={`${
          activeButton === 2 ? 'bg-primary text-white' : 'bg-white'
        } w-[150px] p-3 mx-5 hover:bg-primary font-bodyFont rounded-full border hover:text-white text-black transition ease-in-out duration-[0.3s] font-bold py-2 px-4`}
        onClick={() => handleButtonClick(2)}
      >
        Demo project
      </button>
      <button

        className={`${
          activeButton === 3 ? 'bg-primary text-white' : 'bg-white'
        } w-[200px] p-3 mx-5 hover:bg-primary font-bodyFont rounded-full border hover:text-white text-black transition ease-in-out duration-[0.3s] font-bold py-2 px-4`}
        onClick={() => handleButtonClick(3)}
      >
        Upcoming Project
      </button>
    </div>
        <div className="container mx-auto mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Array.isArray(currentContent) ? (
              currentContent.map((card, index) => (
                <div
                  data-aos={card.dataAos || "fade-right"}
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                  key={index}
                  className="w-[80%] ml-10 mb-4"
                >
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    {typeof card === "object" ? (
                      <>
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover mb-4 rounded-lg"
                        />
                        <h3 className="font-bold text-black text-left text-2xl p-3">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 text-left text-lg p-3">
                          {card.description}
                        </p>
                        <a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Learn More
                        </a>
                      </>
                    ) : (
                      <p>{card}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full mb-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p>{currentContent}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
