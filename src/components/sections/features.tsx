import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Design Systems",
    content: "Create consistent interfaces with reusable components and tokens.",
    image: "/localhoststudiodark.svg",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Technical Architecture",
    content: "Build maintainable foundations that support rapid feature growth.",
    image: "/localhoststudiodark.svg",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Performance Optimization",
    content: "Improve speed, accessibility, and reliability across your product.",
    image: "/localhoststudiodark.svg",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Launch Enablement",
    content: "Ship confidently with QA, analytics setup, and release checklists.",
    image: "/localhoststudiodark.svg",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      id="features"
      title="Capabilities"
      subtitle="What Localhost Studio delivers for your team"
    >
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
