import { Metadata } from "next";
import MeetTheTeam from "../(home)/_sections/MeetTheTeams";
import FoundersAndMission from "../(home)/_sections/FoundersAndMission";
import WhyChooseUs from "../(home)/_sections/WhyChooseUs";
import AboutCard from "../(home)/_sections/AboutCard";

export const metadata: Metadata = {
  title: "About Us - Foto Perfection Lab",
  description: "Learn more about us and our mission at Foto Perfection Lab.",
};

export default function AboutPage() {
  return (
    <div className="pt-15 lg:pt-25">
      <AboutCard />
      <WhyChooseUs />
      <FoundersAndMission />
      <MeetTheTeam />
    </div>
  );
}
