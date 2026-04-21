import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MRHR Collective — Giving Life Should Never Mean Losing Yours",
  description:
    "We are a collective of clinicians, researchers, and neighbors dedicated to ensuring every mother in Nigeria survives and thrives. Discover how we are breaking the silence and building a system where every birth is a celebration of life.",
  keywords: ["maternal health", "Nigeria NGO", "maternal mortality Lagos", "safe childbirth Nigeria", "MRHR Collective", "reproductive health rights Africa"],
  openGraph: {
    title: "MRHR Collective — Giving Life Should Never Mean Losing Yours",
    description:
      "Join the collective protecting the hearts of our communities. Every life saved is a legacy preserved.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="https://mrhrcollective.org/wp-content/uploads/2025/01/MRH-Logo-White-1-1024x546.png" />
        <link rel="apple-touch-icon" href="https://mrhrcollective.org/wp-content/uploads/2025/01/MRH-Logo-White-1-1024x546.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
