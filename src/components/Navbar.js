import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <nav>
      <div className="w-full flex justify-evenly items-center p-4 border-b-2 border-b-pink-600">
        <div>
          <Image width={96} height={72} alt="logo" src="./logo/Pixio.svg" />
        </div>
        <div>
          <ul className="flex space-x-4 items-center font-medium text-gray-600 ">
            <li className="hover:cursor-pointer px-2 hover:text-pink-600 ">HOME</li>
            <li className="flex px-2 items-center hover:cursor-pointer hover:text-pink-600">
               POSTS
              <FaAngleDown className="h-4 w-4 hover:cursor-pointer hover:text-pink-600" />
            </li>
            <li className="flex px-2 hover:cursor-pointer items-center hover:text-pink-600">
              PAGES
              <FaAngleDown className="h-4 w-4 hover:rotate-180 hover:transform hover:delay-800" />
            </li>
            <li className="flex items-center hover:cursor-pointer hover:text-pink-600">
              CONTACT US
              <FaAngleDown className="h-4 w-4" />
            </li>
            <li className="px-2 hover:cursor-pointer" >ABOUT US</li>
          </ul>
        </div>
        <div>
          <nav>
            <span className="flex hover:cursor-pointer items-center  justify-end">
            <Link href="/login" className="px-5 py-2 rounded-md text-white0" >login</Link>
              <Link href="/login" className="px-5 py-2 rounded-md text-white bg-pink-600" >Register</Link>
            
              <IoMenu className="h-7 w-8 m-3 hover:cursor-pointer " />
            </span>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
