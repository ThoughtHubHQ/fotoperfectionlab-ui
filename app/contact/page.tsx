import { Metadata } from "next";
import Contact from "./Contact";
import { brandAssets } from "@/lib/asset";

export const metadata: Metadata = {
  title: `Contact Us - ${brandAssets.name}`,
  description: `Get in touch with us through our contact page at ${brandAssets.name}.`,
};

export default function ContactPage() {
  return (
    <div className="py-10">
      <Contact />
    </div>
  );
}
