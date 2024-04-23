"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "../../../public/images/EV Logo.png";
import Link from "next/link";
import { BarChart2, Home, Info, Menu, User } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white w-full px-4 md:px-8 max-w-[1440px] pt-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center py-4 px-2">
            <Link href="/" className="text-2xl font-medium">
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
          <Button>Call Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
