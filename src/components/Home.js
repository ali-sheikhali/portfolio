import React from "react";
import MobileBar from "./navbar/MobileBar";
import WideScreenNavBar from "./navbar/WideScreenNavBar";
import HeroHeader from "./HeroHeader";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <div className="">
      <div className="lg:hidden w-11/12 mx-auto my-5">
        <MobileBar />
        <HeroHeader />
        <AboutMe />
      </div>
      <div className="hidden lg:flex w-11/12 mx-auto xl:w-9/12 gap-3">
        <div className="w-3/12">
          <WideScreenNavBar />
        </div>
        <div className="w-9/12">
          <HeroHeader />
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default Home;
