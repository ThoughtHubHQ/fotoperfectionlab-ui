import Hero from "./(home)/_sections/Hero";
import CoreAdvantages from "./(home)/_sections/CoreAdvantage";

export default function Home() {
  return (
    <div className="bg-[#EEF2FF] bg-[url('/hero/heroBlur.png')] bg-no-repeat bg-right bg-cover">
      <Hero />
      <CoreAdvantages />
    </div>
  );
}