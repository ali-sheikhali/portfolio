import React from "react";
import MobileBar from "./navbar/MobileBar";
import WideScreenNavBar from "./navbar/WideScreenNavBar";
import HeroHeader from "./HeroHeader";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import GotoTop from "./GotoTop";
import Portfolio from "./Portfolio";
import { useRef } from "react";
import Career from "./Career";
import GetInTouch from "./form/GetInTouch";

function Home() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const HeroHeaderRef = useRef(null);
  const GetInTouchRef = useRef(null);
  console.log("Portfolio Ref:", portfolioRef);
console.log("About Ref:", aboutRef);
console.log("Hero Header Ref:", HeroHeaderRef);
console.log("Get In Touch Ref:", GetInTouchRef);
  return (
    <div className="">
      <GotoTop />
      <div className="lg:hidden w-11/12 mx-auto my-5">
        <MobileBar
          portfolioRef={portfolioRef}
          aboutRef={aboutRef}
          HeroHeaderRef={HeroHeaderRef}
          GetInTouchRef={GetInTouchRef}
        />
        <HeroHeader  HeroHeaderRef={HeroHeaderRef}/>
        <AboutMe aboutRef={aboutRef}/>
        <MySkills />
        <Portfolio portfolioRef={portfolioRef}/>
        <Career />
        <GetInTouch GetInTouchRef={GetInTouchRef}/>
      </div>
      <div className="hidden lg:flex w-11/12 mx-auto xl:w-9/12 gap-5">
        <div className="w-3/12">
          <WideScreenNavBar
            portfolioRef={portfolioRef}
            aboutRef={aboutRef}
            HeroHeaderRef={HeroHeaderRef}
            GetInTouchRef={GetInTouchRef}
          />
        </div>
        <div className="w-9/12">
          <HeroHeader HeroHeaderRef={HeroHeaderRef} />
          <AboutMe aboutRef={aboutRef} />
          <MySkills />
          <Portfolio portfolioRef={portfolioRef} />
          <Career />
          <GetInTouch GetInTouchRef={GetInTouchRef} />
        </div>
      </div>
    </div>
  );
}

export default Home;
