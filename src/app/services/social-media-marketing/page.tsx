import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageProps } from "@/components/services/ServicePageTemplate";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Social Media Marketing & Brand Distribution Services",
  description:
    "Strategic social media marketing, executive thought leadership, and multi-channel brand storytelling built for business credibility and commercial growth.",
  path: "/services/social-media-marketing",
});

const SOCIAL_MEDIA_DATA: ServicePageProps = {
  id: "social-media-marketing",
  disciplineNumber: "Core Discipline 03",
  title: "Social Media Marketing",
  slug: "social-media-marketing",
  heroHeadline: "Strategic Multi-Channel Social Growth & Brand Authority",
  heroSummary:
    "We build and maintain an authoritative social presence that elevates your brand reputation and nurtures buyer relationships. No generic fluff or vanity follower schemes — just disciplined distribution that drives commercial credibility.",
  primaryCtaText: "Plan Your Social Strategy",
  problemHeading: "Why Most Corporate Social Media Fails to Generate Business",
  problemSubheading:
    "Too many companies post sporadic, generic updates that look like template filler, alienating sophisticated executive decision-makers.",
  clientChallenges: [
    "Sporadic, inconsistent publishing schedules that trigger social platform algorithmic penalties and erode audience momentum.",
    "Generic, cookie-cutter graphics and superficial copy that damage business credibility rather than building genuine authority.",
    "Chasing vanity follower counts and irrelevant engagement rather than reaching actual commercial prospects and partners.",
    "A total disconnect between social posts, website architecture, and core sales initiatives.",
  ],
  qubizonSolution:
    "Qubizon approaches social media as an essential brand distribution channel. We synchronize editorial themes with your product releases, client case studies, and search content to create a cohesive market footprint.",
  solutionHighlights: [
    "A disciplined editorial schedule tailored to the specific habits of your business decision-makers.",
    "High-contrast, polished visual creative matching your company's official design system.",
    "Active community management, discussion participation, and strategic audience development.",
    "Direct funneling of engaged social traffic into high-converting website landing pages.",
  ],
  capabilitiesHeading: "Full-Spectrum Social Media Capabilities",
  capabilities: [
    {
      title: "Channel Strategy & Editorial Calendars",
      description: "Developing platform-specific publishing roadmaps mapped directly to your quarterly sales goals and service launches.",
      deliverables: ["Platform Opportunity Audits (LinkedIn, X, Meta)", "Monthly Content Calendars", "Posting Time & Cadence Optimization"],
    },
    {
      title: "Brand Storytelling & Creative Production",
      description: "Crafting visually striking carousels, infographics, and technical summaries that communicate complex capabilities clearly.",
      deliverables: ["Custom Branded Graphic Templates", "Data Visualization & Framework Graphics", "Video Snippet & Motion Cutdowns"],
    },
    {
      title: "Executive Thought Leadership",
      description: "Positioning your founders and leadership team as recognized subject-matter authorities within your vertical.",
      deliverables: ["Ghostwriting for Executive Profiles", "Industry Analysis & Perspective Briefs", "Keynote & Event Content Repurposing"],
    },
    {
      title: "Community Engagement & Listening",
      description: "Actively monitoring industry conversations, engaging with key accounts, and responding professionally to brand inquiries.",
      deliverables: ["Daily Mention & Tag Monitoring", "Target Account Relationship Nurturing", "Direct Message Lead Routing"],
    },
  ],
  methodologyHeading: "Our Disciplined Publishing Framework",
  methodologySteps: [
    {
      step: "01",
      title: "Audience & Tone Definition",
      description: "We define your brand voice, identify primary stakeholder personas, and establish non-negotiable brand guidelines.",
    },
    {
      step: "02",
      title: "Content Sprint & Approval",
      description: "We produce monthly batches of high-polish creative and copy for review, eliminating last-minute scramble.",
    },
    {
      step: "03",
      title: "Synchronized Distribution",
      description: "We publish across target channels using platform-native formatting, tagging relevant contributors and industry topics.",
    },
    {
      step: "04",
      title: "Analysis & Tuning",
      description: "We evaluate engagement rates, referral traffic to the website, and inbound inquiries to refine future content sprints.",
    },
  ],
  outcomesHeading: "Real Commercial Value (Without Vanity Metrics)",
  outcomes: [
    {
      title: "Defensible Brand Authority",
      description: "When potential clients research your company, they discover an active, polished, and credible organization.",
    },
    {
      title: "Executive Relationship Pipeline",
      description: "Consistent, intelligent commentary opens direct communication doors with senior industry decision-makers.",
    },
    {
      title: "Amplified Content Reach",
      description: "Your technical case studies, research articles, and service pages receive consistent organic distribution.",
    },
    {
      title: "Zero In-House Resource Drain",
      description: "Your internal team stays focused on core operations while our strategists manage daily publishing consistency.",
    },
  ],
  cubeConnectionHeading: "How Social Connects to the Qubizon Cube",
  cubeConnectionSummary:
    "Social media is the distribution megaphone for the Qubizon Cube. It directly connects with our other disciplines:",
  disciplineConnections: [
    {
      discipline: "Content Marketing",
      relationship: "In-depth blog articles and research papers are broken down into digestible social carousels and thought leadership posts.",
      href: "/services/content-marketing",
    },
    {
      discipline: "Website Development",
      relationship: "Social links route visitors to fast, mobile-optimized landing pages with clear conversion pathways.",
      href: "/services/web-development",
    },
    {
      discipline: "Paid Advertising",
      relationship: "Organic posts with the highest engagement are identified to guide paid social campaign creative and targeting.",
      href: "/services/paid-advertising",
    },
  ],
  faqs: [
    {
      question: "Which social media platforms does Qubizon manage?",
      answer: "We focus on the channels where your actual customers spend their professional time. For most B2B and technical organizations, LinkedIn and X (Twitter) form the core, supplemented by YouTube, Instagram, or Facebook where audience demographics warrant.",
    },
    {
      question: "How do you capture our brand voice accurately?",
      answer: "During onboarding, we review your past publications, interview your leadership, and construct a detailed Brand Voice Guide documenting approved terminology, tone boundaries, and subject-matter priorities.",
    },
    {
      question: "Does our team need to review every post before it goes live?",
      answer: "Yes. We operate on a monthly sprint model where all graphics, captions, and links are delivered in advance for your team's review and sign-off through a shared calendar.",
    },
    {
      question: "How do you measure social media marketing success?",
      answer: "We track meaningful business telemetry: profile visit trends, engagement depth from verified target companies, inbound direct messages, and referral traffic to high-intent website service pages.",
    },
  ],
  ctaHeadline: "Elevate Your Company's Social Brand Footprint",
  ctaSummary:
    "Schedule a consultation to audit your current social channels and discover how disciplined multi-channel storytelling can accelerate your commercial growth.",
  siblingServices: [
    {
      title: "Website Development",
      href: "/services/web-development",
      description: "Fast, accessible web applications engineered with Next.js.",
    },
    {
      title: "Search Engine Optimization",
      href: "/services/seo",
      description: "Technical crawl audits, schema modeling, and topical authority.",
    },
    {
      title: "Paid Advertising",
      href: "/services/paid-advertising",
      description: "High-intent PPC and conversion-optimized ad campaigns.",
    },
    {
      title: "Content Marketing",
      href: "/services/content-marketing",
      description: "Authoritative editorial and technical copywriting that converts.",
    },
  ],
};

export default function SocialMediaServicePage() {
  return <ServicePageTemplate {...SOCIAL_MEDIA_DATA} />;
}
