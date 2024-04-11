import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";

function PortfolioFigure({ image, name, id }) {
  const [showDetail, setShowDetail] = useState(false);
  const handleMouseEnter = () => {
    setShowDetail(true);
  };

  const handleMouseLeave = () => {
    setShowDetail(false);
  };
  return (
    <Link to={`/portfolio/${id}`}>
      <figure
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={`rounded-lg shadow-lg hover:bg-[#FF5959] ${
            showDetail ? "flex blur-[2px]" : ""
          }`}
          src={image}
          alt=""
        />
        {showDetail && (
          <div className="absolute font-semibold inset-0 w-full h-full flex flex-col items-center justify-center rounded-lg">
            <p className="">{name}</p>
            <p className="border border-black rounded-full p-1">
              <GoPlus />
            </p>
          </div>
        )}
      </figure>
    </Link>
  );
}

export default PortfolioFigure;
