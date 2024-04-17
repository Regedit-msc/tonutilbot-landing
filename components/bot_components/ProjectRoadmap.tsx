/* eslint-disable @next/next/no-img-element */
"use client";
import RoadmapCard from "@components/RoadmapCard";
import { DarkButton } from "@components/buttons/DarkButton";
import { GradientText } from "@components/special_text/GradientText";
import Transition from "@components/transitions";
import useWindowWidth from "@hooks/useWindowWidth";
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
    info: "Project third quarter and initialization",
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
  const size = useWindowWidth() || 0;

  useEffect(() => {
    if (!visible || size <= 768) {
      return;
    }
    const interval = setInterval(() => {
      const next = currentStep === roadmap.length - 1 ? 0 : currentStep + 1;
      setCurrentStep(next);
      console.log("next", visible);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [visible, currentStep, size]);

  return (
    <Transition>
      <div ref={ref} className="text-white flex flex-col items-center lg:pt-[7rem]">
        <section className="flex flex-col justify-center items-center">
          <DarkButton text="ROADMAP" />

          <GradientText className="text-[3rem] lg:text-[4rem] tracking-tighter mb-8 font-semibold leading-none mt-5 text-center">
            Project <br className="md:hidden" /> Roadmap
          </GradientText>
        </section>
        <section className="relative flex px-5">
          {/* <div className="flex flex-col h-full w-[10%] justify-center items-center">
            <Indicator currentStep={currentStep} />
          </div> */}

          <div className="flex flex-col justify-center items-center text-center gap-10 relative w-full">
            <div className="flex md:gap-10 gap-[1.38rem] max-[920px]:flex-col lg:w-fit w-full ">
              <div className="flex items-center lg:w-fit min-[920px]:w-[40%]">
                <div className="flex flex-col gap-6 lg:w-fit w-full">
                  {roadmap.map((_, i) => {
                    return (
                      <section
                        className="flex items-end w-full flex-col gap-4"
                        key={i}
                      >
                        <div className="flex justify-center w-full items-center gap-7">
                          <div className="flex relative -translate-y-[6px]">
                            <span
                              className={`flex w-3 aspect-square rounded-full bg-white/15 -translate-y-[10px] absolute transition-all duration-300 ease-in-out ${
                                currentStep === i && "opacity-0"
                              }`}
                            />
                            <span
                              className={`flex w-3 aspect-square rounded-full bg-gradient-to-r from-blue-400 to-purple-600 -translate-y-[10px] absolute opacity-0 transition-all duration-300 ease-in-out ${
                                currentStep === i && "opacity-100"
                              }`}
                            />
                            <span
                              className={`flex w-3 aspect-square rounded-full bg-gradient-to-r from-blue-400 to-purple-600 blur -translate-y-[10px] absolute opacity-0 transition-all duration-300 ease-in-out ${
                                currentStep === i && "opacity-100"
                              }`}
                            />
                          </div>

                          <div
                            className={`relative text-white gap-3 flex px-5 py-4 lg:w-[18.55rem] w-full rounded-[1.4rem] border transition-all duration-300 ease-out pr-10 cursor-pointer ${
                              currentStep === i
                                ? "bg-gradient-to-b from-white/[8%] to-white/[3%] border-[#ffffff07]"
                                : "border-transparent"
                            }`}
                            onClick={() => {
                              setCurrentStep(i);
                            }}
                          >
                            <p className="text-sm">{roadmap[i].quarter}</p>

                            <p className="text-start text-sm min-[538px]:w-[40%] min-[713px]:w-[30%] min-[920px]:w-2/3 sm:text-sm sm:w-[30%] w-1/2 lg:w-3/4 leading-[1.5]">
                              {roadmap[i].info}
                            </p>
                            <span
                              className={`absolute right-6 top-7 transition-all duration-300 ease-in-out ${
                                currentStep === i && "rotate-180"
                              }`}
                            >
                              <IoIosArrowUp size={13} />
                            </span>
                          </div>
                        </div>
                        <div className="flex pl-7">
                          <RoadmapCard
                            className={`min-[920px]:hidden ${
                              currentStep === i ? "flex" : "hidden"
                            }`}
                            currentStep={currentStep}
                          />
                        </div>
                      </section>
                    );
                  })}
                </div>
              </div>

              <RoadmapCard
                className="min-[920px]:w-[60%] hidden min-[920px]:flex"
                currentStep={currentStep}
              />
            </div>
          </div>
        </section>
      </div>{" "}
    </Transition>
  );
};
