'use client'
import logo from '@/assets/img/KeenKeeper.png'
import Image from "next/image";
import MyLink from "./MyLink";

import { IoMdHome, IoMdTime } from 'react-icons/io';
import { BsGraphUp } from 'react-icons/bs';

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: <IoMdHome />,
    },
    // {
    //   path: "/apps",
    //   text: "Apps",
    // },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <IoMdTime />
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <BsGraphUp />
    },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="flex flex-col md:flex-row items-center justify-between px-5 py-4 lg:py-5 container mx-auto gap-4">
        <div className="flex justify-center md:justify-start">
          <Image
            src={logo}
            alt="KeenKeeper"
            width={200}
            height={50}
            className="w-40 md:w-[200px]"
          />
        </div>

        <div className="flex justify-center md:justify-end">
          <ul className="flex gap-4 sm:gap-6 md:gap-8 items-center">
            {navItems.map((item, index) => (
              <MyLink key={index} href={item.path}>
                {item.icon} {item.text}
              </MyLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
