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
import { Button } from "../ui/button";

const reviews = [
  {
    name: "Rama Krishna Gorha",
    review:
      "Good service, till now not a single repeat complete for any work. Washing machine working good, water puri fired working good, Fridge work done till now no repair again & inventor work cool no power discharge problem. Overhaul work person is good 👍 well service..",
  },
  {
    name: "Praveen Mudhiraj",
    review:
      "I appreciate the quality of work ,Excellent service , Reasonable price , great Knowledge about the product , very happy with the service 👌👍",
  },
  {
    name: "Shri Krishna P G",
    review:
      "Very good person and nice work done. Hard to find good people in service sector with respect towards customer and his team.",
  },
  {
    name: "Sapa Ramesh Yadav",
    review:
      "Good service for home appliances and “Pricing is fair and transparent - definitely value for money.",
  },
  {
    name: "Murthy Ganti",
    review:
      "I had recently got my AC’s serviced it was an amazing experience where Mr. Sharath was very professional in behavior and had suggested the best way to use and maintain the AC which i got serviced. He has given the alternatives for the problems. He was very patient in giving responses to all the queries which we had. He is very reasonable with respect to pricing for his service when compared with that of the people from organized sectors like urban clap or no broker. I would rate him 5 in all aspects.",
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
      className="bg-[#1E0342] py-28 flex flex-col gap-y-10 items-center justify-center"
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
                    <span className="text-sm md:text-xl text-[#9AC8CD] font-light text-center leading-relaxed">
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
      {/* <div className="text-center text-sm text-white">
        Review {current} of {count}
      </div> */}
      <div className="flex flex-col gap-y-4 md:gap-y-8 items-center justify-center">
        <h2 className="text-[#E1F7F5] text-base md:text-2xl text-center w-full px-[4vh]">
          Join our list of{" "}
          <span className="font-bold text-[#9AC8CD]">Satisfied Customers</span>.
        </h2>
        <a
          href="https://www.google.com/search?client=ms-android-xiaomi-terr1-rso2&sca_esv=7fd1d106578ed93d&hl=en-IN&cs=1&sxsrf=ACQVn0_arLjNgiomx7-HCvyhMWfrrECQiw:1710701515181&q=Sri+Moksha+Home+Appliances&ludocid=13548604123722029320&lsig=AB86z5X5vSKmxpSZsDpXQ6d3_arv&kgs=bdd6d70278460821&shndl=-1&shem=lcsnce,lsp&source=sh/x/loc/act/m1/4#lrd=0x3bcb9b0056508af5:0xbc064faabcd81908,1,,,,"
          target="_blank"
        >
          <Button className="bg-white text-[#1E0342] font-bold px-8 py-6 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            Check all Google Reviews
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
