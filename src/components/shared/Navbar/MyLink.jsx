import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children, icon }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className=
      {`flex items-center 
        gap-2 font-semibold ${pathname === href ?
         "bg-green-950 text-white px-8 py-1 rounded-md" : ""}`}
    >
      {icon}
      {children}
    </Link>
  );
};

export default MyLink;
