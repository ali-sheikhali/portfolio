import React from "react";
import Buttons from "./Buttons";
import { PiSquaresFourThin } from "react-icons/pi";
import heroBG from "../media/hero-bg900x600.jpg";
function HeroHeader({ HeroHeaderRef }) {
  return (
    <div ref={HeroHeaderRef} className=" relative my-5">
      <figure>
        <img
          className="w-full lg:h-[650px] h-[329px] rounded-2xl"
          src={heroBG}
          alt=""
        />
      </figure>
      <div
        className="w-10/12 mx-auto absolute top-0
        flex flex-col justify-center items-center
      text-white space-y-5 lg:py-44 py-10 ml-10"
      >
        <div className="space-y-5 lg:space-y-10 ">
          <h1 className="font-bold text-2xl md:text-4xl">I 'm Ali Sheikhali</h1>
          <p>
            Computer Engineering student and NLP researcher at Queen's
            University
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 font-bold">
          <Buttons
            name="View Portfolio"
            logo={<PiSquaresFourThin />}
            style={{ backgroundColor: "#EF4444" }}
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
