import React, { useState } from "react";

function PortfolioFigure({ image, name }) {
  const [showDetail, setShowDetail] = useState(false);
  const handleMouseEnter = () => {
    setShowDetail(true);
  };

  const handleMouseLeave = () => {
    setShowDetail(false);
  };
  return (
    <figure
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="rounded-lg shadow-lg hover:bg-[#FF5959]"
        src={image}
        alt=""
      />
      {showDetail && (
        <div className="absolute top-0 left-0 w-full h-full
         flex items-center justify-center bg-[#4A63E7] bg-opacity-50 rounded-lg">
          <p className="">{name}</p>
        </div>
      )}
    </figure>
  );
}

export default PortfolioFigure;
