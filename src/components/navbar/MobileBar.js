import React from "react";
import { Menu } from "@headlessui/react";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";

function MobileBar() {
  return (
    <div className="bg-[#4A63E7] text-white w-11/12 mx-auto my-5 py-3 px-7 rounded-2xl">
      <div>
        <Menu>
          <Menu.Button>
            <FaBarsStaggered />
          </Menu.Button>
          <Menu.Items className="absolute bg-[#4A63E7] flex flex-col space-y-2 w-11/12 mt-4 left-5 rounded-2xl py-3 px-7 z-10">
            <Menu.Item>
              {({ active }) => (
                <a className="flex space-x-3" href="#">
                  <span className="mt-1">
                    <AiOutlineHome />
                  </span>
                  <span>Home</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className="flex space-x-3" href="#">
                  <span className="mt-1">
                    <AiOutlineHome />
                  </span>
                  <span>Home</span>
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}

export default MobileBar;
