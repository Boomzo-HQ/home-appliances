import React from "react";
import img1 from "../../../assets/refrigerator-service.png";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const DATA = [
  {
    Appliance: "Refrigerator",
    Service:
      "Quick and effective solutions for cooling issues, leaks, or any operational faults.",
  },
  {
    Appliance: "Washing Machine",
    Service:
      "Expert repairs for all models, addressing issues like malfunctioning cycles, excessive noise, or water drainage problems.",
  },
  {
    Appliance: "Air Conditioner",
    Service:
      "Ensure your comfort with our AC services, including regular maintenance, troubleshooting, and repair of all types of air conditioners.",
  },
  {
    Appliance: "Microwave",
    Service:
      "Safe and thorough repairs for all microwave issues, extending its lifespan and functionality.",
  },
  {
    Appliance: "Dishwasher",
    Service:
      "From routine servicing to complex fixes, ensure your dishwasher operates smoothly without any hassle.",
  },
];

const Services = () => {
  return (
    <div id="services" className="container mx-auto px-[8vw] py-28">
      <h2 className="text-2xl font-medium text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
        {DATA.map((service, index) => (
          <CardContainer key={index} className="w-full">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border flex flex-col gap-y-7 items-center">
              <CardItem translateZ="100" className="">
                <div className="rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={img1}
                    alt={service.Appliance}
                    // width={200}
                    // height={150}
                    objectFit="cover"
                    className="w-full"
                  />
                </div>
              </CardItem>
              <div className="flex flex-col items-center gap-y-2">
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-center font-medium text-xl"
                >
                  {service.Appliance}
                </CardItem>
                <CardItem
                  translateZ={20}
                  className="px-4 rounded-xl text-xs font-normal text-center dark:text-white"
                >
                  {service.Service}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Services;
