import Image from 'next/image';
import React from 'react';

const Message = ({shortMessage, fullMessage, image}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 items-center'>
            {/* Catch Message */}
         <div>
          <h2 className=' text-6xl font-bold text-white'>{shortMessage}</h2>
         </div>
         {/* picture */}
         <div>
            <Image
            src={image}
            width={500}
            height={600}
            alt='mobile'
            />
         </div>
         {/* full message */}
         <div className=' h-full flex flex-col justify-end'>
            <p className=' text-white text-2xl font-bold text-justify mb-6 leading-9'>{fullMessage}</p>
            <Image
            src={"/sendearn.png"}
            width={600}
            height={100}
            alt='earn'
            />
         </div>
        </div>
    );
};

export default Message;