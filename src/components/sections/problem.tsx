import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap } from "lucide-react";

const problems = [
  {
    title: "Unclear Product Direction",
    description:
      "Teams juggle conflicting priorities, making it hard to define what to build first and why it matters.",
    icon: Brain,
  },
  {
    title: "Slow Delivery Cycles",
    description:
      "Without focused execution, roadmap items drag across quarters and momentum drops across the organization.",
    icon: Zap,
  },
  {
    title: "Inconsistent User Experience",
    description:
      "Fragmented interfaces and technical debt create friction for users and increase maintenance cost for teams.",
    icon: Shield,
  },
];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Shipping a high-quality product with a lean team is hard."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
