import React from "react";
import CareerTimeLine from "./CareerTimeLine";

function Career() {
  return (
    <div className="shadow-inner space-y-10 my-10 p-5 border rounded-xl border-[#efefef]">
      <h3 className="font-bold text-2xl border-b-4 border-red-400 w-fit">
        Career
      </h3>

      <div className="timeline timeline-vertical">  
          <CareerTimeLine age="1998" title="born in Tehran" />
          <CareerTimeLine age="1998" title="i was born in" />
          <CareerTimeLine age="1998" title="i was born in" />
      </div>
    </div>
  );
}

export default Career;
