import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MdOutlineFormatQuote } from "react-icons/md";

const spotlightTestimonials = [
  {
    quote:
      "Localhost Studio helped us move from vague ideas to a launch-ready product in six weeks.",
    company: "Google",
    name: "Leslie Alexander",
    role: "Product Lead",
  },
  {
    quote:
      "Their team balanced design quality and engineering speed better than any partner we have worked with.",
    company: "Microsoft",
    name: "Marcus Lee",
    role: "Head of Digital",
  },
  {
    quote:
      "We shipped our onboarding revamp quickly, and activation metrics improved in the first month.",
    company: "Amazon",
    name: "Cameron Diaz",
    role: "Growth Manager",
  },
  {
    quote:
      "Communication was sharp, milestones were clear, and every week delivered something tangible.",
    company: "Netflix",
    name: "Priya Rao",
    role: "Founder",
  },
  {
    quote:
      "Localhost Studio feels like an extension of our internal team, not an external agency.",
    company: "YouTube",
    name: "Nina Patel",
    role: "Engineering Director",
  },
  {
    quote:
      "From UX to production code, they made complex product work feel simple and predictable.",
    company: "Spotify",
    name: "Daniel Kim",
    role: "VP Product",
  },
];

export default function Component() {
  return (
    <Section
      title="Client Spotlight"
      subtitle="What teams say about Localhost Studio"
    >
      <Carousel>
        <div className="max-w-2xl mx-auto relative">
          <CarouselContent>
            {spotlightTestimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-2 pb-5">
                  <div className="text-center">
                    <MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto" />
                    <BlurFade delay={0.25} inView>
                      <h4 className="text-1xl font-semibold max-w-lg mx-auto px-10">
                        {testimonial.quote}
                      </h4>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                      <div className="mt-8">
                        <Image
                          width={112}
                          height={40}
                          key={index}
                          src="/localhoststudiodark.svg"
                          alt={`${testimonial.company} Logo`}
                          className="mx-auto w-auto h-[40px] grayscale opacity-30"
                        />
                      </div>
                    </BlurFade>
                    <div className="">
                      <BlurFade delay={0.25 * 3} inView>
                        <h4 className="text-1xl font-semibold my-2">
                          {testimonial.name}
                        </h4>
                      </BlurFade>
                    </div>
                    <BlurFade delay={0.25 * 4} inView>
                      <div className=" mb-3">
                        <span className="text-sm text-themeDarkGray">
                          {testimonial.role}
                        </span>
                      </div>
                    </BlurFade>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-2/12 bg-gradient-to-l from-background"></div>
        </div>
        <div className="md:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}
