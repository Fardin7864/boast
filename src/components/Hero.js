import Featured from "@/client/Featured";
import Image from "next/image";
import React from "react";


const Hero = () => {

  return (
    <div className=" flex md:flex-row flex-col items-center justify-between lg:pr-12 my-10">
      {/* Hero heading */}
      <div data-aos="fade-right" className=" text-white flex flex-col items-center lg:items-start mb-5 md:mb-0">
        <h2 className=" text-4xl md:text-5xl font-bold text-center lg:text-start">Upto 100%<span className=" color-text leading-8 ">Cashback</span> </h2>
        <h4 className=" text-3xl lg:text-5xl font-bold text-gray-100 md:my-2">on your Shoutout</h4>
        <p className=" text-xl font-semibold text-gray-3 00"> Encash your Influence</p>
        <button className=" text-sm bg-white mt-5 text-black rounded-full px-5 py-2 font-bold button-primary active:opacity-40">JOIN BOAST</button>

      </div>
      {/* hero image */}
      <div data-aos="fade-left">
        <Image
        src={"/heroimage.png"}
        width={500}
        height={500}
        alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
