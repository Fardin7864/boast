import Featured from "@/client/Featured";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className=" bg-[#000000] pb-10">
      <div className=" max-w-7xl mx-auto px-2 md:px-5">
        <Navbar />
        <Hero/>
        <Featured/>
      </div>
      </div>
      <div className=" bg-[#fd7f3e] md:py-20 pt-20 pb-4">
      <div className=" max-w-7xl mx-auto px-2 md:px-5">
        <Message shortMessage="Are you an influencer?" fullMessage="Are you an influencer looking to monetize your social media presence? Boast is here to revolutionize the way you engage with brands and earn rewards for your influence." image="/messagephone.png"/>
      </div>
      </div>
      {/* message 2 */}
      <div className=" bg-[#a1df70] md:py-20 pt-20 pb-4">
      <div className=" max-w-7xl mx-auto px-2 md:px-5">
        <Message shortMessage="Free Boast Prepaid card" fullMessage="Enjoy free Boast Prepaid card powered by Dhaka Bank and master card." image="/2ndmessage.png"/>
      </div>
      </div>
      {/* message 3 */}
      <div className=" bg-[#81b8fd] md:py-20 pt-20 pb-4">
      <div className=" max-w-7xl mx-auto px-2 md:px-5">
        <Message shortMessage="How Does it Work?" fullMessage="It's simple! Once you join Boast's free membership, you can shop at any of our partner brands Then, share about your purchase on your social media channels, tagging the brand and get a cashback ranging from 10-100% depending open your social influencing power." image="/3rdmessage.png"/>
      </div>
      </div>
    </main>
  );
}
