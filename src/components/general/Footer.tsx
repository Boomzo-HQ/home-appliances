import { Locate, Phone } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="bg-[#E1F7F5] text-[#1E0342] px-[4vh] md:px-[8vh] pt-12 md:pt-28 pb-2 flex flex-col ">
      <div className="flex flex-col gap-y-6 md:gap-y-14">
        <h3 className="text-base font-bold text-[#1E0342] uppercase tracking-widest">
          Contact us
        </h3>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24">
          <div className="flex flex-col gap-y-3">
            <p className="text-sm md:text-lg font-light w-full md:w-3/4">
              Contact us today to schedule a repair, or inquire about our
              services.
            </p>
            <p className="text-sm md:text-lg font-light w-full md:w-3/4">
              Our team is ready to provide the support and solutions you need.
            </p>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-2">
              <Phone />
              <span className="text-base md:text-lg font-normal w-full md:w-3/4">
                093916 07870
              </span>
            </div>
            <div className="flex gap-x-2">
              <Locate />
              <span className="text-sm md:text-lg font-normal w-full md:w-3/4">
                H No 27-16/22/104 SRIKRISHNANAGAR, Krupa Complex Rd, Block 12,
                Safilguda, Neredmet, Secunderabad, Telangana 500056
              </span>
            </div>
          </div>
          {/* <div>
            <h2 className="text-base font-semibold text-[#1E0342] uppercase tracking-widest">
              Repair Services
            </h2>
            <ul className="mt-4 text-base font-light" >
              <li>Refrigerator</li>
              <li>Washing Machine</li>
              <li>Air Conditioner</li>
              <li>Microwave</li>
              <li>Dishwasher</li>
            </ul>
          </div> */}
        </div>
        <div>
          <div className="">
            <Separator
              orientation="horizontal"
              className="h-[1px] bg-[#1E0342]"
            />
          </div>
          <div className="text-xs text-center md:text-sm font-light flex items-center justify-center pt-2">
            © 2024-25 Sri Moksha Home Appliances. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
