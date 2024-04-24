"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-[#E1F7F5] text-[#1E0342] w-full py-6 px-4 md:px-8 max-w-[1440px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center py-4 px-2">
            <Link href="/" className="text-base md:text-2xl font-semibold">
              Sri Moksha Home Appliances
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { title: "Home", id: "home" },
            { title: "Services", id: "services" },
            { title: "Reviews", id: "testimonials" },
          ].map((option, idx) => (
            <div
              key={idx}
              className="text-medium font-normal text-base cursor-pointer hover:underline"
              onClick={() => scrollToSection(option.id)}
            >
              {option.title}
            </div>
          ))}
        </div>
        <div>
          <a href="tel:093916 07870">
            <Button className="bg-[#0E46A3] text-white px-8 py-6 border border-[#0E46A3] hover:bg-white hover:text-[#0E46A3] hover:font-semibold hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
