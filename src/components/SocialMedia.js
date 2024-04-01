import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { SiInstagram } from "react-icons/si";

function SocialMedia() {
  return (
    <div className="flex space-x-5 text-xl">
      <a
        target="-blank"
        href="https://github.com/ali-sheikhali"
        className="border rounded-full p-2 
         hover:bg-red-500 transition-all ease-linear duration-200"
      >
        <FaGithub />
      </a>
      <a
        target="-blank"
        href="https://www.linkedin.com/in/ali-sheikhali"
        className="border rounded-full p-2
         hover:bg-red-500 transition-all ease-linear duration-200"
      >
        <IoLogoLinkedin />
      </a>
      <a
        target="-blank"
        href="mailto:ali.sheikhali1998@gmail.com"
        className="border rounded-full p-2
         hover:bg-red-500 transition-all ease-linear duration-200"
      >
        <MdMailOutline />
      </a>
      <a
        href="#"
        className="border rounded-full p-2
         hover:bg-red-500 transition-all ease-linear duration-200"
      >
        <SiInstagram />
      </a>
    </div>
  );
}

export default SocialMedia;
