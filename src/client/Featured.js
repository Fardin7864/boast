import Image from "next/image";
import Marquee from "react-fast-marquee";

const Featured = () => {
  return (
    <div>
    <h6 className=" text-gray-800  text-xl font-bold my-3">Brands with us</h6>
        <Marquee>
      <Image 
      src={"/featured/image-17.png"}
      width={100}
      height={40}
      alt="featured"
      className=" mr-14"
      />
      <Image 
      src={"/featured/yahoo_finance_en-US_h_p_financev2_2.png"}
      width={100}
      height={40}
      alt="featured1"
       className=" mr-14"
      />
      <Image 
      src={"/featured/image-17.png"}
      width={100}
      height={40}
      alt="featured2"
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
      src={"/featured/yahoo_finance_en-US_h_p_financev2_2.png"}
      width={100}
      height={40}
      alt="featured4"
       className=" mr-14"
      />
    </Marquee>
    </div>

  );
};

export default Featured;
