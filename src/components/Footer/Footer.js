import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center mt-8">
      <div className=" flex items-center gap-3">
        <Image
          src={"/logo.png"}
          width={65}
          height={65}
          alt="Logo"
          className=" w-10 md:w-16"
        />
        <h3 className=" text-2xl md:text-4xl lg:text-6xl text-black font-extrabold logo">
          BOAST
        </h3>
      </div>
      <div className=" flex flex-col items-center my-5">
        <p className=" text-justify w-1/2">It's simple! Once you join Boast's free membership, you can shop at any of our partner brands Then, share about your purchase on your social media channels, tagging the brand and get a cashback ranging from 10-100% depending open your social influencing power</p>
      </div>
      <div className=" w-full flex flex-col items-center">
        <p>© 2024 BOAST | All rights reserved | Made with ❤️</p>
      </div>
    </div>
  );
};

export default Footer;
