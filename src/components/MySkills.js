import React from "react";
import Buttons from "./Buttons";
function MySkills() {
  return (
    <div className="shadow-inner space-y-10 my-10 p-5 border rounded-xl border-[#efefef]">
      <h3 className="font-bold text-2xl border-b-4 border-red-400 w-fit">
        My Skills
      </h3>
      <p className="text-gray-400">
        My journey in the field of front-end programming began in the early days
        of in 2023. Initially, by completing the HTML course at 7Learn Academy,
        I took my first steps into the world of programming. Then, by watching
        the Tailwind CSS course on Udemy, I delved into the depths of modern web
        design technologies. Continuing on, upon completing the JavaScript
        course on SabzLearn website, I acquired the primary programming language
        of the web. Finally, by watching the React course on Udemy, I entered
        the world of dynamic and advanced JavaScript frameworks and, using it,
        created larger and more powerful projects. This journey is always
        evolving and progressing, and I continue to eagerly learn and update my
        skills.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
        <Buttons
          name="HTML"
          style={{
            backgroundColor: "rgba(255, 89, 89, 0.4)",
            border: "3px solid #FF5959",
            width: "180px",
          }}
        />
        <Buttons
          name="Css"
          style={{
            backgroundColor: "rgba(255, 89, 89, 0.4)",
            border: "3px solid #FF5959",
            width: "180px",
          }}
        />
        <Buttons
          name="Tailwind Css"
          style={{
            backgroundColor: "rgba(255, 89, 89, 0.4)",
            border: "3px solid #FF5959",
            width: "180px",
          }}
        />
        <Buttons
          name="JavaScript"
          style={{
            backgroundColor: "rgba(255, 89, 89, 0.4)",
            border: "3px solid #FF5959",
            width: "180px",
          }}
        />
        <Buttons
          name="React"
          style={{
            backgroundColor: "rgba(255, 89, 89, 0.4)",
            border: "3px solid #FF5959",
            width: "180px",
          }}
        />
        <Buttons
          name="Next.js"
          style={{
            backgroundColor: "rgba(255, 89, 89, 0.4)",
            border: "3px solid #FF5959",
            width: "180px",
          }}
        />
      </div>
    </div>
  );
}

export default MySkills;
