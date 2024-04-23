import { Phone } from "lucide-react";
import React from "react";

const UtilityBar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 pr-10 flex justify-end items-center">
      <div className="flex items-center space-x-2">
        <Phone className="text-white h-6 w-6" /> {/* Lucide phone icon */}
        <span>+1 234 567 8900</span> {/* Phone number */}
      </div>
    </div>
  );
};

export default UtilityBar;
