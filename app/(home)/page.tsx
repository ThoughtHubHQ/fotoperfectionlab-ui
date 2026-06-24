import Hero from "./_sections/Hero";
import CoreAdvantages from "./_sections/CoreAdvantage";
import AboutCard from "./_sections/AboutCard";
import WhyChooseUs from "./_sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[#EEF2FF] bg-[url('/hero/heroBlur.png')] bg-no-repeat bg-right bg-cover">
      <Hero />
      <CoreAdvantages />
      <AboutCard />
      <WhyChooseUs />
    </div>
  );
}
