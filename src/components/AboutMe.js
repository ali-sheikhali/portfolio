import React from "react";
import Logoimg from "./Logoimg";
import Buttons from "./Buttons";

function AboutMe() {
  return (
    <div className="shadow-xl space-y-10 my-5 p-5 border rounded-xl border-[#efefef]">
      <h3 className="font-bold border-b-4 border-red-400 w-fit">About Me</h3>
      <figure>
        <Logoimg style={{ width: "90px", height: "90px" }} />
      </figure>
      <div className="space-y-4">
        <h2 className="font-bold text-3xl">Hello.</h2>
        <p className="text-gray-400">
          My name is Ali, and I've been learning front-end programming for about
          9 months. During this time, I have studied HTML & CSS, Tailwind CSS,
          basic JavaScript, React and familiarity with TypeScript and Next.js .
          I have also worked on several practice projects to apply and reinforce
          my learning. If you are seeking a dedicated individual passionate
          about continuous learning and diligent work ethic, I am very pleased
          and eager to have the opportunity to work with you.
        </p>
      </div>
      <div className="text-sm gap-2 grid grid-cols-1 md:grid-cols-2">
        <p>
          <span className="text-gray-400">Name:</span>
          <span> Ali Sheikhali</span>
        </p>
        <p>
          <span className="text-gray-400">Birthday:</span>
          <span> 21 January, 1998</span>
        </p>
        <p>
          <span className="text-gray-400">Location:</span>
          <span> Tehran, Iran</span>
        </p>
        <p>
          <span className="text-gray-400">Email:</span>
          <span> ali.sheikhali1998@gmail.com</span>
        </p>
      </div>
      <div className="text-white space-y-3 md:flex md:space-y-0 md:space-x-3">
        <Buttons name="Download CV" style={{ backgroundColor: "#EF4444" }} />
        <Buttons name="Contact Me" style={{ backgroundColor: "#4A63E7" }} />
      </div>
    </div>
  );
}

export default AboutMe;
