import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" pt-5">
      <div className=" flex justify-between items-center">
        {/* Logo */}
        <div className=" flex items-center gap-3">
          <Image src={"/logo.png"} width={65} height={65} alt="Logo" />
          <h3 className=" text-5xl text-white font-extrabold logo">BOAST</h3>
        </div>
        {/* button */}
        <button className=" text-xl bg-white rounded-full px-5 py-3 font-bold button">get boasted</button>
      </div>
    </div>
  );
};

export default Navbar;
