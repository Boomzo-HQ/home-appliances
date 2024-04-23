import { Locate, Mail, Phone } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white px-[8vh] pt-28 pb-8 flex flex-col ">
      <div className="flex flex-col gap-y-14">
        <h3 className="text-base font-semibold text-white uppercase tracking-widest">
          Contact us
        </h3>
        <div className="grid grid-cols-2 gap-24">
          <div className="flex flex-col gap-y-3">
            <p className="text-lg font-extralight w-3/4">
              Contact us today to schedule a repair, or inquire about our
              services.
            </p>
            <p className="text-lg font-extralight w-3/4">
              Our team is ready to provide the support and solutions you need.
            </p>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-2">
              <Phone />
              <span className="text-lg font-extralight w-3/4">
                email@bmail.com
              </span>
            </div>
            <div className="flex gap-x-2">
              <Mail />
              <span className="text-lg font-extralight w-3/4">
                email@bmail.com
              </span>
            </div>
            <div className="flex gap-x-2">
              <Locate />
              <span className="text-lg font-extralight w-3/4">
                email@bmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <Separator orientation="horizontal" className="h-[1px] bg-white" />
        </div>
        <div className="text-lg font-extralight flex items-center justify-center">
          © 2024-25 Sri Moksha Home Appliances. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
