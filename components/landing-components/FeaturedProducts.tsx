/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientText } from "@components/special_text/GradientText";
import Transition from "@components/transitions";
import React, { FC, useState } from "react";
import arrowBack from "@assets/landing-page/FeaturedProjects/arrowBack.svg";
import arrowForward from "@assets/landing-page/FeaturedProjects/arrowForward.svg";
import LandingDarkButton from "@components/buttons/LandingDarkButton";
import FeaturedProjectsCarousel from "@components/landing-components/FeaturedProjectsCarousel";

interface IProps {}

const FeaturedProducts: FC<IProps> = () => {
  const [next, setNext] = useState(false);

  return (
    <section className="py-10 flex flex-col gap-10 justify-center items-center">
      <div className="relative text-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center gap-3 relative">
          <LandingDarkButton text="OUR WORK" isIcon={false} />
          <GradientText
            text={<>Featured Projects</>}
            className="sm:w-full w-2/3 insetShadow lg:text-8xl text-[2.6rem] sm:text-5xl md:text-6xl font-bold sm:px-3 tracking-tighter pb-[6px] lg:pb-3"
          />

          <p className="text-white font-light text-[12px] sm:text-sm lg:text-lg leading-[1.7]">
            We&apos;ve embarked on a few projects to build products{" "}
            <br className="" /> that help us fulfil our mission at TONDr labs
          </p>
        </div>
      </div>

      <div className="overflow-hidden flex lg:my-10">
        <FeaturedProjectsCarousel next={next} />
      </div>

      <div className="flex justify-center items-center sm:justify-end  gap-3 max-w-[75rem] xl:mx-auto mx-6 mt-4 lg:absolute lg:right-[10%] lg:-translate-y-[230px]">
        <img
          src={arrowBack.src}
          alt="back"
          className="cursor-pointer w-[54px]"
          onClick={() => {
            setNext(false);
          }}
        />
        <img
          src={arrowForward.src}
          alt="forward"
          className="cursor-pointer w-[54px]"
          onClick={() => {
            setNext(true);
          }}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
