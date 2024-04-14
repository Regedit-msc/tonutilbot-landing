import React, { FC } from "react";

interface IProps {
  currentStep: number;
  className?: string;
}

const RoadmapCard: FC<IProps> = ({ currentStep, className }: IProps) => {
  return (
    <div
      className={`${className} flex w-full text-white pt-4 pb-8 sm:pb-12 bg-gradient-to-t from-[#111] to-myGray rounded-[1.4rem] border border-[#ffffff20] flex-grow text-start `}
    >
      <div className="h-[16rem] sm:h-[24rem] overflow-y-scroll ">
        <div className="relative pl-6 sm:pl-12 sm:pr-12">
          <div className="text-xl py-3 sticky -top-2 bg-myGray">
            Q {currentStep + 1}. Project Startup
          </div>

          <section>
            {Array(3)
              .fill(0)
              .map((_, i) => {
                return (
                  <p
                    className="text-[0.5rem] sm:text-base flex items-end cursor-pointer font-light leading-normal h-1/2 w-[90%]"
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
