"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

const WishForm = () => {
  const [email, setEmail] = useState(""); // Initialize state for email
  const [formData, setFormData] = useState({
    name: "",
    insta: "",
    socialId: "",
    followers: "",
    mobile: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to a server
    console.log(formData);
  };

  return (
    <div className="py-20 flex flex-col items-center justify-center gap-8">
      <h4
        data-aos="fade-right"
        className="text-3xl md:text-6xl font-bold text-white"
      >
        Add your Mail to wishlist
      </h4>
      <div className="text-white text-xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("example@mail.com")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Welcome To Boast community.")
              .start();
          }}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email} // Bind the value of the input field to the email state
          onChange={(e) => setEmail(e.target.value)} // Call handleEmailChange when the input value changes
          placeholder="Enter your email"
          className="px-3 py-[10px] text-xl rounded-lg rounded-r-none outline-none"
        />

        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          type="submit"
          className="button-primary px-5 py-3 rounded-xl rounded-l-none font-bold"
        >
          Join
        </button>
      </form>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <h3 className="font-bold text-3xl text-center mb-5 logo">Join with BOAST</h3>
          {/* Second Form */}
          <form onSubmit={handleSubmit} className=" grid md:grid-cols-2 gap-5">
            <div className=" flex flex-col gap-2">
              <label htmlFor="email" className=" text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                className="px-3 py-[9.5px] text-base rounded-lg outline-none shadow-lg border"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="name" className=" text-xl font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="px-3 py-[9.5px] text-base rounded-lg outline-none shadow-lg border"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="insta" className=" text-xl font-bold">
                Instagram
              </label>
              <input
                type="text"
                name="insta"
                value={formData.insta}
                onChange={handleInputChange}
                placeholder="Instagram profile Link"
                className="px-3 py-[9.5px] text-base rounded-lg outline-none shadow-lg border"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="socialId" className=" text-xl font-bold">
                Another Social Id
              </label>
              <input
                type="text"
                name="socialId"
                value={formData.socialId}
                onChange={handleInputChange}
                placeholder="Enter your Another Social ID"
                className="px-3 py-[9.5px] text-base rounded-lg outline-none shadow-lg border"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="followers" className=" text-xl font-bold">
                Followers
              </label>
              <input
                type="number"
                name="followers"
                value={formData.followers}
                onChange={handleInputChange}
                placeholder="Enter your Total Followers"
                className="px-3 py-[9.5px] text-base rounded-lg outline-none shadow-lg border"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="mobile" className=" text-xl font-bold">
                Mobile
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter your Mobile Number"
                className="px-3 py-[9.5px] text-base rounded-lg outline-none shadow-lg border"
              />
            </div>
          <div className="modal-action col-span-2">
            <form method="dialog" className=" w-full">
            <div className=" w-full flex justify-between">
              <button
              type="submit"
              className="button-primary px-5 py-3 rounded-xl font-bold"
            >
              Submit
            </button>
            <button className="btn">Close</button>  
            </div>
            
            </form>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default WishForm;
