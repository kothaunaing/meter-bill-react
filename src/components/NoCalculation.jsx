import { InfoIcon, RepeatIcon } from "lucide-react";
import React from "react";

const NoCalculation = () => {
  return (
    <div className="flex justify-center">
      <div className="font-bold flex gap-2 justify-center items-center p-3 ">
        <InfoIcon />
        <span>No results</span>
      </div>
    </div>
  );
};

export default NoCalculation;
