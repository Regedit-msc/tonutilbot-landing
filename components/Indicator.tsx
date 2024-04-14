import React, { FC } from "react";

interface IProps {
  currentStep: number;
}

const Indicator: FC<IProps> = ({ currentStep }: IProps) => {
  return (
    <div className="flex flex-col">
      <span
        className={`bg-gradient-to-r from-blue-400 to-purple-600 z-20 absolute top-8 left-0 w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
          currentStep === 1
            ? "translate-y-[5.75rem] animate-pulse"
            : currentStep === 2
            ? "translate-y-[12rem] animate-pulse"
            : currentStep === 3
            ? "translate-y-[18rem] animate-pulse"
            : ""
        }`}
      />
      <p
        className={`absolute bg-blue-300 blur top-8 left-0 w-3 h-3 z-20 transition-all duration-300 ease-in-out ${
          currentStep === 1
            ? "translate-y-[5.75rem] animate-pulse"
            : currentStep === 2
            ? "translate-y-[12rem] animate-pulse"
            : currentStep === 3
            ? "translate-y-[18rem] animate-pulse"
            : ""
        }`}
      >
        ...
      </p>
      <span className="w-1 h-[90%] top-[5%] absolute flex bg-[#111] left-1 rounded-full"></span>
    </div>
  );
};

export default Indicator;
