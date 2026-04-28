import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights | MRH Collective",
  description: "Keep connected to what's happening. Read our latest updates, program reports, and publications from MRH Collective.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
