import { Metadata } from "next";
import Services from "./Services";
import { brandAssets } from "@/lib/asset";

export const metadata: Metadata = {
  title: `Services - ${brandAssets.name}`,
  description: `Discover the services we offer at ${brandAssets.name}.`,
};

export default function ServicesPage() {
  return (
    <div>
     <Services/>
    </div>
  );
}