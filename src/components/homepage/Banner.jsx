import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div >
      <div className="flex flex-col items-center justify-center space-y-4 py-12 px-5">
        <h1 className="text-3xl lg:text-[40px] font-bold text-center text-slate-800">Friends to keep close in your life</h1>
        <p className="text-center text-slate-500 text-sm max-w-xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] hover:bg-[#18392e] shadow-sm border-none px-6 py-2 rounded-md text-white mt-4" >
          <FaPlus size={12} /> Add a Friend
        </button>
      </div>
    </div>
  );
};

export default Banner;
