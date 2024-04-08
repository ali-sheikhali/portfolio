import React from "react";

function Buttons({ name, style, logo, hover }) {
  return (
    <div className="">
      <button
        style={style}
        className="px-4 py-2 rounded-2xl hover:shadow-xl 
        ease-in duration-300 transition-all flex items-center justify-center space-x-1"
        onMouseEnter={
          hover
            ? (e) => {
                e.target.style.backgroundColor = "#FF5959";
                e.target.style.color = "#FFFFFF";
              }
            : null
        }
        onMouseLeave={
          hover
            ? (e) => {
                e.target.style.backgroundColor = style.backgroundColor;
                e.target.style.color = style.color || ""; // Reset to default color if specified
              }
            : null
        }
      >
        <span>{logo}</span>
        <span>{name}</span>
      </button>
    </div>
  );
}

export default Buttons;
