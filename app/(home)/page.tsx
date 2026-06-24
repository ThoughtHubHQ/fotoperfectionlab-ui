import Hero from "./_sections/Hero";
import CoreAdvantages from "./_sections/CoreAdvantage";
import AboutCard from "./_sections/AboutCard";
import WhyChooseUs from "./_sections/WhyChooseUs";
import FoundersAndMission from "./_sections/FoundersAndMission";
import MeetTheTeam from "./_sections/MeetTheTeams";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreAdvantages />
      <AboutCard />
      <WhyChooseUs />
      <FoundersAndMission/>
      <MeetTheTeam/>
    </div>
  );
}
