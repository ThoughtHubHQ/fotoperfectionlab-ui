import { Metadata } from "next";
import Portfolio from "./Portfolio";
import { brandAssets } from "@/lib/asset";

export const metadata: Metadata = {
  title: `Portfolio - ${brandAssets.name}`,
  description: `Explore our portfolio of photography work at ${brandAssets.name}.`,
};

export default function PortfolioPage() {
  return (
    <div className="pt-15">
      <Portfolio />
    </div>
  );
}
