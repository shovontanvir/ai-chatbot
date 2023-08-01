import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full border-b border-aiBorder h-[3.51rem] items-center text-normalText">
      <div className="w-[15%] border-r border-aiBorder h-full flex items-center justify-center cursor-pointer hover:text-white hover:border-b-2 hover:border-b-[#FEA55F] transition-all duration-300">
        <h1>AI Bot</h1>
      </div>
      <div className="h-full flex items-center w-[75%]">
        <ul className="flex w-2/3 h-full justify-between">
          <li className="basis-1/4 border-r border-aiBorder h-full flex items-center justify-center cursor-pointer hover:text-white hover:border-b-2 hover:border-b-[#FEA55F] transition-all duration-300">
            <h1>BOT Home</h1>
          </li>
          <li className="basis-1/4 border-r border-aiBorder h-full flex items-center justify-center cursor-pointer hover:text-white hover:border-b-2 hover:border-b-[#FEA55F] transition-all duration-300">
            <h1>BOT Console</h1>
          </li>
          <li className="basis-1/4 border-r border-aiBorder h-full flex items-center justify-center cursor-pointer hover:text-white hover:border-b-2 hover:border-b-[#FEA55F] transition-all duration-300">
            <h1>BOT Jobs</h1>
          </li>
          <li className="basis-1/4 border-r border-aiBorder h-full flex items-center justify-center cursor-pointer hover:text-white hover:border-b-2 hover:border-b-[#FEA55F] transition-all duration-300">
            <h1>BOT Schedule</h1>
          </li>
        </ul>
      </div>
      <div className=" w-[10%] border-l border-aiBorder h-full flex justify-center items-center  cursor-pointer hover:text-white hover:border-b-2 hover:border-b-[#FEA55F] transition-all duration-300">
        <h1>_contact-me</h1>
      </div>
    </div>
  );
};

export default Navbar;
