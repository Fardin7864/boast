import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" bg-[#000000] h-[2000px]">
      <div className=" max-w-7xl mx-auto px-2 md:px-5">
        <Navbar />
        <Hero/>
      </div>
    </main>
  );
}
