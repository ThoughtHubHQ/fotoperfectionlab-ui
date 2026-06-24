import { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact Us - Foto Perfection Lab",
  description: "Get in touch with us through our contact page.",
};

export default function ContactPage() {
  return (
    <div className="py-10">
      <Contact />
    </div>
  );
}
