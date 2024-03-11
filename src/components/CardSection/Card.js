"use client"
import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cards from '../Cards';

const Card = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])


    return (
        <div data-aos="zoom-in" className=' flex flex-col items-center'>
                <Image
                src={"/cards.png"}
                width={900}
                height={500}
                alt="Hero Image"
                data-aos="fade-down"
                />
                <h3 data-aos="fade-down" className='logo text text-4xl lg:text-6xl font-bold'>Tap into your personality with BOAST</h3>
                <h6 data-aos="fade-down" style={{fontWeight: "bolder"}} className=' text-5xl mt-36 mb-16'>You have 100 Followers?</h6>

                <Cards content="/mistry.png" image="/card1.png"/>
                <div className=' my-24'>
                    <Cards content="/hipster.png" image="/card2.png"/>
                </div>
                <Cards content="/Boujee.png" image="/card3.png"/>
        </div>
    );
};

export default Card;