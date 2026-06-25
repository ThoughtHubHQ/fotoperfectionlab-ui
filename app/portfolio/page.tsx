import { Metadata } from "next";
import Portfolio from "./Portfolio";

export const metadata: Metadata = {
  title: "Portfolio - Foto Perfection Lab",
  description: "Explore our portfolio of photography work.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-15">
      <Portfolio />
    </div>
  );
}
