import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { WhyQubizon } from "@/components/home/WhyQubizon";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ConversionSection } from "@/components/home/ConversionSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Digital Marketing & Web Development in Kerala | Qubizon",
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
      {/* 1. Hero: WHITE (Vector Schematic Blueprint & Infinite Marquee Ticker) */}
      <HeroSection />

      {/* 2. About: BLACK (Left Image + Right Content Model matching Reference Image 3) */}
      <AboutSection />

      {/* 3. Services Overview: WHITE (Line-Separated Editorial Disciplines) */}
      <ServicesOverview />

      {/* 4. Showcase: BLACK (Clean 3-Column Project List matching Reference Image 1) */}
      <ShowcaseSection />

      {/* 5. Performance Benchmarks: WHITE (Metric Stats & Features matching Reference Image 2) */}
      <WhyQubizon />

      {/* 6. Execution Process: BLACK (4-Step Workflow with Ghost Calligraphy Numbers) */}
      <ProcessSection />

      {/* 7. Frequently Asked Questions: WHITE (Frosted Interactive Accordion Cards) */}
      <FaqSection />

      {/* 8. Closing Call to Action: BLACK (High-Contrast Radial Stage with Pill CTAs) */}
      <ConversionSection />
    </>
  );
}
