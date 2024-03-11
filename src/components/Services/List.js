import Image from 'next/image';
import React from 'react';

const List = ({service}) => {
    return (
        <div data-aos="zoom-in">
           <div className=" flex items-center gap-3 my-3">
            <Image
            src="/star.png"
            width={30}
            height={30}
            alt="star"
            />
            <p className=" text-white text-xl font-extrabold ">{service}</p>
        </div> 
        </div>
        
    );
};

export default List;