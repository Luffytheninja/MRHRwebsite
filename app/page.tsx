import Hero from "./components/Hero";
import ImpactSnapshot from "./components/ImpactSnapshot";
import TheProblem from "./components/TheProblem";
import HowItWorks from "./components/HowItWorks";
import HumanStory from "./components/HumanStory";
import DonationSection from "./components/DonationSection";
import SocialProof from "./components/SocialProof";
import GetInvolved from "./components/GetInvolved";
import Insights from "./components/Insights";

export default function Home() {
  return (
    <main>
      {/* 1. Hero — Hope + Action */}
      <Hero />

      {/* 2. Impact Snapshot — Proof */}
      <ImpactSnapshot />

      {/* 3. The Problem — Tension */}
      <TheProblem />

      {/* 4. How It Works — Clarity */}
      <HowItWorks />

      {/* 5. Human Story — Emotion peak */}
      <HumanStory />

      {/* 6. Donation Section — Action */}
      <DonationSection />

      {/* 7. Social Proof — Reassurance */}
      <SocialProof />

      {/* 8. Get Involved — Secondary paths */}
      <GetInvolved />

      {/* 9. Insights — Authority */}
      <Insights />
    </main>
  );
}
