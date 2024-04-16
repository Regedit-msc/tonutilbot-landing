import React, { FC } from "react";

interface IProps {
  currentStep: number;
  className?: string;
}

const RoadmapCard: FC<IProps> = ({ currentStep, className }: IProps) => {
  return (
    <div
      className={`${className} flex w-full text-white pt-16 sm:pt-[4.5rem] pb-8 sm:pb-12 min-[920px]:pb-10 rounded-[1.4rem] border border-[#ffffff07] flex-grow text-start relative bg-gradient-to-b from-white/[8%] to-white/[3%] min-[920px]:h-[420px] overflow-hidden`}
    >
      <div className="h-[16rem] sm:h-[24rem] min-[920px]:h-[19rem] overflow-y-scroll">
        <div className="pl-6 sm:pl-12 sm:pr-12">
          <div className="absolute text-xl py-4 sm:py-6 z-10 top-0">
            Q {currentStep + 1}. Project Startup
          </div>

          <section>
            {Array(3)
              .fill(0)
              .map((_, i) => {
                return (
                  <p
                    className="text-xs sm:text-base min-[920px]:text-sm flex items-end cursor-pointer font-light leading-normal h-1/2 w-[90%]"
                    key={i}
                  >
                    This is some information about the project and stuff. This
                    is some information about the project and stuff. Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Deserunt quis
                    voluptates molestiae minima culpa, quisquam error, dolore
                    saepe doloribus cum fugit, iusto odit illum dolores.
                    Quisquam qui quaerat minus nostrum.
                    <br />
                    <br />
                  </p>
                );
              })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
