import React from "react";

function CareerTimeLine({ age, title, ticked  }) {
  return (
    <li className="">
      <div className="timeline-start">{age}</div>
      <div className="timeline-middle">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-3 h-3 "
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg> */}
        <div className="p-1 border bg-[#FF5959] rounded-full mb-1" >

        </div>
      </div>
      <div className="timeline-end timeline-box">{title}</div>
      <hr className="bg-[#FF5959] " />
    </li>
  );
}

export default CareerTimeLine;
