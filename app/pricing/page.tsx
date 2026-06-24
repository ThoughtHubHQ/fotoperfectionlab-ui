import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Foto Perfection Lab",
  description: "View our pricing options and packages.",
};

export default function PricingPage() {
  return (
    <div className="bg-[#EEF2FF] bg-[url('/hero/heroBlur.png')] bg-no-repeat bg-right bg-cover">
      <h1>Pricing</h1>
    </div>
  );
}
