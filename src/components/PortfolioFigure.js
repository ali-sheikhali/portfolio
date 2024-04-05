import React, { useState } from "react";

function PortfolioFigure({ image }) {
    
  const [showDetail, setShowDetail] = useState(false);
  const handleMouseEnter = () => {
    setShowDetail(true);
  };

  const handleMouseLeave = () => {
    setShowDetail(false);
  };
  return (
    <figure className="relative">
      <img
        className="rounded-lg shadow-lg hover:bg-[#FF5959]"
        src={image}
        alt=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showDetail && (
        <div className="absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2">
          <p>more Detail</p>
        </div>
      )}
    </figure>
  );
}

export default PortfolioFigure;



