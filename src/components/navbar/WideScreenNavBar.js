import React from "react";
import Logoimg from "../Logoimg";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { PiSquaresFourThin } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import WIdeItems from "./WIdeItems";
import SocialMedia from "../SocialMedia";

function WideScreenNavBar({
  portfolioRef,
  aboutRef,
  HeroHeaderRef,
  GetInTouchRef,
}) {
  const handleClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="fixed ">
      <div
        className="bg-[#4A63E7] flex flex-col justify-start space-y-8 
     text-white my-5 py-10 px-7 rounded-2xl"
      >
        <div className="flex flex-col items-start space-y-3 my-3">
          <Logoimg style={{ width: "70px", height: "70px" }} />
          <div>
            <p className="font-bold text-xl">Ali Sheikhali</p>
            <p className="text-md">Front-End Developer</p>
          </div>
        </div>
        <div className="space-y-4">
          <WIdeItems
            name="Home"
            icons={<AiOutlineHome />}
            onClick={() => handleClick(HeroHeaderRef)}
          />
          <WIdeItems
            name="About"
            icons={<IoPersonOutline />}
            onClick={() => handleClick(aboutRef)}
          />
          <WIdeItems
            name="Portfolio"
            icons={<PiSquaresFourThin />}
            onClick={() => handleClick(portfolioRef)}
          />
          <WIdeItems name="Eduction" icons={<MdCastForEducation />} />
          <WIdeItems
            name="Contact"
            icons={<LuPhone />}
            onClick={() => handleClick(GetInTouchRef)}
          />
        </div>
        <div className="pt-24">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default WideScreenNavBar;
