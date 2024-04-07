import React from "react";
import CareerTimeLine from "./CareerTimeLine";

function Career() {
  return (
    <div className="shadow-inner space-y-10 my-10 p-5 border rounded-xl border-[#efefef]">
      <h3 className="font-bold text-2xl border-b-4 border-red-400 w-fit">
        Career
      </h3>

      <div className="timeline timeline-vertical right-24 lg:right-56">
        <CareerTimeLine age="1998" title="born in Tehran" />
        <CareerTimeLine
          age="2017"
          title="i was Start First job at esm Publications"
        />
        <CareerTimeLine
          age="2021"
          title="I was hired as a sales manager at Ariana ghalam Publications"
        />
        <CareerTimeLine
          age="2023"
          title="change Career path, I started learning front-end programming"
        />
      </div>
    </div>
  );
}

export default Career;
