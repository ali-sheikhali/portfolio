import React from "react";

function CareerTimeLine({ age, title, ticked }) {
  return (
    <li className="">
      <div className="timeline-start">{age}</div>
      <div className="timeline-middle">
        <div className="p-1 border bg-[#FF5959] rounded-full mb-1"></div>
      </div>
      <div className="timeline-end timeline-box">{title}</div>
      <hr className="bg-[#FF5959] " />
    </li>
  );
}

export default CareerTimeLine;
