import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
function Navbar() {
  return (
    <nav>
      <div className="w-full flex justify-between items-center p-4">
        <div>
          <Image width={96} height={72} alt="logo" src="./logo/Pixio.svg" />
        </div>
        <div>
          <ul className="flex space-x-4 items-center font-medium">
            <li className="hover:cursor-pointer">POSTS</li>
            <li className="flex items-center hover:cursor-pointer">
               PAGES
              <FaAngleDown className="h-4 w-4 hover:cursor-pointer" />
            </li>
            <li className="flex hover:cursor-pointer items-center">
              SHOP
              <FaAngleDown className="h-4 w-4 hover:rotate-180 hover:transform hover:delay-800" />
            </li>
            <li className="hover:cursor-pointer" >ABOUT US</li>
            <li className="flex items-center hover:cursor-pointer ">
              CONTACT US
              <FaAngleDown className="h-4 w-4" />
            </li>
          </ul>
        </div>
        <div>
          <nav>
            <span className="flex hover:cursor-pointer justify-end">
              <IoSearch className="h-7 w-8 m-3 hover:cursor-pointer" />
              <FaRegHeart className="h-6 w-8 m-3 hover:cursor-pointer " />
              <FaCartPlus className="h-6 w-8 m-3 hover:cursor-pointer " />
              <IoMenu className="h-6 w-8 m-3 hover:cursor-pointer " />
            </span>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
