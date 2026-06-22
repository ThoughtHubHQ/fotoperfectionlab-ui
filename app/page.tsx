import Navbar from "@/components/Navbar";
import Hero from "./(home)/_sections/Hero";

export default function Home() {
  return (
    <div className="bg-[linear-gradient(0deg,#F4F7FC_0%,#F4F7FC_100%)]">
      <Navbar />
      <Hero />
    </div>
  );
}