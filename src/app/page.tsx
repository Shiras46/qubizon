import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyQubizon } from "@/components/home/WhyQubizon";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WorkSection } from "@/components/home/WorkSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ConversionSection } from "@/components/home/ConversionSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Digital Marketing & Web Development Company in Kerala | Qubizon",
  description:
    "Qubizon Digital Solutions helps businesses grow with website development, SEO, social media marketing and paid advertising in Kozhikode, Thrissur and across Kerala.",
  path: "/",
  keywords: [
    "Digital Marketing Company in Kerala",
    "Web Development Company in Kerala",
    "SEO Agency Kerala",
    "Digital Marketing Kozhikode",
    "Web Development Kozhikode",
    "SEO Company Thrissur",
    "Social Media Marketing Kerala",
    "Next.js Development Agency",
  ],
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Signature 3D Interactive Service Cube */}
      <HeroSection />

      {/* Services Overview: Five Disciplines */}
      <ServicesOverview />

      {/* Why Qubizon: The Unified Cube Model Advantage & Angled Tickers */}
      <WhyQubizon />

      {/* Execution Process: 4-Step Customer-Centric Workflow */}
      <ProcessSection />

      {/* Work & Credibility: Architectural Case Studies */}
      <WorkSection />

      {/* Frequently Asked Questions: 2-Column Rounded Accordion Cards */}
      <FaqSection />

      {/* Closing High-Conversion Call to Action */}
      <ConversionSection />
    </>
  );
}
