"use client";

import Marquee from "@/components/magicui/marquee";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      " border border-neutral-200 bg-white",
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO at Northline",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        Localhost Studio turned our rough roadmap into an execution plan that
        actually shipped.
        <Highlight>We launched our v2 dashboard in seven weeks.</Highlight>
      </p>
    ),
  },
  {
    name: "Samantha Lee",
    role: "Marketing Director at Brightwell",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        Their design work clarified our value proposition instantly.
        <Highlight>Conversion from trial to paid improved by 34%.</Highlight>
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Founder at Signal Grid",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        We needed speed without cutting corners.
        <Highlight>Localhost Studio delivered both.</Highlight>
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Product Manager at Orbit Works",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        Weekly demos kept stakeholders aligned and confident.
        <Highlight>Nothing got lost between design and build.</Highlight>
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Head of Product at LedgerPeak",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        They modernized our core flows while keeping our existing platform
        stable.
        <Highlight>The rollout was smooth across every team.</Highlight>
      </p>
    ),
  },
  {
    name: "Linda Wu",
    role: "VP Operations at Flowstack",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        We finally have a consistent design system and component library.
        <Highlight>Shipping new screens is now twice as fast.</Highlight>
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Head of Engineering at EcoWare",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        Their engineers slotted into our stack quickly and wrote clean,
        maintainable code.
        <Highlight>Code reviews became effortless.</Highlight>
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "CMO at Parallel Labs",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        Localhost Studio helped us rebuild onboarding around real user behavior.
        <Highlight>Drop-off rates fell significantly in month one.</Highlight>
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Director of IT at Helio Health",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        Their process was structured, transparent, and easy for our internal
        team to follow.
        <Highlight>We trusted every release they shipped.</Highlight>
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "CEO at Edulink",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        We went from Figma prototypes to production in one quarter.
        <Highlight>Localhost Studio made the launch predictable.</Highlight>
      </p>
    ),
  },
  {
    name: "Jake Morrison",
    role: "CTO at SecureNet",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        They introduced performance and accessibility standards across our app.
        <Highlight>The product now feels faster and more robust.</Highlight>
      </p>
    ),
  },
  {
    name: "Nadia Ali",
    role: "Product Lead at Creative North",
    img: "/localhoststudiodark.svg",
    description: (
      <p>
        Working with Localhost Studio felt like adding a senior product squad
        overnight.
        <Highlight>Execution quality stayed high at every step.</Highlight>
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What teams are saying about Localhost Studio"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
