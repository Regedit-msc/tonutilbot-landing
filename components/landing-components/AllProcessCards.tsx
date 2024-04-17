/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import ProcessCard from "./ProcessCard";
import define from "@assets/landing-page/define.svg";
import research from "@assets/landing-page/research.svg";
import ideate from "@assets/landing-page/ideate.svg";
import testing from "@assets/landing-page/testing.svg";

const processCards = [
  {
    icon: define,
    title: "Define",
    text: "Identify and define the Problem we’re trying to solve",
  },
  {
    icon: ideate,
    title: "Ideate",
    text: "Brainstorm and build the solution using existing infrastructure",
  },
  {
    icon: research,
    title: "Research",
    text: "Identify the possible solutions to solve the problem",
  },
  {
    icon: testing,
    title: "Testing",
    text: "Test the solution with the community and iterate based on feedback",
  },
];
const AllProcessCards: FC = () => {
  return (
    <div className="w-full flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 z-10 ">
      <span className="flex flex-col gap-5 sm:gap-7 lg:gap-10 -translate-y-5 lg:-translate-y-10">
        <ProcessCard
          icon={processCards[0].icon}
          title={processCards[0].title}
          desc={processCards[0].text}
        />
        <ProcessCard
          icon={processCards[1].icon}
          title={processCards[1].title}
          desc={processCards[1].text}
        />
      </span>
      <span className="flex flex-col gap-5 sm:gap-7 lg:gap-10 translate-y-5 lg:translate-y-10">
        <ProcessCard
          icon={processCards[2].icon}
          title={processCards[2].title}
          desc={processCards[2].text}
        />
        <ProcessCard
          icon={processCards[3].icon}
          title={processCards[3].title}
          desc={processCards[3].text}
        />
      </span>
    </div>
  );
};

export default AllProcessCards;
