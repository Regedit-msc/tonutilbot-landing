/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientText } from "@components/special_text/GradientText";
import Transition from "@components/transitions";
import React, { FC, useState } from "react";

import Ayomide from "@assets/landing-page/developers/Ayomide.png";
import Bayo from "@assets/landing-page/developers/Bayo.png";
import Divine from "@assets/landing-page/developers/Divine.png";
import Kinyichukwu from "@assets/landing-page/developers/Kinyichukwu.png";
import Mayowa from "@assets/landing-page/developers/Mayowa.png";
import MuizSanni from "@assets/landing-page/developers/Muiz Sanni.png";
import Somto from "@assets/landing-page/developers/Somto.png";
import { StaticImageData } from "next/image";

import vector1 from "@assets/landing-page/OurTeam/vector1.svg";
import vector2 from "@assets/landing-page/OurTeam/Vector2.svg";
import LandingDarkButton from "@components/buttons/LandingDarkButton";
import DevBubble from "./DevBubble";

interface Developer {
  image: StaticImageData;
  name: string;
  role: string;
}

const developers: Developer[] = [
  {
    image: Ayomide,
    name: "Ayomide",
    role: "Team Lead",
  },
  {
    image: Somto,
    name: "Somto",
    role: "TonderBot Lead Engineer",
  },
  {
    image: MuizSanni,
    name: "Muiz",
    role: "Art Director",
  },
  {
    image: Divine,
    name: "Divine",
    role: "Full-stack Engineer",
  },
  {
    image: Bayo,
    name: "Bayo",
    role: "Integrations Engineer",
  },
  {
    image: Kinyichukwu,
    name: "Kinyichukwu",
    role: "Front-end Developer",
  },
  {
    image: Mayowa,
    name: "Mayowa",
    role: "Developer & Technical Writer",
  },
];

// interface IProps {}

const OurTeam: FC = () => {
  return (
    <Transition>
      <div className="text-white py-20 md:py-28 lg:py-32 w-full flex flex-col relative">
        <div className="absolute w-screen h-[1000px] overflow-hidden">
          <img
            src={vector1.src}
            alt=""
            className="absolute top-0 left-1/3 w-[1000px] lg:max-w-screen"
          />
          <img
            src={vector2.src}
            alt=""
            className="absolute -top-1/3 md:top-0 h-[1500px] lg:max-w-screen"
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-6 relative w-full">
          <LandingDarkButton text="MEET THE MINDS" isIcon={false} />

          <GradientText text={<>Our Team</>} className="py-0" />

          <section className="flex gap-10 lg:gap-14 flex-wrap w-4/5 sm:w-[70%] lg:w-3/5 max-w-[700px] justify-center items-center sm:my-10">
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <DevBubble
                  key={i}
                  name={developers[i].name}
                  title={developers[i].role}
                  img={developers[i].image}
                />
              ))}
          </section>
        </div>
      </div>
    </Transition>
  );
};

export default OurTeam;
