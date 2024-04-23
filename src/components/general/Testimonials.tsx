"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Aarav Khanna",
    review:
      "As a small business owner, I've always found the world of corporate finance a bit intimidating. That's until I partnered with 'GrowthEdge Consultancy'. Their team simplified complex financial concepts and helped me strategize for sustainable growth. A shoutout to their consultant Priya for her exceptional support!",
  },
  {
    name: "Meera Gupta",
    review:
      "I approached 'GrowthEdge Consultancy' for help with streamlining my business processes, and I'm beyond impressed. Their bespoke solutions have not only increased efficiency but also boosted employee morale. Thanks to Rajesh and the team, we're now achieving milestones faster than ever!",
  },
  {
    name: "Vikram Bhatia",
    review:
      "The tailored market research 'GrowthEdge Consultancy' provided was a game-changer for my startup. It was insightful, thorough, and actionable. Their expertise in understanding market dynamics is unmatched. Kudos to Neha for her dedication!",
  },
  {
    name: "Ananya Singh",
    review:
      "Navigating through regulatory compliance can be daunting, but 'GrowthEdge Consultancy' made it a breeze for us. Their team, especially Anil, was knowledgeable and patient, ensuring we were on track with all legal requirements. Their professionalism is commendable.",
  },
  {
    name: "Siddharth Nair",
    review:
      "‘GrowthEdge Consultancy’ offered us a fresh perspective on our branding strategy that was innovative yet practical. Their approach to problem-solving is creative and effective. Working with Manisha was a delight, and her insights have been invaluable to our brand's success.",
  },
];

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="testimonials"
      className="bg-[#9e3efc] py-28 flex flex-col gap-y-10 items-center justify-center"
    >
      <h3 className="text-base font-semibold text-white uppercase tracking-widest">
        Testimonials
      </h3>
      <Carousel setApi={setApi} className="w-full md:w-1/2">
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-none w-full shadow-none">
                  <CardContent className="flex flex-col gap-y-10 items-center justify-center p-6">
                    <span className="text-sm md:text-xl text-white font-light text-center leading-relaxed">
                      {review.review}
                    </span>
                    <div>
                      <h3 className="text-base text-white font-semibold text-center">
                        {review.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block border-none text-white" />
        <CarouselNext className="hidden md:block border-none text-white" />
      </Carousel>
      <div className="text-center text-sm text-white">
        Review {current} of {count}
      </div>
    </section>
  );
};

export default Testimonials;
