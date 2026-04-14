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
    <nav className=" shadow">
      <div className="flex flex-wrap justify-center lg:justify-between 
      gap-5 items-center lg:py-5 py-4 container mx-auto">
        <div>
          <Image
            src={logo}
            alt="KeenKeeper"
            width={200}
            height={50}
          />
          
        </div>

       <div>
         <ul className="flex justify-between gap-8 items-center ">
          {navItems.map((item, index) => (
            // Client component
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
