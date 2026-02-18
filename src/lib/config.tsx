import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Localhost Studio",
  description: "Designing and building digital products that ship.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Product Studio",
    "Web Development",
    "UI Design",
    "Next.js",
    "React",
  ],
  links: {
    email: "hello@localhoststudio.com",
    twitter: "https://twitter.com/localhoststudio",
    discord: "https://discord.gg/localhoststudio",
    github: "https://github.com/localhoststudio",
    instagram: "https://instagram.com/localhoststudio/",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Design + Engineering",
          description: "A senior product team focused on weekly delivery.",
          href: "#solution",
        },
        items: [
          {
            href: "#how-it-works",
            title: "Discovery Sprints",
            description: "Align roadmap, goals, and scope before building.",
          },
          {
            href: "#features",
            title: "UI Systems",
            description: "Design systems that scale across your product.",
          },
          {
            href: "#pricing",
            title: "Flexible Engagements",
            description: "Choose sprint, retainer, or full product ownership.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "SaaS Teams",
            href: "#solution",
            description: "Ship polished features without expanding headcount.",
          },
          {
            title: "Early-Stage Founders",
            href: "#solution",
            description: "Go from idea to launch-ready MVP in focused sprints.",
          },
          {
            title: "Enterprise Products",
            href: "#solution",
            description:
              "Modernize legacy interfaces and improve internal workflows.",
          },
          {
            title: "Ecommerce",
            href: "#solution",
            description: "Increase conversion through fast, high-trust journeys.",
          },
          {
            title: "Fintech",
            href: "#solution",
            description:
              "Build compliant, high-performance experiences customers trust.",
          },
          {
            title: "Internal Platforms",
            href: "#solution",
            description: "Create tooling teams actually enjoy using every day.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  pricing: [
    {
      name: "STARTER SPRINT",
      href: "#",
      price: "$3,200",
      period: "month",
      yearlyPrice: "$2,900",
      features: [
        "One focused product sprint",
        "UX and interface direction",
        "Weekly delivery check-ins",
        "Async communication channel",
        "Launch readiness checklist",
      ],
      description: "Best for validating a new idea quickly",
      buttonText: "Start a Project",
      isPopular: false,
    },
    {
      name: "GROWTH PARTNER",
      href: "#",
      price: "$7,400",
      period: "month",
      yearlyPrice: "$6,800",
      features: [
        "Ongoing design + engineering",
        "Feature strategy support",
        "Priority Slack support",
        "QA and performance reviews",
        "Biweekly planning sessions",
      ],
      description: "Ideal for teams shipping every month",
      buttonText: "Book Intro Call",
      isPopular: true,
    },
    {
      name: "STUDIO DEDICATED",
      href: "#",
      price: "$12,900",
      period: "month",
      yearlyPrice: "$11,900",
      features: [
        "Dedicated cross-functional pod",
        "Roadmap ownership",
        "Complex integrations",
        "Executive reporting",
        "Embedded product leadership",
      ],
      description: "For mature products with aggressive goals",
      buttonText: "Talk to Sales",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is Localhost Studio?",
      answer: (
        <span>
          Localhost Studio is a product design and development partner. We help
          teams plan, design, build, and launch modern web products.
        </span>
      ),
    },
    {
      question: "How do we get started?",
      answer: (
        <span>
          Start with a kickoff call and we will define scope, timeline, and a
          delivery cadence. Most projects begin with a one to two week
          discovery sprint.
        </span>
      ),
    },
    {
      question: "Do you only work with startups?",
      answer: (
        <span>
          No. We support early-stage startups, scale-ups, and enterprise teams
          that need reliable product execution.
        </span>
      ),
    },
    {
      question: "Can you work with our in-house team?",
      answer: (
        <span>
          Yes. We often collaborate with internal design, product, and
          engineering teams and can plug into your existing process.
        </span>
      ),
    },
    {
      question: "What support do you provide after launch?",
      answer: (
        <span>
          We provide post-launch support, iterative improvements, and optional
          monthly retainers to keep product quality high as you grow.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Services",
      links: [
        { href: "#solution", text: "Product Strategy", icon: null },
        { href: "#solution", text: "UI and UX Design", icon: null },
        { href: "#solution", text: "Full-Stack Development", icon: null },
        { href: "#solution", text: "Launch Support", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About", icon: null },
        { href: "#", text: "Case Studies", icon: null },
        { href: "/blog", text: "Blog", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Contact", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#faq", text: "FAQ", icon: null },
        { href: "#pricing", text: "Pricing", icon: null },
        { href: "#features", text: "Capabilities", icon: null },
        { href: "#", text: "Client Portal", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "",
          text: "YouTube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
