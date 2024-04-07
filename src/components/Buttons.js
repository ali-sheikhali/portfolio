import React from "react";

function Buttons({ name, style, logo }) {
  return (
    <div className="">
      <button
        style={style}
        className="px-4 py-2 rounded-2xl hover:shadow-xl  ease-in duration-300 transition-all flex items-center space-x-2"
      >
        <span>{logo}</span>
        <span>{name}</span>
      </button>
    </div>
  );
}

export default Buttons;
