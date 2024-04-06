import React from "react";
import MobileBar from "./navbar/MobileBar";
import WideScreenNavBar from "./navbar/WideScreenNavBar";
import HeroHeader from "./HeroHeader";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import GotoTop from "./GotoTop";
import Portfolio from "./Portfolio";
import { useRef } from "react";

function Home() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null)
  const HeroHeaderRef = useRef(null)
  return (
    <div className="">
      <GotoTop />
      <div className="lg:hidden w-11/12 mx-auto my-5">
        <MobileBar />
        <HeroHeader />
        <AboutMe />
        <MySkills />
        <Portfolio />
      </div>
      <div className="hidden lg:flex w-11/12 mx-auto xl:w-9/12 gap-5">
        <div className="w-3/12">
          <WideScreenNavBar portfolioRef={portfolioRef} aboutRef={aboutRef} HeroHeaderRef={HeroHeaderRef} />
        </div>
        <div className="w-9/12">
          <HeroHeader HeroHeaderRef={HeroHeaderRef}/>
          <AboutMe aboutRef={aboutRef} />
          <MySkills />
          <Portfolio portfolioRef={portfolioRef} />
        </div>
      </div>
    </div>
  );
}

export default Home;
