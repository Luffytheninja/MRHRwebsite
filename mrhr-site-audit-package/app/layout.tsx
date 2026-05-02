import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingDonate from "./components/FloatingDonate";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "MRH Collective — Giving Life Should Never Mean Losing Yours",
  description:
    "MRH Collective is Nigeria's leading multidisciplinary research and advocacy organization dedicated to reducing maternal mortality through evidence, community action, and policy influence.",
  keywords: ["maternal health", "Nigeria NGO", "maternal mortality Lagos", "safe childbirth Nigeria", "MRH Collective", "reproductive health research Africa"],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "MRH Collective — Giving Life Should Never Mean Losing Yours",
    description:
      "Join the collective protecting the hearts of our communities. Every life saved is a legacy preserved.",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "https://mrhrcollective.org/wp-content/uploads/2025/01/MRH-Logo-White-1-1024x546.png",
        width: 1024,
        height: 546,
        alt: "MRH Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MRH Collective — Giving Life Should Never Mean Losing Yours",
    description: "Giving Life Should Never Mean Losing Yours.",
    images: ["https://mrhrcollective.org/wp-content/uploads/2025/01/MRH-Logo-White-1-1024x546.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingDonate />
      </body>
    </html>
  );
}
