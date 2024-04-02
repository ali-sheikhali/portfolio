import React from "react";
import Buttons from "./Buttons";

function HeroHeader() {
  return (
    <div className="bg-[#4A63E7] rounded-2xl  text-white my-5 lg:h-[600px]">
      <div className="w-10/12 mx-auto space-y-10 lg:py-44 py-20">
        <div className="space-y-10">
          <h1 className="font-bold text-4xl">I 'm Ali Sheikhali</h1>
          <p>
            Computer Engineering student and NLP researcher at Queen's
            University
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 font-bold">
          <Buttons
            name="View Portfolio"
            style={{ backgroundColor: "rgb(239 68 68 / var(--tw-bg-opacity))" }}
          />
          <Buttons
            name="Contact Me"
            style={{ backgroundColor: "transparent", border: "1px solid #fff" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
