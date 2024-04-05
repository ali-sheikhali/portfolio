import React from "react";

function WIdeItems({ name, icons , onClick }) {
  return (
    <div className="hover:ml-2 transition-all ease-linear duration-300">
      <div onClick={onClick} className="flex space-x-1 cursor-pointer">
        <span className="mt-1">{icons}</span>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default WIdeItems;

