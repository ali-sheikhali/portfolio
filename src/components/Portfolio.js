import React from "react";
import PortfolioFigure from "./PortfolioFigure";
import tmdb from "../media/tmdblogo.png";
import learning from "../media/learning.png";
import weather from "../media/weather.png";
import shop from "../media/shop.png";
function Portfolio({ portfolioRef }) {
  return (
    <div
      ref={portfolioRef}
      className="shadow-inner space-y-10 my-10 p-5 border rounded-xl border-[#efefef]"
    >
      <h3 className="font-bold text-2xl border-b-4 border-red-400 w-fit">
        Portfolio
      </h3>
      <div>
        <div className="w-9/12 md:w-10/12 lg:w-11/12 mx-auto gap-10 grid grid-cols-1 md:grid-cols-2">
          <PortfolioFigure name="TMDB movie Website" image={tmdb} />
          <PortfolioFigure name="Learning Website" image={learning} />
          <PortfolioFigure name="Weather Website" image={weather} />
          <PortfolioFigure name="shop Website" image={shop} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
