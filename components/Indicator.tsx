import React, { FC } from "react";

interface IProps {
  currentStep: number;
}

const Indicator: FC<IProps> = ({ currentStep }: IProps) => {
  return (
    <div className="flex flex-col">
      <span
        className={`bg-gradient-to-r from-blue-400 to-purple-600 z-20 absolute top-8 left-0 min-[920px]:left-[3.5rem] w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
          currentStep === 1
            ? "translate-y-[5.75rem] animate-pulse"
            : currentStep === 2
            ? "translate-y-[11.5rem] md:translate-y-[12rem] animate-pulse"
            : currentStep === 3
            ? "translate-y-[17.5rem] md:translate-y-[18.25rem] animate-pulse"
            : ""
        }`}
      />
      <p
        className={`absolute bg-blue-300 blur top-8 left-0 min-[920px]:left-[3.5rem] w-3 h-3 z-20 transition-all duration-300 ease-in-out ${
          currentStep === 1
            ? "translate-y-[5.75rem] animate-pulse"
            : currentStep === 2
            ? "translate-y-[11.5rem] md:translate-y-[12rem] animate-pulse"
            : currentStep === 3
            ? "translate-y-[17.5rem] md:translate-y-[18.25rem] animate-pulse"
            : ""
        }`}
      >
        ...
      </p>
      <span className="w-1 h-[90%] min-[920px]:h-[80%] top-[5%] min-[920px]:top-[10%] absolute flex bg-[#111] left-1 min-[920px]:left-[3.75rem] rounded-full"></span>
    </div>
  );
};

export default Indicator;
