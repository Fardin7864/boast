import Image from "next/image";
import List from "./List";

const Services = () => {
  return (
    <div className=" flex justify-between items-center md:flex-row flex-col">
      <div className=" ">
        <h6 className=" text-4xl font-extrabold gap-5">What we provide? </h6>
        <p className="pr-5 my-3 text-gray-800">
          Eligibility section: 1000 followers on any social media platform. If
          you have this you can apply for our Membership. But the more followers
          the better you encash.
        </p>
        {/* list */}
        <List service="Free Membership card."/>
        <List service="You can shop at any of our partner brands ."/>
        <List service="Cashback ranging from 10-100% depending open your social influencing power."/>
        <List service="Enjoy free Boast Prepaid card powered by Dhaka Bank and master card."/>
        <List service="Earn rewards for your influence."/>

      </div>
      <div data-aos="zoom-in" className=" w-4/6">
      <Image src="/groupMobile.png" width={600} height={500} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Services;
