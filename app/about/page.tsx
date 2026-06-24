import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Foto Perfection Lab",
  description: "Learn more about us and our mission at Foto Perfection Lab.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#EEF2FF] bg-[url('/hero/heroBlur.png')] bg-no-repeat bg-right bg-cover">
      <h1>About Us</h1>
    </div>
  );
}
