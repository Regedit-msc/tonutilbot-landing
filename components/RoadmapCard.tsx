import React, { FC } from "react";

interface IProps {
  currentStep: number;
  className?: string;
  phases: string[];
}

const RoadmapCard: FC<IProps> = ({
  currentStep,
  className,
  phases,
}: IProps) => {
  return (
    <div
      className={`${className} flex w-full text-white pt-16 sm:pt-[4.5rem] pb-8 sm:pb-12 min-[920px]:pb-10 rounded-[1.4rem] border border-[#ffffff07] flex-grow text-start relative bg-gradient-to-b from-white/[8%] to-white/[3%] min-[920px]:h-[480px] overflow-hidden`}
    >
      <div className="h-[10rem] sm:h-[15rem] min-[920px]:h-[19rem] overflow-y-scroll">
        <div className="pl-6 sm:pl-12 sm:pr-12">
          <div className="absolute text-xl py-4 sm:py-6 z-10 top-0">
            Q {currentStep + 1}. Project Startup
          </div>

          <section>
            {phases.map((_, i) => {
              return (
                <p
                  className="text-xs sm:text-base flex items-end cursor-pointer font-light leading-normal h-1/2 w-[90%]"
                  key={i}
                >
                  {phases[i]}
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
