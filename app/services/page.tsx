import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Foto Perfection Lab",
  description: "Discover the services we offer at Foto Perfection Lab.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#EEF2FF] bg-[url('/hero/heroBlur.png')] bg-no-repeat bg-right bg-cover">
      <h1>Services</h1>
    </div>
  );
}