import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "MRHR Collective — Giving Life Should Never Mean Losing Yours",
  description:
    "We are a collective of clinicians, researchers, and neighbors dedicated to ensuring every mother in Nigeria survives and thrives. Discover how we are breaking the silence and building a system where every birth is a celebration of life.",
  keywords: ["maternal health", "Nigeria NGO", "maternal mortality Lagos", "safe childbirth Nigeria", "MRHR Collective", "reproductive health rights Africa"],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "MRHR Collective — Giving Life Should Never Mean Losing Yours",
    description:
      "Join the collective protecting the hearts of our communities. Every life saved is a legacy preserved.",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "https://mrhrcollective.org/wp-content/uploads/2025/01/MRH-Logo-White-1-1024x546.png",
        width: 1024,
        height: 546,
        alt: "MRHR Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MRHR Collective — Giving Life Should Never Mean Losing Yours",
    description: "Giving Life Should Never Mean Losing Yours.",
    images: ["https://mrhrcollective.org/wp-content/uploads/2025/01/MRH-Logo-White-1-1024x546.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
