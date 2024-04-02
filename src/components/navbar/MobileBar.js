import React from "react";
import { Menu } from "@headlessui/react";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { PiSquaresFourThin } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import SocialMedia from "../SocialMedia";
import Logoimg from "../Logoimg";

function MobileBar() {
  return (
    <div className="bg-[#4A63E7] flex justify-start space-x-5 items-center text-white py-3 px-7 rounded-2xl">
      <div>
        <Menu>
          <Menu.Button className="text-2xl">
            <FaBarsStaggered />
          </Menu.Button>
          <Menu.Items
            className="absolute bg-[#4A63E7] 
          flex flex-col space-y-2 w-11/12 mt-4 left-4 sm:left-6 md:left-10 rounded-2xl py-3 px-7 z-10"
          >
            <Menu.Item className="hover:ml-2 transition-all ease-linear duration-300">
              {({ active }) => (
                <a className="flex space-x-3" href="#">
                  <span className="mt-1">
                    <AiOutlineHome />
                  </span>
                  <span>Home</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="hover:ml-2 transition-all ease-linear duration-300">
              {({ active }) => (
                <a className="flex space-x-3" href="#">
                  <span className="mt-1">
                    <IoPersonOutline />
                  </span>
                  <span>about</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="hover:ml-2 transition-all ease-linear duration-300">
              {({ active }) => (
                <a className="flex space-x-3" href="#">
                  <span className="mt-1">
                    <PiSquaresFourThin />
                  </span>
                  <span>Portfolio</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="hover:ml-2 transition-all ease-linear duration-300">
              {({ active }) => (
                <a className="flex space-x-3" href="#">
                  <span className="mt-1">
                    <MdCastForEducation />
                  </span>
                  <span>Eduction</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="hover:ml-2 transition-all ease-linear duration-300">
              {({ active }) => (
                <a className="flex space-x-3" href="#">
                  <span className="mt-1">
                    <LuPhone />
                  </span>
                  <span>Contact</span>
                </a>
              )}
            </Menu.Item>
            <span className="flex justify-center">
              <SocialMedia />
            </span>
          </Menu.Items>
        </Menu>
      </div>
      <div className="flex items-center space-x-5">
        <Logoimg style={{ width: "40px", height: "40px" }} />
        <p className="font-bold text-2xl">Ali Sheikhali</p>
      </div>
    </div>
  );
}

export default MobileBar;
