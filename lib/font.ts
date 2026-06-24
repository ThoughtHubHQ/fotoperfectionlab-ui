import { Dancing_Script, Inter } from "next/font/google";
import localFont from "next/font/local";

export const roxboroughCFHeavy = localFont({
  src: "../public/font/Roxborough-CF_Regular.otf",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
});

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});
