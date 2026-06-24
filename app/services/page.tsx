import { Metadata } from "next";
import Services from "./Services";

export const metadata: Metadata = {
  title: "Services - Foto Perfection Lab",
  description: "Discover the services we offer at Foto Perfection Lab.",
};

export default function ServicesPage() {
  return (
    <div>
     <Services/>
    </div>
  );
}