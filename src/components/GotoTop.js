import React from "react";
import { FaChevronUp } from "react-icons/fa6";

function GotoTop() {
  const handleClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={handleClickToTop} className="cursor-pointer">
      <div
        className="fixed right-5 bottom-5 
        p-3 bg-gray-300 rounded-full hover:bg-[#FF5959] transition-all ease-in duration-300  "
      >
        <FaChevronUp />
      </div>
    </div>
  );
}

export default GotoTop;
