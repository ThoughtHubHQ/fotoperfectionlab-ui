import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/font";

export const metadata: Metadata = {
  title:
    "FotoPerfection Lab - Your Ultimate Destination for Photography Excellence",
  description: "The Best Photo Editing Service all over the WORLD",
  openGraph: {
    title:
    "FotoPerfection Lab - Your Ultimate Destination for Photography Excellence",
    description: "The Best Photo Editing Service all over the WORLD",
    type: "website",
    url: "https://fotoperfectionlab.com",
    siteName: "FotoPerfectionLab",
    images: [
      {
        url: "/socialMedia.jpeg",
        width: 1200,
        height: 630,
        alt: "FotoPerfection Lab – The Best Photo Editing Service all over the WORLD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FotoPerfection Lab - Your Ultimate Destination for Photography Excellence",
    description: "The Best Photo Editing Service all over the WORLD",
    images: ["/socialMedia.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} font-sans scroll-smooth`}
    >
      <body className="font-sans antialiased">
        <main className="flex flex-col grow">{children}</main>
      </body>
    </html>
  );
}
