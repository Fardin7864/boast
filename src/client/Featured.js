import Image from "next/image";
import Marquee from "react-fast-marquee";

const Featured = () => {
  return (
    <>
    <h6 className=" text-white text-xl font-bold my-3">Featured By</h6>
        <Marquee>
      <Image 
      src={"/featured/c02ede95b40bd516dabe7102eaa27d51-logo-white.svg"}
      width={100}
      height={40}
      alt="featured"
      className=" mr-14"
      />
      <Image 
      src={"/featured/Group (1).png"}
      width={100}
      height={40}
      alt="featured1"
       className=" mr-14"
      />
      <Image 
      src={"/featured/cropped-black-background-variation-2-3.png"}
      width={100}
      height={40}
      alt="featured2"
       className=" mr-14"
      />
      <Image 
      src={"/featured/fortune-logo-white-1.png"}
      width={100}
      height={40}
      alt="featured3"
       className=" mr-14"
      />
      <Image 
      src={"/featured/image-17.png"}
      width={100}
      height={40}
      alt="featured4"
       className=" mr-14"
      />
      <Image 
      src={"/featured/yahoo_finance_en-US_h_p_financev2_2.png"}
      width={100}
      height={40}
      alt="featured3"
       className=" mr-14"
      />
      <Image 
      src={"/featured/yourstory-logo-white.png"}
      width={100}
      height={40}
      alt="featured4"
       className=" mr-14"
      />
      <Image 
      src={"/featured/image-10-2.png"}
      width={100}
      height={40}
      alt="featured4"
       className=" mr-14"
      />
      <Image 
      src={"/featured/image-17.png"}
      width={100}
      height={40}
      alt="featured4"
       className=" mr-14"
      />
      <Image 
      src={"/featured/image-8-1.png"}
      width={100}
      height={40}
      alt="featured4"
       className=" mr-14"
      />
    </Marquee>
    </>

  );
};

export default Featured;
