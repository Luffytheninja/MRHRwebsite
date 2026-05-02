import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | MRH Collective",
  description: "Every mother deserves a chance to thrive. Join us in our mission to reduce maternal mortality and ensure access to quality care across Nigeria.",
};

export default function JoinUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
