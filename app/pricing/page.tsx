import { Metadata } from "next";
import Pricing from "./Pricing";

export const metadata: Metadata = {
  title: "Pricing - Foto Perfection Lab",
  description: "View our pricing options and packages.",
};

export default function PricingPage() {
  return (
    <div>
      <Pricing />
    </div>
  );
}
