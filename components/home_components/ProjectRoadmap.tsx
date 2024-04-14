/* eslint-disable @next/next/no-img-element */
"use client";
import Indicator from "@components/Indicator";
import RoadmapCard from "@components/RoadmapCard";
import { DarkButton } from "@components/buttons/DarkButton";
import { GradientText } from "@components/special_text/GradientText";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const roadmap = [
  {
    quarter: "Q1",
    info: "Project Startup and initialization",
  },
  {
    quarter: "Q2",
    info: "Project Continued and initialization",
  },
  {
    quarter: "Q3",
    info: "Project Made and initialization",
  },
  {
    quarter: "Q4",
    info: "Project Finalising and initialization",
  },
];

export const ProjectRoadmap = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const INTERVAL = 2000;

  useEffect(() => {
    if (!visible) {
      return;
    }
    const interval = setInterval(() => {
      const next = currentStep === roadmap.length - 1 ? 0 : currentStep + 1;
      setCurrentStep(next);
      console.log("next", visible);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [visible, currentStep]);

  return (
    <div ref={ref} className="text-white flex flex-col items-center">
      <section className="flex flex-col justify-center items-center">
        <DarkButton text="ROADMAP" />

        <GradientText
          text={
            <>
              Project <br className="md:hidden" /> Roadmap
            </>
          }
          className="text-[3rem] tracking-tighter mb-8 font-semibold leading-none mt-5 text-center"
        />
      </section>
      <section className="relative flex">
        <div className="flex flex-col h-full w-1/6 justify-center items-center">
          <Indicator currentStep={currentStep} />
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-10 relative w-5/6">
          <div className="flex md:gap-10 gap-[1.38rem] max-[920px]:flex-col lg:w-fit w-full">
            <div className="flex items-center lg:w-fit w-[90%]">
              {/* <Stepper step={currentStep} /> */}

              <div className="flex flex-col gap-6 lg:w-fit w-full">
                {roadmap.map((_, i) => {
                  return (
                    <section className="flex flex-col gap-4" key={i}>
                      <div
                        className={`relative text-white gap-3 flex px-5 py-4 lg:w-[18.55rem] w-full rounded-[1.4rem] border transition-all duration-300 ease-out pr-10 cursor-pointer ${
                          currentStep === i
                            ? "bg-[#111] border-[#ffffff20]"
                            : "border-transparent"
                        }`}
                        onClick={() => {
                          setCurrentStep(i);
                        }}
                      >
                        <p className="">{roadmap[i].quarter}</p>

                        <p className="text-start text-sm w-3/5 sm:w-full">
                          {roadmap[i].info}
                        </p>
                        <span
                          className={`absolute right-10 top-7 transition-all duration-300 ease-in-out ${
                            currentStep === i && "rotate-180"
                          }`}
                        >
                          <IoIosArrowUp />
                        </span>
                      </div>
                      <RoadmapCard
                        className={`sm:hidden ${
                          currentStep === i ? "flex" : "hidden"
                        }`}
                        currentStep={currentStep}
                      />
                    </section>
                  );
                })}
              </div>
            </div>

            <RoadmapCard className="hidden sm:flex" currentStep={currentStep} />
          </div>
        </div>
      </section>
    </div>
  );
};
