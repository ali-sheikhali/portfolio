import React from "react";
import PortfolioFigure from "./PortfolioFigure";
import tmdb from "../media/tmdblogo.png"
function Portfolio() {
  return (
    <div className="shadow-inner space-y-10 my-10 p-5 border rounded-xl border-[#efefef]">
      <h3 className="font-bold text-2xl border-b-4 border-red-400 w-fit">
        Portfolio
      </h3>
      <div>
        <div>
          <PortfolioFigure image={tmdb} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
