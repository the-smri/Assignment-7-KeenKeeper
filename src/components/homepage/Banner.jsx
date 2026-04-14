import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div >
      <div className="flex flex-col items-center justify-center space-y-5 py-10 px-5">
        <h1 className="text-3xl lg:text-5xl font-bold text-center   ">Friends to keep close in your life</h1>
        <p className="text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] hover:bg-[#1a382e] border-none px-5 py-2 rounded-lg text-white" >
          <FaPlus /> Add a Friend
        </button>
      </div>
    </div>
  );
};

export default Banner;
