import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Foto Perfection Lab",
  description: "Explore our portfolio of photography work.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-[#EEF2FF] bg-[url('/hero/heroBlur.png')] bg-no-repeat bg-right bg-cover">
      <h1>Portfolio</h1>
    </div>
  );
}
