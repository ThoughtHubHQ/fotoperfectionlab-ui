import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/font";
import { brandAssets } from "@/lib/asset";

export const metadata: Metadata = {
  metadataBase: new URL(brandAssets.mainUrl),
  title: `${brandAssets.name}`,
  description: brandAssets.description,
  openGraph: {
    title: brandAssets.name,
    description: brandAssets.description,
    type: "website",
    url: brandAssets.mainUrl,
    siteName: brandAssets.name,
    images: [
      {
        url: brandAssets.SocialMediaPreview,
        width: 1200,
        height: 630,
        alt: `${brandAssets.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brandAssets.name,
    description: brandAssets.description,
    images: [brandAssets.SocialMediaPreview],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth`}>
      <body className={`${inter.className}`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
