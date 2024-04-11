/* eslint-disable @next/next/no-img-element */
"use client";
import { DarkButton } from "@components/buttons/DarkButton";
import { GradientText } from "@components/special_text/GradientText";
import Stepper from "@components/stepper/Stepper";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const roadmap = [
  {
    quarter: "Q1",
    info: "Project Startup and initialization",
  },
  {
    quarter: "Q2",
    info: "Project Startup and initialization",
  },
  {
    quarter: "Q3",
    info: "Project Startup and initialization",
  },
  {
    quarter: "Q4",
    info: "Project Startup and initialization",
  },
];
type nextStep = () => void;
type changeStep = (i: number) => void;

export const ProjectRoadmap = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const incrementStep = (step: number) => setCurrentStep(step);
  const updateStep = (next: number) => {
    if (currentStep !== 3) {
      incrementStep(currentStep == next ? currentStep + 1 : currentStep);
    } else incrementStep(0);
  };
  const nextStep: nextStep = () => {
    updateStep(currentStep);
    console.log(currentStep);
  };
  setInterval(nextStep, 3000);

  return (
    <div className="text-white">
      <div className="flex flex-col justify-center items-center text-center gap-10 my-[10%] relative w-full">
        <DarkButton
          icon={<FaTelegramPlane className="text-[1.5rem]" />}
          text="VISION"
        />

        <GradientText
          text={
            <>
              Project <br className="md:hidden" /> Roadmap
            </>
          }
          className="text-7xl mb-16"
        />

        <div className="flex md:gap-10 gap-[1.38rem] max-[920px]:flex-col lg:w-fit w-full">
          <div className="flex items-center lg:w-fit w-full">
            <Stepper step={currentStep} />

            <div className="flex flex-col gap-6 lg:w-fit w-full">
              {roadmap?.map((_, i) => {
                return (
                  <div
                    key={i}
                    className={`text-white gap-3 flex p-5 lg:w-[18.55rem]    w-full  rounded-[1.6rem] border  pr-10 cursor-pointer ${
                      currentStep === i
                        ? "bg-[#ffffff13] border-[#ffffff20]"
                        : "border-transparent"
                    }`}
                    onClick={() => {
                      setCurrentStep(i);
                    }}
                  >
                    <p className="">Q1</p>

                    <p className="text-start">
                      {" "}
                      Project Startup and <br /> initialization{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full text-white py-16 pr-6 pl-14 bg-[#ffffff13] rounded-[1.6rem] border border-[#ffffff20] flex-grow text-start ">
            <div className="max-h-96 overflow-y-scroll ">
              <div className="mr-[12%]">
                <h1 className="text-5xl mb-10">
                  Q {currentStep + 1}. Project Startup
                </h1>

                {Array(10)
                  .fill(0)
                  .map((_, i) => {
                    return (
                      <p
                        className="text-xl mb-10 mr-360 cursor-pointer font-normal leading-normal"
                        key={i}
                      >
                        This is some information about the project and stuff.
                        This is some information about the project and stuff.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Deserunt quis voluptates molestiae minima culpa,
                        quisquam error, dolore saepe doloribus cum fugit, iusto
                        odit illum dolores. Quisquam qui quaerat minus nostrum.
                      </p>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
