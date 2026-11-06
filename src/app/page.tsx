import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyQubizon } from "@/components/home/WhyQubizon";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
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
      {/* Codecave-Inspired Hero with Vector Schematic Blueprint & Marquee */}
      <HeroSection />

      {/* Services Overview: Line-Separated Editorial Disciplines */}
      <ServicesOverview />

      {/* Why Choose Qubizon: Features & 4-Column Metric Stats */}
      <WhyQubizon />

      {/* Execution Process: 4-Step Workflow with Ghost Numbers */}
      <ProcessSection />

      {/* The Showcase: Featured Case Study & Project Rows */}
      <ShowcaseSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Closing Call to Action */}
      <ConversionSection />
    </>
  );
}
