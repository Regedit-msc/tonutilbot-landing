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
    info: "Building Product Architecture",
    phases: [
      "Idea Acquisition and User Research Phase.",
      "Mapping out Product Infrastructures, requirements, and development goals.",
      "Setup infrastructure and procure providers needed (TonAPI, Geckoterminal,etc.)",
      "Build Bot website",
      "Setup bot docs V1.0",
      "Setting up Cloud infrastructure and CI.",
      "Launch full bot MVP.",
    ],
  },
  {
    quarter: "Q2",
    info: "Bot Alpha Testing and Optimization",
    phases: [
      "Building backbone for the TonderBot marketplace’s third-party integrations.",
      "Fund float balances for all accepted integrations.",
      "Add more bot features e.g Auto buy, Realtime spot trades with little to no slippages.",
      "Scaling systems and migration from heavily rate limited services",
      "Building developers’ API architecture, endpoints, and documentation.",
      "Testing and Optimization of API and Production deployment",
      "Usability Testing and Security Optimization.",
      "A series of usability testing by developers and end-users.",
      "A/B Testing for TonderBot Marketplace",
      "Inviting developers to contribute to an open-source public repository on GitHub, This enables developers to add third-party integrations that provide real-world assets & utilities to the TonderBot Marketplace.",
      "Launch TonderBot Marketplace for all users."
    ],
  },
  {
    quarter: "Q3",
    info: " Launch, User Acquisition, Marketing.",
    phases: [
      "Social Media reach outs, community formation and management.",
      "Deployment of resources like designs, documentation, and content to guide developer and end users’ onboarding.",
      "Referral program.",
      "Token launch (Holders pay less fees) and rewarding Github contributors.",
      "Airdrops and rewards for all early adopters."
    ],
  },
];

export const ProjectRoadmap = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const INTERVAL = 4000;
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
      <div
        ref={ref}
        className="w-full text-white flex flex-col items-center lg:pt-[7rem]"
      >
        <section className="flex flex-col justify-center items-center">
          <DarkButton text="ROADMAP" isIcon={false} />

          <GradientText className="text-[3rem] lg:text-[4rem] tracking-tighter mb-8 pb-2 font-bold leading-none mt-5 text-center">
            Project <br className="md:hidden" /> Roadmap
          </GradientText>
        </section>
        <section className="relative flex px-5 w-full">
          <div className="flex flex-col justify-center items-center text-center gap-10 relative w-full">
            <div className="flex md:gap-10 gap-[1.38rem] max-[920px]:flex-col lg:w-fit w-full ">
              <div className="flex items-center lg:w-fit min-[920px]:w-1/2">
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
                              className={`flex w-3 aspect-square rounded-full bg-white/15 absolute transition-all duration-300 ease-in-out ${
                                currentStep === i && "opacity-0"
                              }`}
                            />
                            <span
                              className={`flex w-3 aspect-square rounded-full bg-gradient-to-r from-blue-400 to-purple-600 absolute opacity-0 transition-all duration-300 ease-in-out ${
                                currentStep === i && "opacity-100"
                              }`}
                            />
                            <span
                              className={`flex w-3 aspect-square rounded-full bg-gradient-to-r from-blue-400 to-purple-600 blur absolute opacity-0 transition-all duration-300 ease-in-out ${
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
                            <p className="text-sm sm:text-base  min-[920px]:text-sm">
                              {roadmap[i].quarter}
                            </p>

                            <p
                              className="text-start text-sm sm:text-base w-[90%] sm:max-w-[24rem] max-w-[18rem] lg:w-3/4 min-[920px]:text-sm leading-[1.5]
                            "
                            >
                              {roadmap[i].info}
                            </p>
                            <span
                              className={`absolute right-6 top-[22px] transition-all duration-300 ease-in-out ${
                                currentStep === i && "rotate-180"
                              }`}
                            >
                              <IoIosArrowUp size={13} />
                            </span>
                          </div>
                        </div>
                        <div className="flex pl-7 w-full">
                          <RoadmapCard
                            desc={roadmap[i].info}
                            phases={roadmap[i].phases}
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
                desc={roadmap[currentStep].info}
                phases={roadmap[currentStep].phases}
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
