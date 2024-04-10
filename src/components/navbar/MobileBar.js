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
import { Link } from "react-router-dom";

function MobileBar({ portfolioRef, aboutRef, HeroHeaderRef, GetInTouchRef }) {
  
  const handleClick = (ref, event) => {
    console.log(ref.current);
    event.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-[#384db7] flex justify-start space-x-5 items-center text-white py-3 px-7 rounded-2xl">
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
                <Link
                  to="/"
                  onClick={(event) => handleClick(HeroHeaderRef, event)}
                  className="flex space-x-3 cursor-pointer"
                >
                  <span className="mt-1">
                    <AiOutlineHome />
                  </span>
                  <span>Home</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item className="hover:ml-2 transition-all ease-linear duration-300">
              {({ active }) => (
                <Link
                  className="flex space-x-3 cursor-pointer"
                  onClick={(event) => handleClick(aboutRef, event)}
                  to="/"
                >
                  <span className="mt-1">
                    <IoPersonOutline />
                  </span>
                  <span>about</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item className="hover:ml-2 transition-all ease-linear duration-300">
              {({ active }) => (
                <Link
                  className="flex space-x-3 cursor-pointer"
                  onClick={(event) => handleClick(portfolioRef, event)}
                  to="/"
                >
                  <span className="mt-1">
                    <PiSquaresFourThin />
                  </span>
                  <span>Portfolio</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item className="hover:ml-2 transition-all ease-linear duration-300">
              {({ active }) => (
                <Link className="flex space-x-3">
                  <span className="mt-1">
                    <MdCastForEducation />
                  </span>
                  <span>Eduction</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item className="hover:ml-2 transition-all ease-linear duration-300">
              {({ active }) => (
                <Link
                  className="flex space-x-3 cursor-pointer " 
                  onClick={(event) => handleClick(GetInTouchRef, event)}
                  to="/"
                >
                  <span className="mt-1">
                    <LuPhone />
                  </span>
                  <span>Contact</span>
                </Link>
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
