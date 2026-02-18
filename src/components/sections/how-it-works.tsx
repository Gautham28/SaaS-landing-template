import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Product Discovery",
    content:
      "We align on goals, user needs, and business priorities, then translate those inputs into a practical delivery roadmap.",
    image: "/localhoststudiodark.svg",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Design and Build",
    content:
      "Our designers and engineers ship in weekly cycles with clear priorities, fast feedback loops, and visible progress.",
    image: "/localhoststudiodark.svg",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Launch and Iterate",
    content:
      "After release, we keep refining the product with performance improvements, UX polish, and new feature increments.",
    image: "/localhoststudiodark.svg",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      id="how-it-works"
      title="How it works"
      subtitle="A clear path from idea to launch"
    >
      <Features data={data} />
    </Section>
  );
}
