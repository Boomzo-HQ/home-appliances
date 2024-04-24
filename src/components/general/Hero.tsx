"use client";

import React from "react";
import { Button } from "../ui/button";
import hero from "../../../assets/hero.png";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const url = `https://wa.me/09391607870?text=Hello, I am interested in your repair services!!`;

  return (
    <div
      id="Hero"
      className="relative w-full px-[5vw] lg:px-[8vw] pt-[10vh] md:pt-[16vh] pb-[10vh] lg:pb-[16vh] bg-[#E1F7F5]"
    >
      {/* grid */}
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#0077b512_1px,transparent_1px),linear-gradient(to_bottom,#0077b512_1px,transparent_1px)] bg-[size:42px_42px] -z-10"></div>
      <div className="z-50 sm:w-full flex flex-col items-center lg:items-start gap-y-8 md:w-[75%]">
        <h1
          className="text-2xl lg:text-6xl font-bold text-[#1E0342] text-center lg:text-left w-[90%] border-0"
          style={{ lineHeight: "1.25" }}
        >
          Expert Care for Your Home Appliances
        </h1>
        <h5 className="text-sm text-center w-[90%] lg:text-left lg:text-lg text-[rgba(30,3,66,0.8)] font-normal md:w-[70%]">
          Experience Seamless Service with Sri Moksha Home Appliances – Where
          Every Repair is a Promise of Perfection.
        </h5>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <Button
            className="bg-[#0E46A3] text-white px-8 py-6 border border-[#0E46A3] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            onClick={() => scrollToSection("services")}
          >
            See Services
          </Button>
          <a href={url}>
            <Button className="bg-white text-[#0E46A3] px-8 py-6 border border-[#0E46A3] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              Whatsapp Us
            </Button>
          </a>
        </div>
      </div>
      <div className="hidden md:block absolute top-[10%] right-[2%] z-10">
        <Image src={hero} alt="hero-img" className="w-[40vw]" />
      </div>
    </div>
  );
};

export default Hero;
