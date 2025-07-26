import React from "react";
import Coach from "../assets/portfolio/Coach.png";
import HBDigital from "../assets/portfolio/HB-Digital-07-26-2025_06_34_PM.png";
import Dashboard from "../assets/portfolio/Dashboard.png";
import Travlings from "../assets/portfolio/Travlings.png";
import ENext from "../assets/portfolio/ENext.png";
import Portfolios from "../assets/portfolio/Portfolio.png";
import usestate from "../assets/portfolio/usestate.jpg";

const Portfolio = () => {
  const pportfolios = [
    {
      id: 1,
      src: ENext,
      code: "https://github.com/likeam/ecom-next",
      demo: "https://ecom-next-taupe.vercel.app/",
    },
    {
      id: 2,
      src: HBDigital,
      code: "https://github.com/likeam/HBDigitalAgency",
      demo: "https://agency-ten-woad.vercel.app/",
    },
    {
      id: 3,
      src: Dashboard,
      code: "https://github.com/likeam/dashboard",
      demo: "https://dashboard-mocha-delta.vercel.app/",
    },
    {
      id: 4,
      src: Travlings,
      code: "https://github.com/likeam/Travling",
      demo: "https://travlingpakistan.netlify.app/",
    },
    {
      id: 5,
      src: Coach,
      code: "https://github.com/likeam/linca-coach",
      demo: "https://linca-coach.vercel.app/",
    },
    {
      id: 6,
      src: Portfolios,
      code: "https://github.com/likeam/React-Portfolio",
      demo: "https://engrabdulrehman.netlify.app/",
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-scree"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {pportfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt="weather"
                className="duration-200 rounded-md hover:scale-110"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
