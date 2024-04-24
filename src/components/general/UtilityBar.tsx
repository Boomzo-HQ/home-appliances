import { Phone } from "lucide-react";
import React from "react";

const UtilityBar = () => {
  const url = `https://wa.me/09391607870?text=Hello, I am interested in your repair services!!`;
  return (
    <div className="bg-[#1E0342] text-white p-4 pr-10 flex justify-end items-center">
      <div className="flex items-center space-x-2">
        <Phone className="text-white h-6 w-6" />
        <a href={url}>
          <span>+093916 07870</span>
        </a>
      </div>
    </div>
  );
};

export default UtilityBar;
