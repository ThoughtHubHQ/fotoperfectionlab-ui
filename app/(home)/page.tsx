import Hero from "./_sections/Hero";
import CoreAdvantages from "./_sections/CoreAdvantage";
import AboutCard from "./_sections/AboutCard";
import WhyChooseUs from "./_sections/WhyChooseUs";
import FoundersAndMission from "./_sections/FoundersAndMission";
import MeetTheTeam from "./_sections/MeetTheTeams";
import Contact from "../contact/Contact";
import FAQ from "./_sections/FAQ";
import HomeServices from "./_sections/HomeServices";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreAdvantages />
      <AboutCard />
      <WhyChooseUs />
      <FoundersAndMission/>
      <MeetTheTeam/>
      <HomeServices/>
      <FAQ />
      <Contact />
    </div>
  );
}
