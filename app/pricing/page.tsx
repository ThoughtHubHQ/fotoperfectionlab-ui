import { Metadata } from "next";
import Pricing from "./Pricing";
import { brandAssets } from "@/lib/asset";

export const metadata: Metadata = {
  title: `Pricing - ${brandAssets.name}`,
  description: `View our pricing options and packages at ${brandAssets.name}.`,
};

export default function PricingPage() {
  return (
    <div>
      <Pricing />
    </div>
  );
}
