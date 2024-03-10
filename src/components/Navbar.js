import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" pt-5">
      <div className=" flex justify-between items-center">
        {/* Logo */}
        <div className=" flex items-center gap-3">
          <Image src={"/logo.png"} width={65} height={65} alt="Logo" className=" w-10 md:w-16" />
          <h3 className=" text-2xl md:text-4xl lg:text-6xl text-black font-extrabold logo">BOAST</h3>
        </div>
        {/* button */}
        <button className=" text-sm md:text-xl text-gray-600 rounded-full px-4 md:px-5 py-2 md:py-3 font-bold button active:opacity-40">get boasted</button>
      </div>
    </div>
  );
};

export default Navbar;
